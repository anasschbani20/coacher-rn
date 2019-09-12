import React, { Component } from 'react';
import {styles} from './AuthScreen.styles';
import DebouncedTouchableOpacity from '../../components/theme/DebouncedTouchableOpacity';
import { Navigation } from 'react-native-navigation';
import {
  TextInput,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import images from '../../assets/images';
import {inject, observer} from 'mobx-react';
import {appStack, goHome, goProfile} from '../../App';

@inject ('user')
@observer
export default class LoginScreen extends Component {

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
      loading: false
    };
  }

  onSubmit(){
    this.setState({ loading: true });

    // goHome();
      goProfile();
  }

  onClickPush = (link) => async () => {
    await Navigation.push('LOGIN', {
      component: {
        name: link,
      }
    });
  }

  goToApp = (link) => async () => {
    await appStack ();
  }

  render () {
    console.log('rendering login');
    if (this.state.hasError) {
      return (
          <View style={styles.container}>
            <Text>Something went wrong.</Text>
          </View>
      );
    }
    return (
        <ScrollView>
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Image source={images.logo} style={styles.logo} />
              </View>
              <View style={styles.formContainer}>
                <Text style={styles.inputTitle}>Email</Text>
                <View style={styles.inputWrap}>
                  <TextInput ref="email"
                             placeholder="john@smith.com"
                             style={styles.input}
                             autoCapitalize='none'
                             onChangeText={(text) => this.setState({ email: text })}
                             returnKeyType="next"
                             value={this.state.email}
                             onSubmitEditing={(event) => {
                               this.refs.password.focus();
                             }} />
                </View>
                <Text style={styles.inputTitle}>Password</Text>
                <View style={styles.inputWrap}>
                  <TextInput ref="password"
                             placeholder="••••••••"
                             style={styles.input}
                             autoCapitalize='none'
                             onChangeText={(text) => this.setState({ password: text })}
                             returnKeyType="done"
                             value={this.state.password}
                             secureTextEntry={true}
                             onSubmitEditing={() => { }} />
                </View>
                <View style={styles.btns}>
                  {this.props.loading ? (<LoaderView/>) :
                      (<DebouncedTouchableOpacity
                          style={styles.submitButton}
                          // onPress={()=> this.onSubmit(this.state.email, this.state.password)}>
                          onPress={this.onSubmit.bind(this)}>
                        <Text style={[styles.btnText, {width: '100%', textAlign: 'center'}]}>Se connecter</Text>
                      </DebouncedTouchableOpacity>)}
                  {this.props.loading ? (<LoaderView/>) :
                      (<DebouncedTouchableOpacity
                          style={[styles.submitButton, styles.loginfb]}
                          // onPress={()=> this.onSubmit(this.state.email, this.state.password)}>
                          onPress={this.onSubmit.bind(this)}>
                        <View style={styles.iconcontainer}>
                          <Image source={images.facebook} style={styles.iconButton} />
                        </View>

                        <Text style={styles.btnText}>Se connecter via Facebook</Text>
                      </DebouncedTouchableOpacity>)}
                  {this.props.loading ? (<LoaderView/>) :
                      (<DebouncedTouchableOpacity
                          style={[styles.submitButton, styles.loginGoogle]}
                          // onPress={()=> this.onSubmit(this.state.email, this.state.password)}>
                          onPress={this.onSubmit.bind(this)}>
                        <View style={styles.iconcontainer}>
                          <Image source={images.google} style={styles.iconButton} />
                        </View>
                        <Text style={styles.btnText}>Se connecter via Google</Text>
                      </DebouncedTouchableOpacity>)}
                </View>
              </View>
            </View>
        </ScrollView>

    );
  }
}
