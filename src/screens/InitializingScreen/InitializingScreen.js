import React, { Component } from 'react';
import {View, Text, AsyncStorage, Image} from 'react-native';
import {styles} from './InitializingScreen.styles';
import { inject, observer } from 'mobx-react';
import {USER_KEY} from "../../config";
import {goHome, goLogin, goProfile} from "../../App";
import {Images} from "../../styles/theme";
import LinearGradient from "react-native-linear-gradient";

@inject('appState')
@observer
class InitializingScreen extends Component {
    static options() {
        return {
            topBar: {
                visible: false
            }
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem(USER_KEY)
            console.log('user: ', user)
            if (user) {
                goHome();
            } else {
                goLogin();
            }
        } catch (err) {
            console.log('error: ', err);
            goLogin()
        }
    }

    render () {
        if (this.state.hasError) {
            return (
                <View style={styles.container}>
                  <Text>Something went wrong.</Text>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <Image source={Images.logo}/>
            </View>
        );
    }
}

export default InitializingScreen;
