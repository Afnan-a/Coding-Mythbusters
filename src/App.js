import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/home';
import Welcome from './screens/welcome';
import Lessons from './screens/lessons';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/home' exact component={Home} />
		<Route path='/welcome' component={Welcome} />
		<Route path='/lesson' component={Lessons} />
	</Switch>
	</Router>
);
}

export default App;

