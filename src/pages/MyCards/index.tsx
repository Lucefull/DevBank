import {StyleSheet, Text, View} from 'react-native';
import {backgroundColor} from '../../globalVars';

const MyCards = () => {
  return (
    <View style={styles.container}>
      <Text>MyCards</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
});

export default MyCards;
