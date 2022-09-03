import { SafeAreaView, Text, TouchableOpacity } from "react-native"
import styles from "../static/styles/userCard"

export default props => {
    return <SafeAreaView style={styles.userCard}>
        <Text style={styles.userLine}>
            {`${props.user.userName}- ${props.user.userEmail}`}
        </Text>

        <TouchableOpacity style={styles.editButton}>
            <Text>Editar</Text>
        </TouchableOpacity>
    </SafeAreaView>
}