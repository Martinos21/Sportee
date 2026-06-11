import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions, Image } from "react-native";
import MapScreen from "../screens/MapScreen";
import Settings from "../screens/Settings";
import mapicon from "../assets/mapicon.png";
import settingicon from "../assets/settingicon.png";

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("window");

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: width * 0.4,
          right: width * 0.4,
          height: 40,
          borderRadius: 25,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: 5,
          justifyContent: "center",
          //alignItems: "center",
        },
      }}
    >
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={mapicon} style={{ width: 24, height: 24, tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={settingicon} style={{ width: 24, height: 24, tintColor: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
