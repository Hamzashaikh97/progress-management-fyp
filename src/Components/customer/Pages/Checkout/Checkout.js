import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import {Card, Col, Container, Form, Row, Button} from "react-bootstrap";
import './Checkout.css'
import {useForm} from "react-hook-form";
import inputValidation from "../Login/inputValidation";
import {getFormattedTime, getTotalPrice} from "../../../../Helpers/vendorHelpers";
import moment from "moment";
import axios from "axios";
import ProgressBar from "../../../../lib/customer/ProgressBar/ProgressBar";

const Checkout = props => {

	const { register, handleSubmit, formState: {errors} } = useForm();
	let token;
	const [ user, setUser ] = useState({});
	const [appointment, setAppointment] = useState({});
	const [cart, setCart] = useState(null);
	const [btnLoader, setBtnLoader] = useState(false);
	useEffect(() => {
		if(props.isAuth) {
			token = localStorage.getItem('token');
			if(token) {
				axios.get('/get-current', {headers: {"Authorization": `Bearer ${token}`}})
					.then((res) => {
						setUser(res.data)
					})
			}
		}
		setAppointment(JSON.parse(localStorage.getItem('appointment')))
		console.log(JSON.parse(localStorage.getItem('appointment')))
		setCart(JSON.parse(localStorage.getItem('cart')))
		window.scrollTo(0, 0)
	}, []);

	const onFormSubmit = (formData) => {
		setBtnLoader(true);
		const services = cart.map((service) => {
			return service._id
		})
		appointment.body.customerName = formData.customerName;
		appointment.body.notes = formData.notes;
		appointment.body.user = user._id;
		appointment.body.services = services
		appointment.body.totalPrice = parseInt(getTotalPrice(cart))

		axios.post('/appointment', appointment.body)
			.then((res) => {
				console.log(res.data)
				localStorage.removeItem('cart')
				localStorage.removeItem('appointment')
				setBtnLoader(false);
				window.location.href = '/account';
			})
	}


	return (
		<>
			<div className={'checkout_section_1 text-center'}>
				<h3 className={'uppercase bold white'}>Secure Checkout</h3>
				<h5 className={'white light'}>Sign In before proceeding further or continue as guest</h5>
			</div>
			<Container className={'my-5'}>
				<Row>
					<Col md={6}>
						<Form onSubmit={handleSubmit(onFormSubmit)}>
							<div>
								<p className={'uppercase text-left medium'}>My Basket</p>
								<Form.Control placeholder={'NAME'} className={'detail__form'} {...register('customerName')} />
								<Form.Control placeholder={'EMAIL'} className={'detail__form mt-3'} disabled value={user.email} />
								<Form.Control placeholder={'CONTACT'} className={'detail__form mt-3'} disabled value={user.phoneNumber} />
								<Form.Control placeholder={'APPOINTMENT NOTES ( OPTIONAL )'} className={'detail__form mt-3'} {...register('notes')}/>
							</div>
							{/*<div className={'mt-5'}>*/}
							{/*	<p className={'uppercase text-left medium'}>Payments</p>*/}
							{/*	<Card className={'checkout__card'}>*/}
							{/*		<Card.Body>*/}
							{/*			<Row>*/}
							{/*				<Col md={6} className={'text-left'}>*/}
							{/*					<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
							{/*						<Form.Check type="radio" label="PAY WITH CARD" className={'uppercase '} />*/}
							{/*					</Form.Group>*/}
							{/*				</Col>*/}
							{/*				<Col md={6}>*/}
							{/*					<i className="fab fa-cc-visa" />*/}
							{/*					<i className="fab fa-cc-mastercard mx-2" />*/}
							{/*					<i className="fab fa-cc-amex"/>*/}
							{/*				</Col>*/}
							{/*			</Row>*/}
							{/*		</Card.Body>*/}
							{/*	</Card>*/}
							{/*</div>*/}

							{/*<div className={'mt-3'}>*/}
							{/*	<Card className={'checkout__card'}>*/}
							{/*		<Card.Body>*/}
							{/*			<Row>*/}
							{/*				<Col md={6} className={'text-left'}>*/}
							{/*					<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
							{/*						<Form.Check type="radio" label="PAY WITH paypal" className={'uppercase'} />*/}
							{/*					</Form.Group>*/}
							{/*				</Col>*/}
							{/*				<Col md={6}>*/}
							{/*					<i className="fab fa-cc-paypal" />*/}
							{/*				</Col>*/}
							{/*			</Row>*/}
							{/*		</Card.Body>*/}
							{/*	</Card>*/}
							{/*</div>*/}
							{/*<div>*/}
							{/*	<p className={'uppercase text-left medium mt-5'}>your card details</p>*/}
							{/*	<NumberFormat format="#### #### #### ####" className={'form-control detail__form'}*/}
							{/*	              placeholder={'Card number'} />*/}
							{/*	<NumberFormat format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']}*/}
							{/*	              className={'form-control detail__form mt-4'} />*/}

							{/*	<NumberFormat placeholder={'CVV'} maxLength={3} form={"###"}*/}
							{/*	              className={'form-control detail__form mt-4'} />*/}
							{/*</div>*/}
							{
								!btnLoader ? <button className={'w-100 mt-2 btn btn-primary header__btn'} type={'submit'}>Book Appointment</button>
									: <ProgressBar />
							}

						</Form>
					</Col>
					<Col md={6} className={'mt-4'}>
						<Card>
							<Card.Header style={{backgroundColor: 'black'}}/>
							<Container>
								<Card.Body  className={'p-0 mt-4'} >
									<p  className={'uppercase bold'} >Deluxe Salon</p>
									<hr />
									<h4 className={'uppercase medium'} style={{color: '#D19A22'}}>{appointment.selectedSlot} AM . {moment(appointment.selectedDay).format('YYYY-MM-DD')}</h4>
									<p className={'light'}>{ appointment.body ? getFormattedTime(appointment.body.duration) : null }</p>
									<hr/>
								</Card.Body>

								{
									cart ? cart.map((cart) => (
										<Card className={'shadow-lg mt-3'}>
											<Card.Body>
												<Row className={'mt-3'}>
													<Col sm={8} className={'text-left'}>
														<h5>{ cart.serviceName }</h5>
														<p className={'text-muted'}>{ getFormattedTime(cart.duration) }</p>
													</Col>
													<Col sm={4} className={'text-right'}>
														<p  style={{color: 'red'}}>Aed { cart.price }</p>
													</Col>
												</Row>
											</Card.Body>
										</Card>
									)) : <p>No Item Found</p>
								}
							<Row className={'mt-4'}>
								<Col md={6} className={'text-left'}>
									<p className={'uppercase bold'}>TOTAL TO PAY</p>
								</Col>
								<Col md={6} className={'text-right'}>
									<p className={'uppercase bold'} style={{color: 'red'}}>Aed { cart ? getTotalPrice(cart) : null }</p>
								</Col>
							</Row>
								<hr/>
							</Container>
						</Card>
					</Col>
				</Row>
			</Container>
		</>

	);
};

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
	}
}


export default connect(mapStateToProps, null)(Checkout)
