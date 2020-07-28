import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useStoreModule } from 'src/app/store';
import { AppRender } from './app.render';
export const AppComponent = () => {
    SplashScreen.hide();
    console.disableYellowBox = true;
    return <AppRender store={useStoreModule()} />;
}