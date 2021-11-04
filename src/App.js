import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/home';
import Lessons from './screens/lessons';
import calendar from './screens/calendar';
import Curriculum from './screens/curriculum';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/home' exact component={Home} />
		<Route path='/lessons' component={Lessons} />
		<Route path='/calendar' component={calendar} />
		<Route path='/curriculum' component={Curriculum} />
	</Switch>
	</Router>
);
}

export default App;

