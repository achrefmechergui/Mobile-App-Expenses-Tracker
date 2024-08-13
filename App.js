import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Allexpenses from "./screens/Allexpenses";
import Manageexpense from "./screens/Manageexpense";
import Recentexpenses from "./screens/Recentexpenses";
import { Globalcolor } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";
import Iconadd from "./components/iconadd";
import ExpensesContextProvider from "./Store/expenses-context";
const TAB = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const Allrecent = () => {
    return (
      <TAB.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Globalcolor.color.primary500,
          },
          headerTintColor: "white",
          tabBarStyle: {
            backgroundColor: Globalcolor.color.primary500,
          },
          tabBarActiveTintColor: Globalcolor.color.accent500,
          headerRight: () => {
            return <Iconadd />;
          },
        }}
      >
        <TAB.Screen
          name="Allexpenses"
          component={Allexpenses}
          options={{
            title: "All Expenses",
            tabBarLabel: "All Expenses",
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="calendar" size={size} color={color} />;
            },
          }}
        />
        <TAB.Screen
          name="Recentexpenses"
          component={Recentexpenses}
          options={{
            title: "RECENT",
            tabBarLabel: "RECENT",
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="hourglass" size={size} color={color} />;
            },
          }}
        />
      </TAB.Navigator>
    );
  };

  return (
    <>
      <StatusBar style="light" />
     <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Globalcolor.color.primary500,
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Allrecent"
            component={Allrecent}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="manageexpenses" component={Manageexpense} options={{
            presentation : "modal"
          }} />
        </Stack.Navigator>
      </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 15,
  },
});
