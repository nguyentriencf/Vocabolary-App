import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Main from './Component/Main'
import store from './Component/Redux/store';


export default class App extends Component {
render() {
return (
  <Provider store={store}>
    <Main/>
  </Provider>

  )
}
}





