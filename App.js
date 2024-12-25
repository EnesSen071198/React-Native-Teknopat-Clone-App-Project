import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./src/screens/HomeScreen";
import CustomDrawerContent from "./src/components/Drawer";
import Header from "./src/components/Header";
import Category1 from "./src/pages/Category1";
import YapayZeka from "./src/pages/YapayZeka";
import Haber from "./src/pages/Haber";
import Makale from "./src/pages/Makale";
import Video from "./src/pages/Video";
import Tavsiyeler from "./src/pages/Tavsiyeler";
import Sosyal from "./src/pages/Sosyal";
import Etkinlik from "./src/pages/Etkinlik";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          header: () => <Header />
        }}>
        <Drawer.Screen name='Ana Sayfa' component={HomeScreen} />
        <Drawer.Screen name='Category1' component={Category1} />
        <Drawer.Screen name='Yapay Zeka' component={YapayZeka} />
        <Drawer.Screen name='Haber' component={Haber} />
        <Drawer.Screen name='Makale' component={Makale} />
        <Drawer.Screen name='Video' component={Video} />
        <Drawer.Screen name='Tavsiyeler' component={Tavsiyeler} />
        <Drawer.Screen name='Sosyal' component={Sosyal} />
        <Drawer.Screen name='Etkinlik' component={Etkinlik} />

        {/* Diğer kategoriler için ekranları ekleyin */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
