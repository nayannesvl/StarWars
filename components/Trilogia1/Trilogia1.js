import React from "react";
import { View, Text, Image } from 'react-native';

import darth from '../../assets/darth.jpg';
import styles from "./estilo";

export default function Trilogia1(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                A história do Darth Vader
            </Text>
            <Image style={styles.img} source={darth}/>
            <Text style={styles.conteudo}> Trilogia prequela. Episódios I, II, e III.</Text>
            <Text style={styles.conteudo}>
                Apesar de ter sido criada depois da trilogia original, essa é a primeira trilogia na ordem cronológica da série Star Wars. Nela é contada a história do grande vilão Darth Vader.
            </Text>

            <Text style={styles.conteudo}> Através dessa trilogia você vai saber de onde ele veio e quem ele é.</Text>
        </View>
    )
}