import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/features/main/screens/home/home.screen';
import Navigation from './src/infrastructure/navigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Navigation />
  );
}

