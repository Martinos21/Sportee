import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "../screens/mapscreen";
import Settings from "../screens/settings";
import mapicon from '../assets/mapicon.png';
import settingicon from '../assets/settingicon.png';
import { Image } from 'react-native';


const Tab = createBottomTabNavigator();

export default function Tabs() {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen name="Map" component={MapScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Image
                            source={mapicon}
                            style ={{width:24, height:24, tintColor:color}}
                        />
                    )
                }}
            />
            <Tab.Screen name="Settings" icon="" component={Settings}
                options={{
                    tabBarIcon: ({color}) => (
                        <Image
                            source={settingicon}
                            style ={{width:24, height:24, tintColor:color}}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

