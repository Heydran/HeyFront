import { SafeAreaView, Dimensions } from "react-native"
import styles from "../static/styles"
import NaviBar from "./naviBar"
export default function Home({ navigation }) {
    console.log(Dimensions.get("screen").height);
    return (
        <SafeAreaView style={styles.mainContainer}>
            <NaviBar
                navigation={navigation}
            />
        </SafeAreaView>
    )
}
