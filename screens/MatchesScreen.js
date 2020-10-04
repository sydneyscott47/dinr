import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearMatches } from '../MatchesReducer';
import { SafeAreaView, ScrollView, StyleSheet, Button, View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const MatchesScreen = (props, { navigation }) => {
    return (
      <View style={styles.overall}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <Ionicons name="md-person" size={24} color="#C8C8C8" margin={16}/>
              <Text style={styles.welcome}>dinr</Text>
              <Ionicons name="md-person" size={24} color="white"/>
            </View>
            {props.matches.map((user, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: user.pic, size: 'large' }}
                title={user.title}
                titleStyle={styles.title}
                subtitle={user.tags}
                subtitleStyle={styles.subtitle}
                onPress={() => props.navigation.navigate('Profile', {pic: user.pic, title: user.title, tags: user.tags})}
              />
            ))}
          </ScrollView>
          <Button title="Clear All" onPress={() => props.clearMatches()}/>
        </SafeAreaView>
      </View>
    )
}

const mapState = state => {
  const { matches } = state.matches
  return { matches }
}

const mapDispatch = dispatch => (
  bindActionCreators({
    clearMatches,
  }, dispatch)
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#3F3F3F',
  },
  subtitle: {
    color: '#A5A5A5',
  },
  container: {
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
    color: '#3F3F3F'
  },
  overall: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default connect(mapState, mapDispatch)(MatchesScreen);
