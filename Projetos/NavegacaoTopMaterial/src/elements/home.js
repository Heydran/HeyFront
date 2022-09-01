import { SafeAreaView, Text, TouchableOpacity } from "react-native"
import styles from "../static/styles"
import NaviBar from "./naviBar"
export default function Home({ navigation }) {
    return (
        <SafeAreaView >
            <NaviBar
                navigation={navigation}
            />
        </SafeAreaView>
    )
}
