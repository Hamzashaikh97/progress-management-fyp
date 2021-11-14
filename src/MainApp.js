import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import MomentUtils from '@date-io/moment';
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MainLayoutRoute from "./layout/MainLayout/MainLayout";
import { MainLayoutPath, VendorLayoutPath, AdminLayoutPath, StudentLayoutPath } from "./Routes/routes";
import './App.css'
import moment from "moment-timezone";
import VendorDashboardRoute from "./layout/VendorDashboard/VendorDashboard";
import AdminDashboardRoute from "./layout/AdminDashboard/AdminDashboard";
import StudentDashboardRoute from "./layout/StudentDashboard/StudentDashboard";
import AdminLogin from "./Components/Admin/Pages/Login/Login";
import Register from "./Components/vendor/Pages/Register/Register";
import Login from "./Components/vendor/Pages/Login/Login";
import CustomerLogin from './Components/customer/Pages/Login/Login'
import CustomerRegister from './Components/customer/Pages/Register/Register'
import { connect } from "react-redux";
import * as action from './Store/customer/actions/index';
import * as vendorAction from './Store/vendor/actions/index';
import { ToastProvider } from 'react-toast-notifications';
import Package from "./Components/vendor/Pages/Package/Package";
import Subscription from "./Components/subscription/Subscription";
import ShopCreate from "./Components/vendor/Pages/ShopCreate/ShopCreate";



if (window.location.href.toString().includes('teachers') && !window.location.href.toString().includes('register') && !window.location.href.includes('login')) {
	import('./assets/dashboard/scss/reactifyCss')
}

if (window.location.href.toString().includes('admin') && !window.location.href.toString().includes('register') && !window.location.href.includes('login')) {
	import('./assets/dashboard/scss/reactifyCss')
}
if (window.location.href.toString().includes('student') && !window.location.href.toString().includes('register') && !window.location.href.includes('login')) {
	import('./assets/dashboard/scss/reactifyCss')
}


const MainApp = props => {

	moment.tz.setDefault("Asia/Dubai");


	const token = localStorage.getItem('token');
	const vendorToken = localStorage.getItem('vendorToken');
	const profileSetup = localStorage.getItem('isProfileSetup');

	if (token) {
		props.setAuth()
	}
	if (vendorToken) {
		props.vendorSetAuth();
	}

	const mainLayoutRoute = MainLayoutPath && MainLayoutPath.map(({ path, component, exact }, index) => (
		<MainLayoutRoute key={index} path={path} component={component} exact={exact} />
	))
	const adminLayoutRoute = AdminLayoutPath && AdminLayoutPath.map((route, key) =>
		<AdminDashboardRoute key={key} path={`/admin/${route.path}`} component={route.component} />
	)
	const vendorLayoutRoute = VendorLayoutPath && VendorLayoutPath.map((route,key)=>
		<VendorDashboardRoute key={key} path={`/teachers/${route.path}`} component={route.component} />
	)
	const studentLayoutRoute = StudentLayoutPath && StudentLayoutPath.map((route,key)=>
		<StudentDashboardRoute key={key} path={`/students/${route.path}/:id`} component={route.component} />
	)
	return (
		<ToastProvider>
			<Router>
				<Switch>
					{ adminLayoutRoute }
					{ studentLayoutRoute }
					{ vendorLayoutRoute }
					{ mainLayoutRoute }
					<Route path={'/create-shop'} component={ShopCreate} />
					<Route path={'/package'} component={Package} />
					<Route path={'/register'} component={CustomerRegister}/>
					<Route path={'/login'} exact component={CustomerLogin} />
					<Route path={'/vendor/register'} component={Register} />
					<Route path={'/admin/login'} exact component={AdminLogin} />
					<Route path={'/vendor/login'} exact component={Login} />
					<Route path={'/subscription'} exact component={Subscription} />
				</Switch>
			</Router>
		</ToastProvider>
	)
};

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		isVendorAuth: state.vendorAuth.isVendorAuth
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setAuth:  () => dispatch(action.setAuth()),
		vendorSetAuth: () => dispatch(vendorAction.vendorSetAuth())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
