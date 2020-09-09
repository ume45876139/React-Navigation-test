import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },

  introduction: {
    
    fontSize: 20,
    marginBottom: 20
  },

  name: {
    fontSize:30,
    marginTop: 20,
    marginBottom: 20
  },

  formContainer: {
    width: 300
  },

  eachForm: {
    marginTop: 20, 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
  },

  textArea :{
    marginTop: 20, 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    height:80
  },

  sendButton: {
    backgroundColor:'#007AFF',
    fontSize: 14,
    marginTop: 10,
    padding: 8,
  },

  buttonText: {
    textAlign: "center",
    color: '#fff',
  }

});