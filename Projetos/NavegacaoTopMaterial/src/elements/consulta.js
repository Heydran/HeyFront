import { useEffect, useState } from "react"
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import styles from "../static/styles"
import NaviBar from "./naviBar"
export default function Consulta({ navigation, route }) {
    const [users, setUsers] = useState()
    useEffect(() => {
        fetch("http://localhost:8080/user/querry")
            .then(data => data.json())
            .then(result => setUsers(result))
    }, [])
    return (
        <SafeAreaView style={styles.mainContainer}>
            <NaviBar
                navigation={navigation}
            />

            <SafeAreaView style={styles.conteudoContainer}>
                <Text>Pessoas:</Text>
                <FlatList
                    data={users}
                    renderItem={({ item }) => <View><Text>{item.user_name}</Text></View>}
                    keyExtractor={item => item.user_code}>

                </FlatList>
            </SafeAreaView>
        </SafeAreaView>
    )
}