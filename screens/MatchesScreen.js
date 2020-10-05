import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearMatches, deleteMatch } from '../MatchesReducer';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native'
import { ListItem, Avatar, Button } from 'react-native-elements'
import { Ionicons, Feather } from '@expo/vector-icons'
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
              <ListItem key={i}
              bottomDivider
              onPress={() => props.navigation.navigate('Profile',
              {pic: user.pic, title: user.title, caption: user.caption, description: user.description})}>
                <Avatar
                rounded
                size="large"
                source={user.pic} />
                <ListItem.Content>
                  <ListItem.Title style={styles.title}>{user.title}</ListItem.Title>
                  <ListItem.Subtitle style={styles.subtitle}>{user.tags}</ListItem.Subtitle>
                </ListItem.Content>
                <Feather name="delete" size={24} color="black" onPress={() => props.deleteMatch(user)}/>
            </ListItem>
            ))}

            {(props.matches.length > 0) ?
              <Button title="Clear All" style={{margin: 10}} onPress={() => props.clearMatches()}/> :
            <Text style={{fontSize: 24, color: '#3F3F3F', textAlign: 'center'}}>No matches yet. Get swipin'!</Text>}
          </ScrollView>
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
    deleteMatch
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
