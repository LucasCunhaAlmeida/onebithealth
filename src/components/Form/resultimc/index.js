import React from "react";
import { View, Text, TouchableOpacity, Share} from "react-native";
import styles from "./style";

export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: `📏 Acabei de calcular meu IMC com o OneBitHealth e o resultado foi ${props.resultImc}! Cuidar da saúde começa com o autoconhecimento — e esse foi meu primeiro passo.`
        });
    }

    return (
        <View style={styles.resultImc}>
            
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
            <View style={styles.boxSharedButton}>
                {props.resultImc != null ? // Se o resultado do IMC não for nulo, exibe o botão de compartilhar
                    <TouchableOpacity 
                    style={styles.shared} 
                    onPress={onShare}>
                        <Text style={styles.sharedText}>compartilhar</Text>
                    </TouchableOpacity>
                : <View/> // Caso contrário, não exibe uma View vazia
                }
            </View>
        </View>
    );
}