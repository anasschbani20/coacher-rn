import React, { Component } from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {styles} from './ProfileScreen.styles';
import {Images} from "../../styles/theme";
import MatchItem from "../../components/ListItems/MatchItem";
import TeamPickerItem from "../../components/ListItems/TeamPickerItem";
import ButtonView from "../../components/theme/ButtonView";
//import { ProfileComponentJsWrapper } from './ProfileComponentJs.styles';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  renderSeparator() {
    return (
        <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#000",
              opacity: .2
            }}
        />
    );
  };

  render () {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageProfileContainer}>
          <Image source={Images.anonyme} style={styles.imageProfile}/>
        </View>
        <View style={styles.labelContainer}>
          <Text  style={styles.label}>
            Veillez choisir une/ou tes 3 équipes préférées
          </Text>
        </View>
        <View style={styles.teamsContainer}>
          <View style={styles.teamContainer}>
            <Image source={Images.emtyState1} />
            <View style={styles.orderteamContainer}>
              <Text style={styles.orderteam}>1</Text>
            </View>
          </View>
          <View style={styles.teamContainer}>
              <Image source={Images.emtyState1} />
            <View style={styles.orderteamContainer}>
              <Text style={styles.orderteam}>2</Text>
            </View>
          </View>
          <View style={styles.teamContainer}>
              <Image source={Images.emtyState1} />
            <View style={styles.orderteamContainer}>
              <Text style={styles.orderteam}>3</Text>
            </View>
          </View>
        </View>
        <View style={styles.teamPickerContainer}>
          <View style={styles.teamPickerTitleContainer}>
            <View style={styles.teamPickerTitleIconContainer}>
              <Image source={Images.rightArrow} style={{color: '#fff'}}/>
            </View>
            <View style={styles.teamPickerTitleTextContainer}>
              <Text style={styles.teamPickerTitleText}>
                Selectionner votre équipe
              </Text>
            </View>
          </View>
          <ScrollView style={styles.tPlistContainer}>
            <FlatList
                data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'f'}]}
                renderItem={(item)=>{return <TeamPickerItem />}}
                ItemSeparatorComponent={()=>this.renderSeparator()}
            />
          </ScrollView>
        </View>
          <View>
              <ButtonView title={'Enregistrer'}
                          button={styles.myButton}
                          text={styles.btnText}
              />
          </View>
      </ScrollView>
    );
  }
}
