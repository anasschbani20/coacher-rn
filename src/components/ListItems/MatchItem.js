import React, { Component } from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Theme, {Images} from './../../styles/theme';


export default class MatchItem extends Component{


    constructor(props){
        super(props);
    }

    render() {
        // const {
        //     teamA,
        //     teamB,
        //     dateTime,
        //     stadium,
        //     referee,
        //     award
        // } = this.props.match;
        return <View style={styles.container}>
            <View style={styles.flags}>
                <View style={styles.flag}>
                    <Image source={{uri: 'https://www.comprarbanderas.es/images/banderas/400/21938-raja-club-athletic_400px.jpg'}} style={styles.flagImage}/>
                    <Text>hello</Text>
                </View>
                <View style={styles.vs}>
                    <Text style={styles.vsText}>VS</Text>
                </View>
                <View style={styles.flag}>
                    <Image source={{uri: 'https://www.comprarbanderas.es/images/banderas/400/21938-raja-club-athletic_400px.jpg'}} style={styles.flagImage}/>
                    <Text>hello2 zadhazioda</Text>
                </View>
            </View>
            <View style={styles.information}>
                <View style={[styles.info, styles.lightGrayItem]}>
                    <View style={styles.infoIconContainer}><Image source={Images.timeIcon} style={styles.infoIcon}/></View>
                    <Text style={styles.infoText}>09/08/2019 21h30 GMT</Text>
                </View>
                <View style={styles.info}>
                    <View style={styles.infoIconContainer}><Image source={Images.stadiumIcon} style={styles.infoIcon}/></View>
                    <Text style={styles.infoText}>Stadium Mohammed 5</Text>
                </View>
                <View style={[styles.info, styles.lightGrayItem]}>
                    <View style={styles.infoIconContainer}><Image source={Images.refreeIcon} style={styles.infoIcon}/></View>
                    <Text style={styles.infoText}>Arbitre: Anass</Text>
                </View>
                <View style={styles.info}>
                    <View style={styles.infoIconContainer}><Image source={Images.awardIcon} style={styles.infoIcon}/></View>
                    <Text style={styles.infoText}>Coupe du trone</Text>
                </View>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
   container:{
       flex: 1,
       paddingTop: 10,
       paddingBottom: 10
   },
    flags:{
       flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    vs:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    vsText:{
        fontWeight: 'bold'
    },
    flag:{
       flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flagImage:{
        width: 100,
        height: 100
    },
    information:{
        // paddingLeft: 20,
        // alignItems: 'center',
        flex: 1,
        // backgroundColor: 'yellow'
    },
    info:{
       flexDirection: 'row',
       alignItems: 'center',
        paddingLeft: 20,
       marginTop: 5,
        flex: 1,
        height: 30
    },
    infoIcon:{
       height: '100%',
        resizeMode: 'contain'
    },
    infoText:{
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        lineHeight: 25,
        fontSize: 15,
        opacity: .6
    },
    infoIconContainer:{
        minWidth: 33,
        alignItems: 'center',
        marginRight: 5,
        height: 25
    },
    lightGrayItem:{
       backgroundColor: '#F1F1F1'
    }
});