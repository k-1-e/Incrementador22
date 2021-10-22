import React, {useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import FloatButton from "../components/FloatButton";


// revisar la exportacion del floatbutton

const Incrementador = () => {

    const [ cantidad, setCantidad] = useState(10)
    

    const handleSum = () => {
         setCantidad (cantidad + 1)
        
    } 
    const handleSubtract = () => {
        setCantidad (cantidad - 1)
        
    }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{cantidad}</Text>
                
                <FloatButton position='br' size='md' title='+1' onPress={handleSum} ></FloatButton>
                <FloatButton position='bl' size='md' title='-1' onPress={handleSubtract}  ></FloatButton>

            </View>
    )
}
export default Incrementador

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'coral',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: { 
        fontSize: 120,
        color: 'black',
        
    },
   
})