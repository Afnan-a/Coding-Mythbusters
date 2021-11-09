import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/home';
import Lessons from './screens/lessons';
import Calendar from './screens/calendar';
import Curriculum from './screens/curriculum';
import Settings from './screens/settings';
import People from './screens/people';
import Logout from './screens/log_out';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/lessons' component={Lessons} />
		<Route path='/calendar' component={Calendar} />
		<Route path='/curriculum' component={Curriculum} />
		<Route path='/settings' component={Settings} />
		<Route path='/people' component={People} />
		<Route path='/log_out' component={Logout} />
	</Switch>
	</Router>
);
}

export default App;

