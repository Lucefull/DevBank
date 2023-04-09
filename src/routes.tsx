import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Icon from './components/Icons';
import ButtonNew from './components/ButtonNew';
import {backgroundColor, greyColor, mainColor} from './globalVars';
import Extrato from './pages/Extrato';
import MyCards from './pages/MyCards';
import Configurations from './pages/Configurations';
import Transaction from './pages/Transaction';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: greyColor,
          position: 'absolute',
          margin: 10,
          borderRadius: 15,
          height: 60,
          borderTopColor: backgroundColor,
        },
        tabBarItemStyle: {
          padding: 10,
          backgroundColor: 'transparent',
        },
        tabBarActiveTintColor: mainColor,
        tabBarInactiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home" type="MaterialIcons" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Extrato"
        component={Extrato}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="list" type="Entypo" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={Transaction}
        options={{
          tabBarIcon: ({focused, size}) => (
            <ButtonNew size={size} focused={focused} />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="MyCrads"
        component={MyCards}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon
              name="credit-card"
              type="Foundation"
              color={color}
              size={size}
            />
          ),
          tabBarLabel: 'Cartões',
        }}
      />
      <Tab.Screen
        name="Configurations"
        component={Configurations}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="gear" type="Octicons" color={color} size={size} />
          ),
          tabBarLabel: 'Config',
        }}
      />
    </Tab.Navigator>
  );
};
export default Routes;
