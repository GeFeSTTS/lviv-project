import React from 'react'
import Main from './containers/main';
import SignIn from './containers/signIn';
import AdminPanel from './containers/adminPanel';
import { BrowserRouter as Router,  Route } from 'react-router-dom'
import PrivateRoute from './privateRouter';
import { AuthProvider } from "./containers/auth";

export default function AppRouter() {

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