import React, { useEffect } from 'react'
import Main from './containers/main';
import SignIn from './containers/signIn';
import AdminPanel from './containers/adminPanel';
import { BrowserRouter as Router,  Route } from 'react-router-dom'
import PrivateRoute from './privateRouter';
import { AuthProvider } from "./containers/auth";
import ReactGA from 'react-ga';

export default function AppRouter() {
	useEffect(() => {
		ReactGA.initialize('UA-174913005');
		ReactGA.pageview(window.location.pathname);
	  }, []);

	return (
			<AuthProvider>
				<Router>
					<PrivateRoute exact path="/admin-panel" component={AdminPanel} />
					<Route exact path="/signin" component={SignIn} />
					<Route exact path="/" component={Main} />
				</Router>
			</AuthProvider>
	);

}