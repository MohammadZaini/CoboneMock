import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../features/main/screens/home/home.screen';
import DetailsScreen from '../../features/main/screens/details/details.screen';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation
