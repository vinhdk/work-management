import { AppRegistry } from 'react-native';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';

AppRegistry.registerComponent(environment.app.name, () => AppComponent);
