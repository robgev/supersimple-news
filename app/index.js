import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import store from './reducers/store';
import App from './components/App';
import SingleArticle from './components/SingleArticle';
import NotFound from './components/NotFound';

import 'antd/dist/antd.css';

const ApplicationRoot = () => (
  <Provider store={store}>
  	<Router>
  		<Switch>
  			<Route exact path='/' component={App} />
  			<Route path='/article/:id' component={SingleArticle} />
  			<Route component={NotFound} />
  		</Switch>
  	</Router>
  </Provider>
);

render(
  <ApplicationRoot />,
  document.getElementById('root')
);
