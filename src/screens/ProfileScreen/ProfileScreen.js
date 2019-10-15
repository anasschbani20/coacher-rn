import React, { Component } from 'react';
import {View, Text, Image, ScrollView, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import {styles} from './ProfileScreen.styles';
import {Images} from "../../styles/theme";
import MatchItem from "../../components/ListItems/MatchItem";
import TeamPickerItem from "../../components/ListItems/TeamPickerItem";
import ButtonView from "../../components/theme/ButtonView";
//import { ProfileComponentJsWrapper } from './ProfileComponentJs.styles';
import Swiper from 'react-native-swiper';
import services from '../../service/football.service';
import {fakeLeagues, fakeTeams} from "../../Fake/fakedata";
import FastImage from 'react-native-fast-image'

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      choosenLeague: null,
      teams: [null, null, null],
      selectedTeamIndex: 0,
      swiperIndex: 0,
      countries: [],
      leagues: [],
    };
  }

  componentDidMount(): void {
      // this.getCountries();
      this.getLeagues();
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

  swipe(scrollBy){
        const index = this.state.swiperIndex;
        if(index === 0){
            this.refs.swiper.scrollBy(1);
            this.setState({swiperIndex: 1});
        }else if(index === 1){
            this.refs.swiper.scrollBy(-1);
            this.setState({swiperIndex: 0});
        }
    }

  async getLeagues(){
    // const leagues = await services.leagues();
    // this.setState({leagues: leagues.api.leagues});
    this.setState({leagues: fakeLeagues});
  }

  chooseLeague(value){
      console.log('chooseLeague', value);
      this.setState({choosenLeague: value, leagues: fakeTeams}, () => {
            this.swipe(1)
        });
    }

  chooseTeam(value){
      console.log('chooseTeam', value);
      const newTeams = this.state.teams;
      newTeams[this.state.selectedTeamIndex] = value;
      this.setState({teams: newTeams});
      console.log('chooseTeam', value);
    }

  render () {
    console.log('state', this.state);
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        {/*<TouchableOpacity style={styles.imageProfileContainer} >*/}
        {/*  <Image source={Images.anonyme} style={styles.imageProfile}/>*/}
        {/*</TouchableOpacity>*/}
        <View style={styles.topTitleContainer}>
          <Text  style={styles.topTitle}>
            Equipes
          </Text>
        </View>
          {/*<ImageBackground*/}
          {/*    style={[styles.teamContainer, this.state.selectedTeamIndex=== index ? styles.selectedTeamIndex: null]}*/}

          {/*    source={myTeam && myTeam.logo ? {uri:myTeam.logo} : Images.emtyState1 }>*/}
          {/*    <View style={styles.orderteamContainer}>*/}
          {/*        <Text style={styles.orderteam}>{index}</Text>*/}
          {/*    </View>*/}
          {/*</ImageBackground>*/}
        <View style={styles.teamsContainer}>
            {this.state.teams.map((myTeam, index)=>
                 <TouchableOpacity onPress={()=>this.setState({selectedTeamIndex: index})}
                                   style={[styles.teamContainer, this.state.selectedTeamIndex=== index ? styles.selectedTeamIndex: null]}>
                     {
                         myTeam && myTeam.logo ?
                             <FastImage
                                 source={{uri:myTeam.logo}}
                                 width = {75}
                                 height = {75}
                                 style={styles.choosenTeam}
                                 onLoadStart={()=>console.log('loadingImage onLoadStart')}
                                 onProgress={()=>console.log('loadingImage onProgress')}
                                 loading={()=>console.log('loadingImage loading')}
                                 onLoadEnd={()=>console.log('loadingImage onLoadEnd')}
                             />:
                             <FastImage
                                 source={Images.emtyState1}
                                 resizeMode={'center'}
                                 style={styles.choosenTeam}
                             />
                     }
                    {/*<Image source={{uri:'https://www.api-football.com/public/teams/33.png'}}*/}
                    {/*       style={styles.choosenTeam}*/}
                    {/*/>*/}
                    <View style={styles.orderteamContainer}>
                        <Text style={styles.orderteam}>{index}</Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
        <View style={styles.teamPickerContainer}>
          <View style={styles.teamPickerTitleContainer}>

              <TouchableOpacity onPress={() => this.swipe(-1)} style={styles.teamPickerTitleIconContainer}>
                  {
                      this.state.swiperIndex > 0 && <Image source={Images.previousArrow}/>
                  }
              </TouchableOpacity>


            <View style={styles.teamPickerTitleTextContainer}>
                {
                    this.state.swiperIndex > 0 ?
                    <Text style={styles.teamPickerTitleText}>
                        Choisir l'équipe
                    </Text>
                        :
                    <Text style={styles.teamPickerTitleText}>
                        Choisir un pays
                    </Text>
                }
            </View>
          </View>

            <Swiper style={styles.tPlistContainer}
                    ref='swiper'
                    showsButtons={false}
                    showsPagination={false}
                    scrollEnabled={false}>
                <ScrollView>
                    <FlatList
                        data={this.state.leagues}
                        renderItem={(item)=>
                        {
                            return <TeamPickerItem item={item} type={0} keyExtractor={item.index} onPress={this.chooseLeague.bind(this)} />
                        }}
                        ItemSeparatorComponent={()=>this.renderSeparator()}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView>
                <ScrollView>
                    <FlatList
                        data={this.state.leagues}
                        renderItem={(item)=>
                        {
                            return <TeamPickerItem item={item} type={0} keyExtractor={item.index} onPress={()=>this.chooseTeam(item.item)} />
                        }}
                        ItemSeparatorComponent={()=>this.renderSeparator()}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView>
            </Swiper>


        </View>
          <View>
              <ButtonView title={'Enregistrer'}
                          button={styles.myButton}
                          text={styles.btnText}
                          onPress={()=> this.swipe(1)}
              />
          </View>
      </ScrollView>
    );
  }

}
