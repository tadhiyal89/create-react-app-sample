import React from 'react';
import { IndexRoute,BrowserRouter as Router, Route, Switch,Render} from 'react-router-dom';
import home from './App'
import dashboard from './dashboard'
const Root = () => {
  return (
		<Router>
			<div>
			<Route path="/" exact component={home}/>
			<Route exact path="/dashboard"  component={dashboard}/>
			</div>
		</Router>
  );
};
export default Root;
