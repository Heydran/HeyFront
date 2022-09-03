import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor: "#555"
    },
    naviBar: {
        backgroundColor: '#099',
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    itensNaviBar:{
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#000",
    },
    containerConsulta:{
        marginTop:20,
        marginLeft: 50

    }, 
    containerCadastro:{
        marginTop:20,
        marginLeft: 50

    },
    itensLista:{
           
    },
    contCadastro:{
        margin:10,
        
    },
    userCard:{
        borderColor: "#0ff",
        borderWidth: 2,
        marginTop: 2,
        backgroundColor: "#222",
          
    },
    userLine:{
        color: "#0ff"
    },
    inputCadastro:{
        borderWidth: 2,
        borderColor: "#0ff",
        backgroundColor: "#222",
        borderRadius: 5
    }
})

export default styles