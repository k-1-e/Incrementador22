import React, {useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    position: 'br' | 'bl';
    size?: 'sm' | 'md' | 'lg';
    title: string;
    onPress: () => void
}
const FloatButton = ({ size, position, title, onPress }: Props) => {
        return (
                <TouchableOpacity onPress={onPress} 
                style={[
                    styles.button,
                     position === 'br' ? styles.right : styles.left,
                     size === 'sm' ? styles.sm : null,
                     size === 'lg' ? styles.lg : null
                      
                ]}>
                <Text style={styles.textButton}>{title}</Text>
                </TouchableOpacity>
    )
}
export default FloatButton


const styles = StyleSheet.create({
  
    button: {
        backgroundColor: 'white',
        borderRadius: 100,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sm: {
        height: 30,
        width: 30,

    },
    lg: {
        height: 70,
        width: 30,

    },
    textButton: {
        color: 'black',
        fontSize: 20,
    },
    right: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    left: {
        position: 'absolute',
        bottom: 20,
        left: 20
    },
   
})