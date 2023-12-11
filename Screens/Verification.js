import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomBtn from '../components/CustomBtn';
import NavigationNames from '../Navigations/NavigationNames';

const CELL_COUNT = 4;

const Verification = ({navigation}) => {
  const [counter, setCounter] = useState(60);
  const [value, setValue] = useState('');
  const [isFull, setIsFull] = useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT, setIsFull});

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleFulfill = code => {
    if (code.length === CELL_COUNT) {
      setIsFull(true);
    }
  };
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>OTP Verification</Text>
      <Text style={styles.text1}>Enter the code from the sms we sent</Text>
      <Text style={styles.text1}>to +91 000 111 222</Text>

      <View>
        <Text style={styles.counter}>{counter} Sec</Text>
      </View>

      <SafeAreaView style={styles.root}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={code => {
            setValue(code);
            handleFulfill(code);
          }}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFiledRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[
                styles.cell,
                isFocused && styles.focusCell,
                isFull && styles.full,
              ]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        {isFull &&
          {
            /* <View style={styles.fullMessage}>
            <Text>Code confirmation is Done</Text>
            <Button title="Proceed" onPress={() => console.log('Proceed')} />
          </View> */
          }}
      </SafeAreaView>
          <View style={styles.container1}>
            <CustomBtn text={'Submit'} onPress={()=>navigation.navigate(NavigationNames.Password)}/>
          </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 17,
    color: '#FFFCFCE5',
  },
  root: {
    padding: 20,
    justifyContent: 'center',
  },

  codeFiledRoot: {marginTop: 20},
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 1,

    textAlign: 'center',
    borderRadius: 50,
    marginHorizontal: 10,
    color: 'black',
    backgroundColor: 'white',
    // marginBottom:50
  },
  focusCell: {
    borderColor: '#000',
  },
  full: {
    borderColor: 'green',
  },
  // fullMessage: {
  //   marginTop: 20,
  //   alignItems: 'center',
  // },
  counter: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  container1:{
    top:120
  }
});
