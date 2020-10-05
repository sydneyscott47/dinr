import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addMatch } from '../MatchesReducer';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import {CardItem} from '../components/AlternateCard'
import { HomeScreenPics } from '../constants/Pics'
import { Ionicons } from '@expo/vector-icons';

function HomeScreen (props) {
    return (
    <View style={styles.overall}>
      <SafeAreaView style={styles.container}>
        <Swiper
          cards={HomeScreenPics}
          renderCard={CardItem}
          infinite
          backgroundColor="white"
          cardHorizontalMargin={0}
          showSecondCard={false}
          verticalSwipe={false}
          onSwipedRight={(idx) => props.addMatch(HomeScreenPics[idx])}
        />
        <View style={styles.header}>
          <Ionicons name="md-person" size={24} color="#C8C8C8" margin={16}/>
          <Text style={styles.welcome}>dinr</Text>
          <Ionicons name="md-person" size={24} color="white"/>
        </View>
      </SafeAreaView>
    </View>
    )
}

const mapDispatch = dispatch => (
  bindActionCreators({
    addMatch,
  }, dispatch)
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Chalkduster',
    color: '#3F3F3F',
  },
  overall: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-around'
  }
})

export default connect(null, mapDispatch)(HomeScreen);
