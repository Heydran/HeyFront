import { useState } from "react"
import { SafeAreaView, Text, TouchableOpacity } from "react-native"

import styles from "../static/styles"
export default function Home(props) {
    return (
        <SafeAreaView style={styles.naviBar}>
            <TouchableOpacity
                style={styles.itensNaviBar}
                onPress={() => props.navigation.navigate('home')
                }><Text>Home</Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={styles.itensNaviBar}
                onPress={() => props.navigation.navigate('consulta')
                }><Text>Consulta</Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={styles.itensNaviBar}
                onPress={() => props.navigation.navigate('cadastro')
                }><Text>Cadastro</Text>

            </TouchableOpacity>
        </SafeAreaView>
    )
}
