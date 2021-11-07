import React from 'react';
import Logo from '../../../../assets/customer/img/header-logo.png'
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { connect } from "react-redux";

import './Login.css';
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";
import ProgressBar from "../../../../lib/customer/ProgressBar/ProgressBar";
import inputValidation from "../../../customer/Pages/Login/inputValidation";
import * as action from "../../../../Store/vendor/actions";

const Login = props => {
	const { register, handleSubmit, formState: {errors} } = useForm();

	const onFormSubmit = (data) => {
		const { email, password } = data;
		props.onAuth(email, password, false);
	}

	let formButton = (
		<>
			<Button type={'submit'} className={'header__btn login__submit w-100 mt-4 py-3'}>Login</Button>
			<p className={'text-muted text-center mt-3'}>Forgot Password?</p>
		</>
	)

	if (props.loading) {
		formButton = <ProgressBar  shopProgress = "Progresslogin"
		shopRing = "Ringlogin"/>
	}

	let errorMessage = null;

	if(props.error) {
		errorMessage = <p className={'text-danger font-weight-bold '}>{ props.error }</p>
	}

	return (
		<div id={'login__section'}>
			<Container>
				<Row className={'align-items-center'}>
					<Col xl={7}  id={'left__heading'}>
						<small className="text-center">
							{errorMessage}
						</small>
						<h2 className={'uppercase bold white'}>NOT REGISTERED YET?</h2>
						<p className={'medium white'}>Join our community that have more than 10000 subscribers and learn new things everyday</p>
						<NavLink to={'/vendor/register'}><Button className={'uppercase login__btn p-2 px-3'}>create account</Button></NavLink>
					</Col>

					<Col xl={5} sm={6}>
						<div id={'login__form'} className={'shadow shadow-lg'}>
							<img alt={'logo'} src={Logo} className={'img-fluid w-75'}/>
							<h4 className={'uppercase mt-5 pt-5'}>Welcome!</h4>
							<Form className={'mt-4'} onSubmit={handleSubmit(onFormSubmit)}>
								<div className="input-group mb-3">
									<div className="input-group-prepend">
										<i className="zmdi zmdi-email input-group-text input__prepend__login"/>
									</div>
									<Form.Control type={'text'} placeholder={'EMAIL'} className={'detail__input__login py-4'} {...register('email', inputValidation.email)} />
								</div>
								<small className="text-danger">
									{errors.email && errors.email.message}
								</small>
								<div className="input-group mb-3">
									<div className="input-group-prepend">
										<i className="zmdi zmdi-key input-group-text input__prepend__login"/>
									</div>
									<Form.Control type={'password'} placeholder={'PASSWORD'} className={'detail__input__login py-4'} {...register('password', inputValidation.password)} />
								</div>
								<small className="text-danger">
									{errors.password && errors.password.message}
								</small>
								{ formButton }
							</Form>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};


const mapStateToProps = state => {
	return {
		loading: state.vendorAuth.loading,
		error: state.vendorAuth.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (name, email, password, isSignUp) => dispatch(action.vendorAuth(name, email, password, isSignUp))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
