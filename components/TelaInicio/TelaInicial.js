import React from "react";
import { View, Text, Image } from 'react-native';

import starwars from '../../assets/starwars.webp';
import styles from "./estilo";

export default function TelaInicial(props){
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={ starwars }/>

            <Text style={styles.txt}> Você sabe qual é a ordem cronológica da franquia Star Wars?</Text>
            <Text style={styles.info}>Os principais filmes da franquia estão divididos em trilogias. Clique no botão a seguir para conferir.</Text>
        
            <View style={styles.box} onTouchEnd={ () => {props.navigation.navigate('Trilogia 1')}}>
                <Text style={styles.txtBox}> VER 1ª TRILOGIA</Text>
            </View>
            <View style={styles.box} onTouchEnd={  ()=> {props.navigation.navigate('Trilogia 2')}}>
                <Text style={styles.txtBox}> VER 2ª TRILOGIA</Text>
            </View>
            <View style={styles.box} onTouchEnd={ () => {props.navigation.navigate('Trilogia 3')}}>
                <Text style={styles.txtBox}> VER 3ª TRILOGIA</Text>
            </View>
        
        </View>


    )
}


