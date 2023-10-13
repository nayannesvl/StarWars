import React from "react";
import { Image, View, Text } from 'react-native';

import rey from '../../assets/rey.jpg'
import styles from "./estilo";

export default function Trilogia3() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>A história de Rey</Text>
            <Image source={rey} style={styles.img}/>
            <Text style={styles.conteudo} >Trilogia sequela. Episódios VII, VIII e IX.</Text>
            <Text style={styles.conteudo}>Enquanto surge uma nova ameaça para a galáxia, Rey, uma catadora de sucata, e Finn, um soldado imperial desertor, devem se juntar a Han Solo e Chewbacca para procurar a única esperança de restaurar a paz da galáxia.</Text>
        </View>
    )
}