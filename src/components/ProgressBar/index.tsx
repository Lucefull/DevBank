import {StyleSheet, View} from 'react-native';
import {mainColor} from '../../globalVars';

type Props = {
  max: number;
  min: number;
};

const ProgressBar: React.FC<Props> = ({max, min}: Props) => {
  const porcentage = (100.0 / max) * min;
  const styles = stylesFC(porcentage);
  return (
    <View style={styles.bar}>
      <View style={styles.progress} />
    </View>
  );
};

const stylesFC = (porcentage: number) =>
  StyleSheet.create({
    bar: {
      flexDirection: 'row',
      width: '100%',
      height: 3,
      borderRadius: 2,
      backgroundColor: 'white',
      padding: 4,
    },
    progress: {
      position: 'absolute',
      backgroundColor: mainColor,
      width: `${porcentage}%`,
      padding: 4,
      borderRadius: 2,
    },
  });

export default ProgressBar;
