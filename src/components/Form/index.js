import React, {useState} from "react";
import { View, 
        Text, 
        TextInput, 
        TouchableOpacity, 
        TouchableWithoutFeedback, 
        Keyboard,
        Share
    } from "react-native";
import ResultImc from "./resultimc";
import styles from "./style";
import * as Haptics from 'expo-haptics'; // Importando o módulo de feedback tátil do expo


export default function Form() {

    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")
    const [errorMessage, setErrorMessage] = useState("");

    function imcCalculator() {
        const altura = parseFloat(height.replace(",", "."));
        const peso = parseFloat(weight.replace(",", "."));
        if (isNaN(altura) || isNaN(peso) || altura === 0) return null;
        return (peso / (altura * altura)).toFixed(2);
    }

    function validationImc() {
        if (weight != '' && height != '') {
            const imcValue = imcCalculator();
            setImc(imcValue);
            setMessageImc("Seu IMC é igual:");
            setTextButton("Calcular Novamente");
            setHeight("");
            setWeight("");
            setErrorMessage("");
        } else {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error) // Chamada de função para feedback tátil
            setImc(null);
            setMessageImc("Preencha o peso e altura");
            setTextButton("Calcular IMC");
            setErrorMessage("Campo obrigatório*");
        }
    }


     return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.formContext}>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Ex. 1.75"
                        keyboardType="numeric"
                    />
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
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