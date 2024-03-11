import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const CalculatorApp: React.FC = () => {
  const [result, setResult] = useState<string>('');

  const handleButtonPress = (button: string) => {
    if (button === '=') {
      setResult(eval(result).toString());
    } else if (button === 'C') {
      setResult('');
    } else {
      setResult(result + button);
    }
  };

  return (
    <View style={styles.container}>
      <Display value={result} />
      <View style={styles.buttonContainer}>
        {[
          '7',
          '8',
          '9',
          '/',
          '4',
          '5',
          '6',
          '*',
          '1',
          '2',
          '3',
          '-',
          'C',
          '0',
          '=',
        ].map(button => (
          <Button
            key={button}
            title={button}
            onPress={() => handleButtonPress(button)}
          />
        ))}
        <Button title="+" onPress={() => handleButtonPress('+')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default CalculatorApp;
