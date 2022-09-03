import { SafeAreaView } from "react-native"
import styles from "../static/styles"
import NaviBar from "./naviBar"
export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <NaviBar
                navigation={navigation}
            />
        </SafeAreaView>
    )
}
