import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height: '100%',
        bottom: 0,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form: {
        width: '100%',
        height: 'auto', // Se deixar um valor fixo, pode cortar o conteúdo caso coloque mais campos
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: '#000000',
        fontSize: 18,
        paddingLeft: 20,
    },
    formInput: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#F6F6F6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#FF0043',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20,
    }
})
export default styles