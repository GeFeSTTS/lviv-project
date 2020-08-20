import React, { useEffect } from 'react'
import Main from './containers/main';
import SignIn from './containers/signIn';
import AdminPanel from './containers/adminPanel';
import { BrowserRouter as Router,  Route, } from 'react-router-dom'
import PrivateRoute from './privateRouter';
import { AuthProvider } from "./containers/auth";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history'

ReactGA.initialize('UA-174913005');
const browserHistory = createBrowserHistory();
browserHistory.listen((location, action) => {
	ReactGA.pageview(location.pathname + location.search)
})


function AppRouter() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search)
	  }, [])

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

export default AppRouter