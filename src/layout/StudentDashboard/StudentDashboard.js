import React  from "react";
import { Route } from 'react-router-dom';
import RctAppLayout from 'layout/StudentDashboard/RctAppLayout';
import {NotificationContainer} from "react-notifications";
import RctThemeProvider from "../../Container/RctThemeProvider";



const StudentDashboard = ({ children }) => (
	//Theme Provider
	<RctThemeProvider>
		{/*Notifications*/}
		<NotificationContainer />
		{/*SideBar & Header */}
		<RctAppLayout>
			{ children }
		</RctAppLayout>
	</RctThemeProvider>
)


const StudentDashboardRoute = ({ component: Component, ...rest }) => {
	return (
		<Route { ...rest } render={matchProps => (
			<StudentDashboard>
				<Component { ...matchProps } />
			</StudentDashboard>
		)} />
	)
}

export default StudentDashboardRoute;  