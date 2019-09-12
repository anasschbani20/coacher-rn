import React, { Component } from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Theme, {Images} from './../../styles/theme';


export default class TeamPickerItem extends Component{


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
            <View style={styles.flagContainer}>
                <Image source={{uri: 'https://www.comprarbanderas.es/images/banderas/400/21938-raja-club-athletic_400px.jpg'}}
                        style={styles.flagImage}
                />
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Morocco</Text>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
   container:{
       flex: 1,
       // paddingTop: 5,
       // paddingBottom: 5,
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'flex-start'
   },
    flagContainer:{
       width: 70,
       height: 70,
       marginRight: 20,
    },
    flagImage:{
        height: '100%',
        resizeMode: 'contain'
    },
    nameContainer:{

    },
    nameText:{
       fontSize: 17,
       fontWeight: '500'
    }
});