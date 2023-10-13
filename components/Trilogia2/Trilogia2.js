import React from "react";
import { Image, View, Text } from 'react-native';

import styles from "./estilo";
import luke from "../../assets/luke.jpg"

export default function Trilogia2() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> 
                A história de Luke Skywalker
            </Text>
            <Image  source={ luke } style={styles.img} />
            <Text style={styles.conteudo}>Trilogia original. Episódios IV, V e VI.</Text>
            <Text style={styles.conteudo}>Essa foi a primeira trilogia a surgir porém sua história só se passa após a trilogia prequela.</Text>
            <Text style={styles.conteudo}>Nela Luke Skywalker se aventura pela galáxia para atender a um pedido de socorro da princesa Léia, e se batalha com o grande vilão Darth Vader.</Text>
        </View>
    )

}