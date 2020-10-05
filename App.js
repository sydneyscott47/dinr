import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppLoading, Icon } from 'expo'
import { LogBox } from 'react-native';
import {Asset} from 'expo-asset'
import {Font} from 'expo-font'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen'
import MatchesScreen from './screens/MatchesScreen'
import ProfileScreen from './screens/ProfileScreen'
import matchesReducer from './MatchesReducer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const store = createStore(matchesReducer);

LogBox.ignoreAllLogs();

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  render() {
    const Tab = createBottomTabNavigator();
    const MatchesStack = createStackNavigator();

    function MatchesStackScreen() {
  return (
    <MatchesStack.Navigator screenOptions={{headerShown: false}}>
      <MatchesStack.Screen name="Matches" component={MatchesScreen} />
      <MatchesStack.Screen name="Profile" component={ProfileScreen} />
    </MatchesStack.Navigator>
  );
}

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <Provider store={store}>
          <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Browse') {
                  return <Ionicons name="ios-restaurant" size={24} color="black" />;
              } else if (route.name === 'Matches') {
                iconName = focused ? 'heart' : 'hearto';
                return <AntDesign name={iconName} size={size} color={color} />;
              }
            }
          })}
          tabBarOptions={{
            activeTintColor: '#6495ED',
            inactiveTintColor: 'gray',
          }}>
              <Tab.Screen name="Browse" component={HomeScreen} />
              <Tab.Screen name="Matches" component={MatchesStackScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </Provider>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/splash.png'),
        require('./assets/images/icon.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.MaterialIcons.font,
        ...Ionicons.MaterialCommunityIcons.font,
        ...Ionicons.FontAwesome.font,
        ...Ionicons.Feather.font,
      }),
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
