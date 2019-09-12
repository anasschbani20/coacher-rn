import {
    StyleSheet
} from 'react-native';
import Theme from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Theme.padding,
        paddingTop: Theme.padding,
        justifyContent: 'space-between',
    },
    logoContainer:{
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    logo:{
        height: 170,
        resizeMode: "contain"
    },
    formContainer:{
        flex: 3,
        marginTop: 40
    },
    centerItems: {
        // alignItems: 'center',
        // justifyContent: 'center',
        // minHeight: 50,
        // flex: 1
    },
    inputTitle: {
        fontSize: 16,
        paddingBottom: 6,
        color: Theme.grey,
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
    },
    inputWrap: {
        borderColor: Theme.border,
        borderWidth: 1,
        backgroundColor: 'white',
        margin: 0,
        marginBottom: 10,
        borderRadius: 5
    },
    btns: {
        marginTop: 20,
    },
    submitButton: {
        height: 50,
        padding: 15,
        backgroundColor: Theme.backgroundColor,
        borderRadius: 5,
        marginTop: 10,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    btnText: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'left',
        width: '100%'
    },
    loginButton: {
        borderRadius: 12,
        backgroundColor: Theme.pink,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        marginTop: 10
    },
    loginText: {
        fontSize: 16,
        fontWeight: '800',
        color: 'white'
    },
    loginfb:{
        backgroundColor: '#3A559F'
    },
    loginGoogle:{
        backgroundColor: '#D34836'
    },
    iconcontainer:{
        width: 50,
        borderRightWidth: 2,
        borderRightColor: '#fff',
        marginRight: 20,
        alignItems: 'center',
    },
    iconButton:{

    }
})
