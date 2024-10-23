import { registerRootComponent } from 'expo';
import App from './App'
import { NativeWindStyleSheet } from 'nativewind';

// Set NativeWind output for web
NativeWindStyleSheet.setOutput({
    default: 'native',
});

registerRootComponent(App);