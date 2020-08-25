import React,{Component} from 'react'
import {View,ScrollView, Platform,Text,Image, StyleSheet} from 'react-native'
import {createStackNavigator,createDrawerNavigator,DrawerItems,SafeAreaView} from 'react-navigation'
import Menu from './Menu'
import About from './AboutComp'
import Home from './HomeComponent'
import Contact from './ContactComp'
import Dishdetail from './DishDetailedComponent'
import { Icon } from 'react-native-elements'
// import {  } from 'react-native-safe-area-context'
const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu,
        navigationOptions:({navigation})=>({
            headerRight:
                <Icon name="menu" size={24} color="white" onPress={()=>navigation.toggleDrawer()}/>
        })
    },
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
          headerTintColor: "#fff",
          headerRight:
                <Icon name="menu" size={24} color="white" onPress={()=>navigation.toggleDrawer()}/>
        })
})
const ContactNavigator=createStackNavigator({
    Contact:{screen:Contact}
},{
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTitleStyle: {
            color: "#fff"            
        },
        headerTintColor: "#fff",
        headerRight:
                <Icon name="menu" size={24} color="white" onPress={()=>navigation.toggleDrawer()}/>  
      })
})
const AboutNavigator=createStackNavigator({
    About:{screen:About}
},
    {
    navigationOptions:({navigation})=>({
        headerStyle:{
            backgroundColor:"#512DA8"
        },
        headerTintColor:"#fff",
        headerTitleStyle:{
            color:"#fff"
        },
        headerRight:
                <Icon name="menu" size={24} color="white" onPress={()=>navigation.toggleDrawer()}/>
    })
})

const CustomDrawerContentComponent=(props)=>(
    <ScrollView>
        <SafeAreaView style={style.container} 
        forceInset={{
            // top:'always',
            // horizontal:"never"
        }}
        >
            <View>
            <DrawerItems {...props}/>
            </View>
            <View style={style.drawerHeader}>
                <View style={{flex:1}}>
                    <Image source={require('./images/logo.png')} style={style.drawerImage}/>
                </View>
                <View style={{flex:2}}>
                    <Text style={style.drawerHeaderText}>Ristorante Con Fusion</Text>
                </View>
            </View>
        </SafeAreaView>
    </ScrollView>
)

const MainNavigator=createDrawerNavigator({
    Home:{screen:HomeNavigator,
    navigationOptions:{
        drawerLabel:"Home Of second",
        drawerIcon:({tintColor})=>(
        <Icon name="home" type="font-awesome" size={22} color={tintColor}/>
        )
    }},
    About:{screen:AboutNavigator,
        navigationOptions:{
            drawerLabel:"About Us",
            drawerIcon:({tintColor})=>(
            <Icon name="info"type="font-awesome" size={22} color={tintColor}/>
            )
    }},
    Menu:{screen:MenuNavigator,
        navigationOptions:{
            drawerLabel:"Menu Of Second",
            drawerIcon:({tintColor})=>(
            <Icon name="list" type="font-awesome" size={22} color={tintColor}/>
            )
        }
    },
    Contact:{screen:ContactNavigator,
    navigationOptions:{
        drawerLabel:"Contact Us",
        drawerIcon:({tintColor})=>(
        <Icon name="address-card" type="font-awesome" size={22} color={tintColor}/>
        )
    }}
},{
    drawerBackgroundColor: '#D1C4E9',
    contentComponent:CustomDrawerContentComponent
})
const style=StyleSheet.create({
    container:{
        flex:5,
        flexDirection:"column",
        justifyContent:"space-between"
    },
    drawerHeader:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#512DA8',
        flex:1,
        height:140,
        flexDirection:'row'
    },
    drawerImage:{
        margin:10,
        width:80,
        height:60
    },
    drawerHeaderText:{
        fontSize:24,
        fontWeight:'bold',
        color:'white'
    }
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