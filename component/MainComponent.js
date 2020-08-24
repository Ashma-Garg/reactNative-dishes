import React,{Component} from 'react'
import {View, Platform} from 'react-native'
import {createStackNavigator,createDrawerNavigator} from 'react-navigation'
import Menu from './Menu'
import Home from './HomeComponent'
import Dishdetail from './DishDetailedComponent'
const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
},
{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
}
);

const HomeNavigator=createStackNavigator({
    Home:{screen:Home}
},
    {
        navigationOptions: ({ navigation }) => ({
          headerStyle: {
              backgroundColor: "#512DA8"
          },
          headerTitleStyle: {
              color: "#fff"            
          },
          headerTintColor: "#fff"  
        })
})

const MainNavigator=createDrawerNavigator({
    Home:{screen:HomeNavigator,
    navigationOptions:{
        drawerLabel:"Home Of second"
    }},
    Menu:{screen:MenuNavigator,
        navigationOptions:{
            drawerLabel:"Menu Of Second"
        }
    }
},{
    drawerBackgroundColor: '#D1C4E9'
})
class Main extends Component{
    render(){

        return(
        <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
            <MainNavigator />
        </View>
    );
    }

}
export default Main;