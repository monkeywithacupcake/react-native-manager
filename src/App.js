import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

console.ignoredYellowBox = ['Setting a timer'];

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyC3IxsPuuzyax3ekfdfDNz-Rxasw7j1ixM',
            authDomain: 'manager-87d8f.firebaseapp.com',
            databaseURL: 'https://manager-87d8f.firebaseio.com',
            projectId: 'manager-87d8f',
            storageBucket: 'manager-87d8f.appspot.com',
            messagingSenderId: '833050616102'
          };
        firebase.initializeApp(config);
    }
    
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}


export default App;
