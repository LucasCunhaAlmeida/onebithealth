import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from "react-native";
import ResultImc from "./resultimc";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")

    function imcCalculator() {
        const altura = parseFloat(height.replace(",", "."));
        const peso = parseFloat(weight.replace(",", "."));
        if (isNaN(altura) || isNaN(peso) || altura === 0) return null;
        return (peso / (altura * altura)).toFixed(2);
    }

    function validationImc() {
        if (weight && height) {
            const imcValue = imcCalculator();
            setImc(imcValue);
            setMessageImc("Seu IMC é igual:");
            setTextButton("Calcular Novamente");
            setHeight("");
            setWeight("");
        } else {
            setImc(null);
            setMessageImc("Preencha o peso e altura");
            setTextButton("Calcular IMC");
        }
    }
     return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.formContext}>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Ex. 1.75"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Ex. 80.2"
                        keyboardType="numeric"
                    />
                    <TouchableOpacity 
                        style={styles.buttonCalculator}
                        onPress={() => validationImc()}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
            </View>
        </TouchableWithoutFeedback>
    );
}