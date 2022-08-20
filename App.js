import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, View } from 'react-native'
import { useState } from "react"

export default function App() {
  const [frutaAtual, setFrutaAtual] = useState("")
  const [frutas, setFrutas] = useState(["oi","oi"])
  const [msg, setMsg] = useState("")
  const adicionar = (fruta) => {
    fruta!= '' ? setFrutas([...frutas,frutaAtual],setFrutaAtual(""),setMsg("")):alert("oi")
  }
  
  return (
    <SafeAreaView style={styles.container}>
      
      <View>{frutas.map((fruta,i)=><Text key={i}>{fruta}</Text>)}</View>
      <TextInput
      placeholder="Digite a fruta"
      style = {styles.input}
      onChangeText={setFrutaAtual}
      value={frutaAtual}
      autoFocus
      
      />
      <TouchableOpacity style = {styles.touchable}
      onPress={adicionar}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderColor:"black",
    borderWidth:1,
    backgroundColor:"lightgray"
    
  },
  touchable:{
    backgroundColor:"#0ff",
    borderWidth:1,
    borderColor:"black",
    padding:5

  }
});
