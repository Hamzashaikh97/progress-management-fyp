import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import Brand from '../../../assets/customer/img/header-logo.png';
import { NavLink } from 'react-router-dom'
import * as action from '../../../Store/customer/actions/index';
import {connect} from "react-redux";
import "./Header.css";

import './Header.css'

const Header = props => {

	const isProfileSetup = localStorage.getItem('isProfileSetup');
	console.log(isProfileSetup, props.isVendorAuth)
	let create_shop;

	if (isProfileSetup === 'false' && props.isVendorAuth) {
		create_shop = <NavLink to={'/create-shop'}><button className={'btn py-0 top__btn pt-1'}>Create Shop</button></NavLink>

	}
	let authBtn = (
		<>
			<NavLink to={'/login'}><button className={'btn'}>Sign In</button></NavLink>
		</>
	)


	let vendorAuthBtnDash;



	if (!props.isAuth) {
		if(!props.isVendorAuth) {
			vendorAuthBtnDash = (
				<NavLink to={'/vendor/login'}><button className={'btn mx-4 '}>Become a partner</button></NavLink>
			)
		} else {
			vendorAuthBtnDash =  (
				<button className={'btn mx-4'} onClick={()=>{
					window.location.href='/vendor/Dashboard'
				}}>Go to Dashboard</button>
			)
		}
	}




	if (props.isAuth) {
		authBtn = (
			<>
				<button onClick={ () => props.logOut() } className={'btn mx-4'}>Log Out</button>
				<NavLink to={'/account'}><button className={'btn mx-4 '}>My Account</button></NavLink>
			</>

	)

	}






	return (
		<header>
			<div id={'nav-top'} className={'py-3 text-right'}>
				<Container>
					{ create_shop }
					{ vendorAuthBtnDash }
					{ authBtn }
					{/*<NavLink to={'/appointment/60ee94b9053c625e5326f515'} className={'align-items-center mx-4 pt-1 py-0'}>*/}
					{/*	<i className="zmdi zmdi-shopping-cart" style={{color: 'white', fontSize: '20px'}} />*/}
					{/*</NavLink>*/}
				</Container>
			</div>
			<Navbar bg="light" expand="lg" id={'site_nav'}>
				<NavLink to={'/'} className={'navbar-brand py-2'}><img src={Brand} alt={'logo'} id={'brand'}/></NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<NavLink to={'/doctor'} className={'mx-2 nav-link'}>Aesthetic doctor</NavLink>
						<NavLink to={'/dentist'} className={'mx-2 nav-link'}>smile dentist</NavLink>
						<NavLink to={'/beautician'} className={'mx-2 nav-link'}>beautician</NavLink>
						<NavLink to={'/hairdresser'} className={'mx-2 nav-link'}>hairdresser</NavLink>
						<NavLink to={'/barber'} className={'mx-2 nav-link'}>barbers</NavLink>
						<NavLink to={'/spa'} className={'mx-2 nav-link'}>spa</NavLink>
						<NavLink to={'/'} className={'mx-2 nav-link '}>
							<i className="fa fa-search" aria-hidden="true" />
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		isVendorAuth: state.vendorAuth.isVendorAuth
	}
}

const mapDispatchToProps = dispatch => {
	return {
		logOut: () => dispatch(action.logOut())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

