import React from 'react'; 
import { View, Button, Text } from 'react-native';
import CarouselImage from './home/CarouselImage';

const HomeScreen = ({ navigation }) => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CarouselImage />
      <Button 
        title="Got to Fumihito's profile"
        onPress= {() =>
          navigation.navigate('Profile')
        }
      />
      <Text>←Draw to menu</Text>
    </View>
  );
}

export default HomeScreen;