import React from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../styles';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  onChangeText = (text) => {
    this.setState.value(text)
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput
          style={styles.eachForm}
          placeholder="Name"
          onChangeText={text => onChangeText(text)}
        />
        <TextInput
          style={styles.eachForm}
          placeholder="Email"
          onChangeText={text => onChangeText(text)}
        />
        <TextInput
          multiline = {true}
          numberOfLines = {8}
          style={styles.textArea}
          placeholder="Comments"
          onChangeText={text => onChangeText(text)}
        />
        <TouchableOpacity style={styles.sendButton}><Text style={styles.buttonText}>Send Message</Text></TouchableOpacity>
      </View>
    );
  }
}

export default ContactForm;