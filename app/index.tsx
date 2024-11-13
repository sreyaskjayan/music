import { Text, View } from "react-native"

const Index = () => {
  return(
    <View 
      style={{
        backgroundColor: "red", 
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      }}>
      <Text style={{fontSize:30, fontWeight:"700", color:"white"}}>Hello</Text>
    </View>
  ) 
}

export default Index