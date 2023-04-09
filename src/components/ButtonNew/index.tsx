import {StyleSheet, Text, View} from 'react-native';
import Icon from '../Icons';
import {mainColor} from '../../globalVars';
import Transaction from '../../pages/Transaction';

type Props = {
  size: number;
  focused: boolean;
};

const ButtonNew = ({size, focused}: Props) => {
  return (
    <>
      <View style={styles.container}>
        <Icon
          name="plus"
          type="Entypo"
          color={focused ? '#ff8d67' : '#fff'}
          size={size}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: mainColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default ButtonNew;
