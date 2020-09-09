import React from 'react'; 
import { ScrollView, View, Button } from 'react-native';
import Introduction from './profile/Introduction';
import ContactForm from './profile/ContactForm';
import { styles } from '../styles';

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
        <Introduction />
        <ContactForm />
      </View>
    </ScrollView>
  );
}

export default ProfileScreen;