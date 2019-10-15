import { StyleSheet } from "react-native";
import Theme from '../../styles/theme';
import {appstyles} from '../Screens.styles';

export const styles = Object.assign(appstyles, StyleSheet.create({

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
        backgroundColor: Theme.lightgray,
        width: 75,
        height: 75,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 37
    },
// {uri:'https://www.api-football.com/public/teams/33.png'}
    choosenTeam:{
        position: 'absolute',
        flex: 1,
        resizeMode: 'center',
        width: 75,
        height: 75,
        top: 0,
        left: 0,
    },
    orderteamContainer:{
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: Theme.blue,
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
    },
    teamPickerTitleContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        // borderBottomColor: Theme.border,
        // borderBottomWidth: 1,
        backgroundColor: Theme.lightgray,
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
        // color: '#fff',
        opacity: .8,
        fontSize: 18,
    },
    selectedTeamIndex:{
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: Theme.mainColor,
        shadowOffset: { height: 0, width: 0 },
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
}));
