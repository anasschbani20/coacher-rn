import { StyleSheet } from "react-native";
import Theme from '../../styles/theme';

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        paddingTop: 10
    },
    imageProfileContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfile:{

    },
    labelContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    label:{
        fontSize: 15,
        opacity: .7,
    },
    teamsContainer:{
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    teamContainer:{
        backgroundColor: Theme.border,
        width: 75,
        height: 75,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderteamContainer:{
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: Theme.mainColor,
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderteam:{
        color: '#fff'
    },
    teamPickerContainer:{
        borderColor: Theme.border,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
    },
    teamPickerTitleContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        // borderBottomColor: Theme.border,
        // borderBottomWidth: 1,
        backgroundColor: Theme.mainColor,
    },
    teamPickerTitleIconContainer:{
        paddingRight: 5,
        paddingLeft: 10,
        height: '100%'
    },
    teamPickerTitleTextContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        paddingRight: 5,
        paddingLeft: 5,
    },
    teamPickerTitleText:{
        color: '#fff',
        fontSize: 15,
    },
    tPlistContainer:{
        height: 280
    },
    myButton:{
        height: 50,
        padding: 15,
        backgroundColor: Theme.backgroundColor,
        borderRadius: 5,
        marginTop: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 10,
    },
    btnText:{
        color: '#fff',
        fontSize: 15,
    }
});