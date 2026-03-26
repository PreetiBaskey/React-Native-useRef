import React, { useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function App() {
  const inputRef = useRef();

  const handlePress = () => {
    inputRef.current.focus();
  }

  return (
    <View style={styles.container}>
      <Text>useRef demo</Text>
      <TextInput
        ref={inputRef}
        style={styles.textInput}
        placeholder='textinput handle by dom ref'
      />
      <Button title='click button to focus on textinput' onPress={handlePress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 20,
    height: 35,
    width: '90%',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 6,
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  }
})

export default App;
