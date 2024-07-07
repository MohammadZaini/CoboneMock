import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../features/main/screens/home/home.screen';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';

const Stack = createStackNavigator();



const renderLeftHeaderComponent = () => (
    <TouchableOpacity onPress={() => {/* Handle left icon press */ }}>
        <FontAwesome5 name="shopping-cart" size={24} color="black" />
    </TouchableOpacity>
);

const renderRightHeaderComponent = () => (
    <TouchableOpacity onPress={() => {/* Handle right icon press */ }} style={styles.headerRightView}>
        <Octicons name="bell-fill" size={24} color="black" style={{ marginRight: 15 }} />
        <FontAwesome5 name="shopping-cart" size={24} color="black" />
    </TouchableOpacity>
);

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator

                screenOptions={{
                    headerRight: () => renderRightHeaderComponent(),
                    headerTitleAlign: 'center',
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen}
                    options={{ headerTitle: null }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation

const styles = StyleSheet.create({

    headerRightView: {
        flexDirection: 'row',
    }

})
