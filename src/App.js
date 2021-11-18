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
import Signin from './screens/sign_in';
import { Container } from 'react-bootstrap'

function App() {
return (
	/*<Router>
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
	</Router>*/ 
	<Container 
		className="d-flex align-items-center justify-content-center"
		style={{minHeight: "100vh" }}
	>
		<div className="w-100" style={{maxWidth: "400px" }}>
			<Signin />
		</div>
	</Container>
	
);
}

export default App;

