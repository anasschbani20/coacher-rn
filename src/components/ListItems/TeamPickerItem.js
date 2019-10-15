import React, { Component } from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
// import SvgUri from 'react-native-svg-uri';
// import Image from 'react-native-remote-svg'
// import Image from 'react-native-remote-svg';
import SvgUri from 'react-native-fast-svg';
import DebouncedTouchableOpacity from "../theme/DebouncedTouchableOpacity";
import FastImage from 'react-native-fast-image'
import {Images} from "../../styles/theme";

export default class TeamPickerItem extends Component{


    constructor(props){
        super(props);
    }
    // ef39e24b1d0722bf904d99c5f2f56d1e811836b1701ad5324bf9bb9aaeef2cd9
    // o6bmWv8rUOlE0ToGjUPl1R3vO0hiiD6xEEX8H5pxa6ZIq2mCuWRRrq0k0PeK
    renderImage(type, item){
        console.log('renderImage', item);
        // return <Image source={{uri: item.flag}} style={styles.flagImage} />;
        {/*<Image source={{uri: item.flag}} style={styles.flagImage} />;*/}
        if(item && item.flag && item.flag.length>0) {
            return <SvgUri
                width={70}
                height={70}
                source={{uri: item.flag}}
            />
        }
        if(item && item.logo && item.logo.length>0){
             return <FastImage
                 style={styles.flagContainer}
                width={70}
                height={70}
                source={{uri:item.logo}}
                // source={Images.logo}
            />
        }

    }

    renderTitle(type, item){
        return item.name;
        // switch(type){
        //     case 0: return item.country
        // }
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
        const {item, type} = this.props.item;
        console.log('const {item, type}', item);
        // const type = this.props.type; // [0: coutries]  [1: leages]  [2: teams]

        console.log('TeamPickerItem', item)
        return <DebouncedTouchableOpacity style={styles.container} onPress={()=>this.props.onPress()}>
            <View style={styles.flagContainer}>
                {
                    this.renderImage(type, item)
                }
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
            </View>
        </DebouncedTouchableOpacity>
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
        resizeMode: 'center',
    },
    nameContainer:{
        // backgroundColor: 'red'
    },
    nameText:{
       fontSize: 17,
       fontWeight: '500'
    }
});
