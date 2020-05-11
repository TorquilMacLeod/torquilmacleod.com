import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import './assets/site.css';
import '@aws-amplify/ui/dist/style.css';
import { FocusStyleManager } from "@blueprintjs/core";
 
FocusStyleManager.onlyShowFocusOnTabs();

Amplify.configure(awsconfig);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();