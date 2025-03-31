import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabsNavigator } from "@react-navigation/bottom-tabs";
import TelaJavaScript from "./componentes/TelaJavaScript"
import TelaReact from "./componentes/TelaReact.js"
import TelaNode from "./componentes/TelaNode.js"

const BottomTabs = createBottomTabsNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <BottomTabs.Navigator>
        <BottomTabs.Screen name="Java" component={TelaJavaScript}/>
        <BottomTabs.Screen name="React" component={TelaReact}/>
        <BottomTabs.Screen name="Node" component={TelaNode}/>
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}