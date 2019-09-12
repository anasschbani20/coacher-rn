import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView} from 'react-native';
import {styles} from './HomeScreen.styles';
import { inject, observer } from 'mobx-react'
import MatchItem from "../../components/ListItems/MatchItem";


@inject('appState')
@observer
export default class HomeView extends Component {
    static options(){
        return {
            _statusBar: {
                backgroundColor: 'transparent',
                style: 'dark',
                drawBehind: true,
            },
            topBar: {
                title: {
                    text: 'Home',
                    color: '#fff'
                },
                drawBehind: true,
                visible: true,
                animate: true,
            }
        }
    }
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
                    height: 3,
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
                <FlatList data={[{key: 'a'}, {key: 'b'}, {key: 'c'}]}
                          renderItem={item=>{return <MatchItem />}}
                          ItemSeparatorComponent={()=>this.renderSeparator()}
                />
            </ScrollView>
        );
    }
}

// export default HomeScreen;
