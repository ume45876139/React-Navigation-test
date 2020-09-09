import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from '../../styles';

const Introduction = () => {
  return(
    <View style={styles.container}>
      <Image
        style={{ width: 150, height: 150 }}
        source={require('../../images/lJtSwJJh_400x400.jpg')}
      />
      <Text style={styles.name}>Fumihito Umekita</Text>
      <Text style={styles.introduction}>Lorem Ipsum is simply dummy text of the printing and t </Text>
    </View>
  );
}

export default Introduction;