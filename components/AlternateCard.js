import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements'
import Layout from '../constants/Layout'

export const CardItem = ({
  pic,
  title,
  caption,
  description,
}) => {
  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={pic} style={styles.image} />

      {/* NAME */}
      <Text style={styles.name}>{title}</Text>

      {/* DISTANCE */}
      {caption && (
        <Text style={styles.description}>{caption}</Text>
      )}

      <Divider style={styles.divider} />

      {/* DESCRIPTION */}
      {description && (
        <Text style={styles.description}>{description}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerCardItem: {
  		backgroundColor: "white",
  		borderRadius: 8,
  		alignItems: "center",
  	},
  image: {
    borderRadius: 8,
    width: Dimensions.get('window').width - 80,
    height: 400,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  name: {
    paddingTop: 8,
    color: '#363636',
    fontSize: 25
  },
  divider: {
    backgroundColor: '#C0C0C0',
    width: Layout.window.width - 60,
    margin: 4,
  },
  description: {
      width: Dimensions.get('window').width - 10,
  		color: 'gray',
  		textAlign: "center",
  		fontSize: 13,
  		marginLeft: 1,
      marginRight: 1
  	}
  }
)

export default CardItem;
