import {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {greyColor, mainColor} from '../../globalVars';
import ProgressBar from '../ProgressBar';
import Icon from '../Icons';
import {ICartao} from '../../interface/ICartao';
import {numberCurrency} from '../../utils/curency';

const screenWidth = Dimensions.get('screen').width * 0.9;

const Cartao: React.FC<ICartao> = ({
  color = greyColor,
  nome,
  valorCredito,
  utilizado,
  dataVencimento,
  final,
  valorFatura,
}: ICartao) => {
  const [isOpen, setIsOpen] = useState(false);
  const styles = stylesFunction(color);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.horizontalArea}>
          <Text style={styles.title}>{nome}</Text>
          <TouchableOpacity
            style={styles.horizontalArea}
            onPress={() => setIsOpen(!isOpen)}>
            <Text style={styles.text}>expandir</Text>
            <Icon
              name="chevron-down"
              type="Entypo"
              color={mainColor}
              style={[
                {marginHorizontal: 5},
                isOpen ? {transform: [{rotate: '180deg'}]} : {},
              ]}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{`final ${final}`}</Text>
        {isOpen && (
          <>
            <View style={styles.span} />
            <View>
              <View style={styles.horizontalArea}>
                <Text style={styles.text}>limite utilizado</Text>
                <Text style={styles.text}>disponivel</Text>
              </View>
              <ProgressBar min={utilizado} max={valorCredito} />
              <View style={styles.horizontalArea}>
                <Text style={[styles.text, {fontSize: 16}]}>
                  {numberCurrency(utilizado)}
                </Text>
                <Text style={[styles.text, {fontSize: 16}]}>
                  {numberCurrency(valorCredito)}
                </Text>
              </View>
            </View>
          </>
        )}
        <View style={styles.span} />
        <View style={styles.horizontalArea}>
          <Text style={styles.text}>fatura aberta</Text>
          <Text style={styles.text}>{`venc ${dataVencimento}`}</Text>
        </View>
        <Text style={[styles.text, styles.textValue]}>
          {numberCurrency(valorFatura)}
        </Text>

        <View style={styles.span} />
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ver fatura</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>realizar pagamento</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const stylesFunction = (color: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      borderRadius: 5,
      elevation: 5,
    },
    content: {
      borderTopWidth: 6,
      borderTopColor: color,
      backgroundColor: greyColor,
      borderRadius: 5,
      width: screenWidth,
      height: 'auto',
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    span: {
      backgroundColor: '#b1b1b1',
      padding: 0.5,
      marginTop: 10,
    },
    title: {
      color: '#fff',
      paddingVertical: 2,
      fontFamily: 'Montserrat-Bold',
      fontSize: 16,
    },
    text: {
      color: mainColor,
      paddingVertical: 5,
      fontFamily: 'Montserrat-Regular',
      fontSize: 14,
    },
    textValue: {
      fontSize: 18,
      fontFamily: 'Montserrat-SemiBold',
      color: 'white',
    },
    button: {
      padding: 5,
    },
    buttonText: {
      color: mainColor,
      fontFamily: 'Montserrat-Bold',
      fontSize: 16,
    },
    buttonArea: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: 5,
    },
    horizontalArea: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

export default Cartao;
