import React from 'react'
import { Image, SafeAreaView, StyleSheet, View, Button } from 'react-native'
import { Divider, Icon, Text } from 'react-native-elements'
import Layout from '../constants/Layout'
import { HomeScreenPics } from '../constants/Pics'
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({route}) => {
    const { pic, title, tags } = route.params;

    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="md-person" size={24} color="#C8C8C8" margin={16}/>
        <Text style={styles.welcome}>dinr</Text>
        <Ionicons name="md-person" size={24} color="white"/>
      </View>
        <View style={styles.imageContainer}>
          <Image source={pic} style={styles.image} />
        </View>
        <Text h4 style={styles.name}>
          {title}
        </Text>
        <Text style={styles.desc}>{tags}</Text>
        <Divider style={styles.divider} />
        <Text style={styles.desc}>
          Here is a two-line desription of the restaurant.
          See? Two lines.
        </Text>
        <Divider style={styles.divider} />
        <Text style={styles.desc}>
          Hours:
        </Text>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageContainer: {
    margin: 20,
  },
  image: {
    width: Layout.window.width - 60,
    height: Layout.window.height / 2 - 60,
    borderRadius: 20,
  },
  name: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  desc: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginHorizontal: 30,
    fontSize: 14,
  },
  divider: {
    backgroundColor: '#C0C0C0',
    width: Layout.window.width - 60,
    margin: 20,
  },
  socialLinks: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: Layout.window.width,
    marginLeft: 40,
  },
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 15,
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
})

export default ProfileScreen
