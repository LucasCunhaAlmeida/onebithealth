import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import ResultImc from "./resultimc";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")

function imcCalculator() {
    const altura = parseFloat(height);
    const peso = parseFloat(weight);
    if (isNaN(altura) || isNaN(peso) || altura === 0) return null
    const imcValue = ((peso / (altura * altura)).toFixed(2))
    setImc(imcValue)
    return imcValue
}

function validationImc() {
    if (weight != null && height != null){
        const imcValue = imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é igual: ")
        setTextButton("Calcular Novamente")
        return
    } else{
        setImc(null)
        setMessageImc("Preencha o peso e altura")
        setTextButton("Calcular IMC")
    }
}
    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.formInput}
                   onChangeText={setHeight} value={height}
                    placeholder="Ex. 1.75" keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.formInput}
                    onChangeText={setWeight} value={weight}
                    placeholder="Ex. 80.2" keyboardType="numeric"
                />
                <TouchableOpacity style={styles.buttonCalculator}>
                    onPress= {() => validationImc()}
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}