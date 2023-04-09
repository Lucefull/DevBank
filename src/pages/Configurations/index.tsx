import {StyleSheet, Text, View} from 'react-native';
import {backgroundColor} from '../../globalVars';

const Configurations = () => {
  return (
    <View style={styles.container}>
      <Text>Configurations</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
});

export default Configurations;
