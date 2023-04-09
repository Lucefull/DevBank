import {View, Text, ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import {backgroundColor, greyColor, mainColor} from '../../globalVars';
import Cartao from '../../components/Cartao';
import Icon from '../../components/Icons';
import {FlatList} from 'react-native-gesture-handler';
import {ICartao} from '../../interface/ICartao';
import ListItem from 'react-native-paper/lib/typescript/src/components/List/ListItem';

const mock: ICartao[] = [
  {
    id: 1,
    nome: 'teste',
    valorCredito: 1500,
    utilizado: 1200,
    dataVencimento: 6,
    final: '0435',
    valorFatura: 496.57,
    color: '#fff',
  },
  {
    id: 2,
    nome: 'teste1',
    valorCredito: 1500,
    utilizado: 1200,
    dataVencimento: 6,
    final: '0535',
    valorFatura: 496.57,
  },
  {
    id: 3,
    nome: 'teste2',
    valorCredito: 4000,
    utilizado: 3000,
    dataVencimento: 21,
    final: '0437',
    valorFatura: 9000.0,
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.saldoArea}>
          <View style={styles.row}>
            <Text>saldo dispnivel</Text>
            <Icon name="eye" type="Ionicons" size={20} color={mainColor} />
          </View>
          <View style={styles.row}>
            <Text>R$1.222,15</Text>
            <Icon
              name="chevron-right"
              type="Entypo"
              size={28}
              color={mainColor}
            />
          </View>
          <View style={styles.row}>
            <Text>balanço mensal</Text>

            <Icon
              name="chevron-right"
              type="Entypo"
              size={28}
              color={mainColor}
            />
          </View>
        </View>
        <FlatList
          horizontal
          data={mock}
          renderItem={({item}) => <Cartao {...item} />}
          keyExtractor={({id}) => id.toString()}
          style={styles.scrollArea}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
        />
        <View style={styles.card}>
          <Text>Ultimas transações</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingTop: 20,
    height: 'auto',
  },
  saldoArea: {
    paddingHorizontal: 32,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  scrollArea: {
    maxHeight: 320,
    marginHorizontal: 16,
  },
  card: {
    marginTop: 15,
    backgroundColor: greyColor,
    borderRadius: 15,
    marginHorizontal: 16,
    padding: 15,
    height: 300,
    maxHeight: 300,
    marginBottom: 90,
  },
});

export default Home;
