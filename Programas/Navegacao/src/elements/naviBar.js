import { useState } from "react"
import { SafeAreaView, Text, TouchableOpacity } from "react-native"

import styles from "../static/styles"
export default function Home(props) {
    const [pessoas, setPessoas] = useState(["pessoa 1", "pessoa 2", "pessoa 3", "pessoa 4", "pessoa 5", "pessoa 6", "pessoa 7"])
    return (
        <SafeAreaView style={styles.naviBar}>
            <TouchableOpacity
                style={styles.itensNaviBar}
                onPress={() => props.navigation.navigate('home')
                }><Text>Home</Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={styles.itensNaviBar}
                onPress={() => props.navigation.navigate('consulta',{pessoas})
                }><Text>Consulta</Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={styles.itensNaviBar}
                onPress={() => props.navigation.navigate('cadastro',{setPessoas})
                }><Text>Cadastro</Text>

            </TouchableOpacity>
        </SafeAreaView>
    )
}
