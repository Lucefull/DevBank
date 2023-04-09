import {StyleSheet, Text, View} from 'react-native';
import {backgroundColor} from '../../globalVars';

const Extrato = () => {
  return (
    <View style={styles.container}>
      <Text>Extrato</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
});

export default Extrato;
