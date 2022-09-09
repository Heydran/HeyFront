import { useEffect, useState } from "react"
import { SafeAreaView, View, Text } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import UserCard from "./userCard"
import styles from "../static/styles/consulta"
import NaviBar from "./naviBar"
export default function Consulta({ navigation }) {
    const [users, setUsers] = useState()
    useEffect(() => {
        fetch("https://e21project-be.herokuapp.com/user/query")
            .then(data => data.json())
            .then(result => setUsers(result))
            .catch(err => console.log(err))
    }, [])
    return (
        <SafeAreaView style={styles.mainContainer}>
            <NaviBar
                navigation={navigation}
            />

            <SafeAreaView style={styles.containerConsulta}>
                <Text>Pessoas:</Text>
                <FlatList
                    data={users}
                    keyExtractor={item => item.userCode}
                    
                    renderItem={({ item }) => 
                    
                    <UserCard user = {item}/>
                }
                    >

                </FlatList>
            </SafeAreaView>
        </SafeAreaView>
    )
}