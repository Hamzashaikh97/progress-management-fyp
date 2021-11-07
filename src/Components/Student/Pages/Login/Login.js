import React from 'react';
import './Login.css';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import inputValidation from "../../../customer/Pages/Login/inputValidation";;
const Login = props => {

	const { register, handleSubmit, formState: {errors} } = useForm();

	const onFormSubmit = (data) => {
		const { email, password } = data;
		console.log(email, password);
	}

	let formButton = (
		<>
			<Button type={'submit'} className={'header__btn login__submit w-100 mb-5'}>Submit</Button>
		</>
	)


	return (
		<div className={'customer__auth'}>
			<Container className={'h-100 text-center'}>
				<Row className={'h-100 w-100 align-items-center justify-content-center'}>
					<Col md={5}>
						<div className={'customer__login__top text-center px-3 pt-3 shadow shadow-lg'}>
							<h2 className={'py-5'}>Login</h2>
							<Form onSubmit={handleSubmit(onFormSubmit)}>
								<div className="input-group mb-2">
									<Form.Control type={'text'} placeholder={'EMAIL'} className={'detail__input__login_customer py-4'} {...register('email', inputValidation.email)}  />

									<div className="input-group-append">
										<i className="zmdi zmdi-email input-group-text input__prepend__login_customer"/>
									</div>
								</div>
								<small className="text-danger">
									{errors.email && errors.email.message}
								</small>
								<div className="input-group mb-2">
									<Form.Control type={'password'} placeholder={'PASSWORD'} className={'detail__input__login_customer py-4'} {...register('password', inputValidation.password)}  />

									<div className="input-group-append">
										<i className="zmdi zmdi-key input-group-text input__prepend__login_customer"/>
									</div>
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


export default Login;