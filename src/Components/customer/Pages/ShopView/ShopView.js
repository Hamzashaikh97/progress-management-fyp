import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Modal, ModalBody, Row, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Dropdown from 'react-dropdown';
import styled from "styled-components";
import * as actions from '../../../../Store/customer/actions/index';
import Carousel from "../../../../lib/customer/Carousel/Carousel";
import RatingStar from "../../../../lib/customer/RatingStar/RatingStar";
import ProgressBar from "../../../../lib/customer/ProgressBar/ProgressBar";
import {getFormattedTime} from "../../../../Helpers/vendorHelpers";

import'./ShopView.css'
import axios from "axios";

const ShopView = props => {
	const storeId = props.match.params.id;
	let cart;
	if (JSON.parse(localStorage.getItem('cart'))) {
		cart = JSON.parse(localStorage.getItem('cart'))

	} else {
		cart = props.cart;
	}
	const [category, setCategory] = useState(null);
	const [allServices, setAllServices] = useState(null)
	const [service, setService] = useState({})
	const [categoryQuery, setCategoryQuery] = useState(null);

	useEffect(() => {
		props.getShop(storeId);
		axios.get(`/shop-services/${storeId}`)
			.then((res) => {
				setAllServices(res.data.services)
			})
		axios.get('/shop-categories/' + storeId)
			.then((res) => {
				console.log(res.data)
				setCategory(res.data)
			})
		window.scrollTo(0, 0)
	}, []);

	const Wrapper = styled.div`
      background-image: url(${props => props.img});
      background-size: cover;
      background-repeat: no-repeat;
      padding: 12rem 0;
	`;

	//Input field for filters
	const [filter, setFilter] = useState('');

	//TO open service modal
	const [basket, setBasket] = useState(false)

	//modal show
	const [show, setShow] = useState(false);




	const handleClose = () => setShow(false);
	const handleShow = (service) => {
		setShow(true);
		setService(service);
	}

	const onAddHandler = (service) => {
		setBasket(true);
		props.addToCart(service);
	}

	const onRemoveHandler = (serviceId, servicePrice) => {
		if (props.cart.length <= 1) {
			setBasket(false);
		}
		props.removeFromCart(serviceId, servicePrice);
	}


	const onChange = (event) => {
		setFilter(event.target.value)
	}

	const selectStatus = (service) => {
		if (cart.length > 0) {
			const cartItemFound = cart.find(cartItem => service._id === cartItem._id)
			if (cartItemFound) {
				return (
					<Button className={'uppercase service__btn_2'} onClick={() => onRemoveHandler(service._id, service.price)}>Selected</Button>
				)
			} else  {
				return (
					<Button className={'uppercase service__btn'} onClick={() => onAddHandler(service)}>Select</Button>
				)
			}
		}

		return (
			<Button className={'uppercase service__btn'} onClick={() => onAddHandler(service)}>Select</Button>
		)

	}

	let services;

	if (!allServices) {
		services  = (
			<ProgressBar  shopProgress = ""
			              shopRing = "CategoryRing" />
		)
	}


	if (allServices && allServices.length === 0) {
		services = (
			<div className={'text-center'}>
				<p> No Service Found </p>
			</div>
		)
	}

	if (allServices && allServices.length > 0) {
		services = allServices.map((service, index) => (
			<Col key={index} md={6}>
				<Card className={'shadow-lg mb-3'}>
					<Card.Body className={'text-left'}>
						<div className={'d-flex justify-content-between'}>
							<p className={'bold'}>{ service.serviceName }</p>
							<p className={'medium uppercase'}>Aed { service.price }</p>
						</div>
						<p className={'text-muted'}>{ getFormattedTime(service.duration) }</p>
						<div className={'d-flex'}>
						</div>
						<div className={'d-flex justify-content-between'}>
							<Button className={'uppercase service__btn'} onClick={() => handleShow(service)}>show details</Button>
							{selectStatus( service )}
						</div>
					</Card.Body>
				</Card>
			</Col>
		))
	}
	let reviews = (
		<div>
			<p className={'text-center'}> No Reviews Found </p>
		</div>
	);


	if(props.shop.reviews && props.shop.reviews.length > 0) {
		reviews = props.shop.reviews.map((review, index) => (
			<Row key={index} className={'text-left mt-5'}>
				<Col md={12}>
					<p className={'bold'}>{ review.userName }</p>
					<RatingStar
						value={ review.rating }
					/>
					<p className={'bold'}>{ review.serviceName }</p>
					<p>{ review.comment }</p>
					<p className={'uppercase text-muted medium'} id={'styled__by'}>Styled By { review.employeeName }</p>
					<hr/>
				</Col>
			</Row>
		))
	}


	const modal = (
		<Modal show={show} size={'lg'} onHide={handleClose} id={'service__modal'}>
			<Modal.Header>
				<Modal.Title className={'uppercase white bold'}>Service Details</Modal.Title>
			</Modal.Header>
			<ModalBody className={'px-5'}>
				<h4 className={'text-center'}>{ service.name }</h4>
				<Row className={'mt-4'}>
					<Col>
						<h4>Service Description</h4>
						<p className={'text-left light'}>
							{ service.description}
						</p>
					</Col>
				</Row>
			</ModalBody>
		</Modal>
	)

	const checkoutBasket = (
		<Container id={'checkout__modal'} className={basket ? 'open' : 'close'}>
			<Row>
				<Col md={12}>
					<Card className={'pl-3'}>
						<Row>
							<Col sm={8} xs={12}  className={'basket px-4 pt-3'}>
								<h6 className={'uppercase text-muted'}>Basket</h6>
								<h2 className={'medium uppercase'}>{props.cart.length} services<span id={'price'} className={'px-3 bold'}>Aed { props.totalPrice }</span></h2>
							</Col>
							<Col sm={4} xs={12} className={'time'}>
								<NavLink to={'/appointment/'+storeId} className={'btn btn-primary'} id={'choose__time'}>Choose Time</NavLink>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</Container>
	)
	let schedule = <ProgressBar />
	if (props.shop.schedule) {
		schedule = (
			<ul className={'list-unstyled'}>
				<li className={'uppercase text-muted'}>- Mon ({props.shop.schedule.monday })</li>
				<li className={'uppercase text-muted pt-3'}>- Tue ({ props.shop.schedule.tuesday })</li>
				<li className={'uppercase text-muted pt-3'}>- Wed ({ props.shop.schedule.wednesday } )</li>
				<li className={'uppercase text-muted pt-3'}>- Thur ({ props.shop.schedule.thursday } )</li>
				<li className={'uppercase text-muted pt-3'}>- Fri ({ props.shop.schedule.friday} )</li>
				<li className={'uppercase text-muted pt-3'}>- Sat ({ props.shop.schedule.saturday })</li>
				<li className={'uppercase text-muted pt-3'}>- Sun ({ props.shop.schedule.sunday })</li>
			</ul>
		)
	}
	let carousel;
	if (props.shop && props.shop.gallery) {
		carousel = <Carousel images={props.shop.gallery} />
	}
	let shop = <ProgressBar  shopProgress = "shopViewProgress"
	                         shopRing = "shopViewRing" />

	const options = [];
	if (category && category.length > 0) {
		category.forEach((category) => {
			options.push({
				value: category,
				label: category
			})
		})
	}
	const onCategoryChange =(val) => {
		setAllServices(null)
		const category = `category=${val.value}`
		axios.get(`/shop-services/${storeId}?${category}`)
			.then((res) => {
				setAllServices(res.data.services)
			})
	}

	if (!props.loading && props.shop && props.shop.shopBannerImage) {
		shop = (
			<>
				{modal}
				<Wrapper img={props.shop.shopBannerImage.avatar}>
					<Container>
						<Row className={'justify-content-center'}>
							<Col md={8} className={'text-center'}>
								<h1 className={'uppercase bold white'}>{ props.shop.shopName }</h1>
								<p className={'white medium'}>9:00 - 6:00</p>
								<div className={'d-flex justify-content-center align-items-center'}>
									<RatingStar
										value={3}
									/>
									<p className={'white my-0 mx-2 p-0'}>(3 Reviews)</p>
								</div>
								<div className={'d-flex justify-content-center white mt-3'}>
									<i className="fas fa-map-marker-alt pr-2" style={{fontSize: '20px'}} />
									<h4>{ props.shop.address }</h4>
								</div>
							</Col>
						</Row>
					</Container>
				</Wrapper>

				<Container id={'card_container'}>
					<Row className={'justify-content-center'}>
						<Col md={8.5}>
							<Card>
								<Card.Body>
									<Link activeClass="active"
									      to="about__section"
									      spy={true}
									      smooth={true}
									      hashSpy={true}
									      offset={50}
									      duration={500}
									      delay={10}
									      isDynamic={true}
									      ignoreCancelEvents={false}
									>
										<Button className={'service__btn uppercase mx-2'} size={'lg'} data={'about__section'}>About Us</Button>
									</Link>

									<Link activeClass="active"
									      to="service__section"
									      spy={true}
									      smooth={true}
									      hashSpy={true}
									      offset={50}
									      duration={500}
									      delay={10}
									      isDynamic={true}
									      ignoreCancelEvents={false}
									>
										<Button className={'service__btn uppercase mx-2'} size={'lg'}>Our service menu</Button>
									</Link>

									<Link activeClass="active"
									      to="service__section"
									      spy={true}
									      smooth={true}
									      hashSpy={true}
									      offset={50}
									      duration={500}
									      delay={10}
									      isDynamic={true}
									      ignoreCancelEvents={false}
									>
									<Button className={'service__btn uppercase mx-2'} size={'lg'}>Book Appointment now</Button>
									</Link>
									<Link activeClass="active"
									      to="review__section"
									      spy={true}
									      smooth={true}
									      hashSpy={true}
									      offset={50}
									      duration={500}
									      delay={10}
									      isDynamic={true}
									      ignoreCancelEvents={false}
									>
										<Button className={'service__btn uppercase mx-2'} size={'lg'}>reviews</Button>
									</Link>

									<Link activeClass="active"
									      to="gallery__section"
									      spy={true}
									      smooth={true}
									      hashSpy={true}
									      offset={50}
									      duration={500}
									      delay={10}
									      isDynamic={true}
									      ignoreCancelEvents={false}
									>
										<Button className={'service__btn uppercase mx-2'} size={'lg'}>image gallery</Button>
									</Link>
								</Card.Body>
							</Card>
						</Col>
					</Row>


					<div id={'service__section'}>
						<Row className={'mt-5 justify-content-between'}>
							<Col sm={6} className={'text-left'}>
								<h4 className={'uppercase bold'}>Services</h4>
							</Col>
							<Col sm={3} className={'text-center'}>
								<Dropdown options={options} onChange={onCategoryChange} placeholder={'Select Category'}/>
							</Col>
						</Row>

						<Row className={'mb-5 pt-5 mt-5 justify-content-center'}>
							{
								services
							}
						</Row>
					</div>

					<div id={'gallery__section'}>
						<Row className={'text-left mb-5'}>
							<Col md={12}>
								<h4 className={'uppercase bold'}>Gallery</h4>
								{
									carousel
								}
							</Col>
						</Row>
					</div>
					<div id={'review__section'}>
						<Row className={'mt-5'}>
							<Col sm={6} className={'text-left'}>
								<h4 className={'uppercase bold'}>Reviews</h4>
							</Col>
							<Col sm={6} className={'text-right'}>
								<Button className={'uppercase search__btn'} id={'filter__btn'}>
									Filter and sort<i className="fas fa-bars mx-1" />
								</Button>
							</Col>
						</Row>
						{
							reviews
						}

					</div>

					<div id={'about__section mt-4'}>
						<Row>
							<Col sm={12} className={'text-left'}>
								<h4 className={'uppercase bold'}>About us</h4>
							</Col>
						</Row>
						<Row className={''}>
							<Col lg={8}>
								<p className={'text-left light'}>
									<td dangerouslySetInnerHTML={{__html: props.shop.description}} />
								</p>
							</Col>
						</Row>
					</div>
					<div id={'about__section mt-4'}>
						<Row>
							<Col sm={12} className={'text-left'}>
								<h4 className={'uppercase bold'}>Our Location</h4>
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<iframe
									id={'map2'}
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
									width="600" height="450" frameBorder="0" style={{border: 0}} allowFullScreen=""
									aria-hidden="false" tabIndex="0" />
							</Col>
						</Row>
					</div>
					<div id={'about__section '}>
						<Row>
							<Col sm={12} className={'text-left'}>
								<h4 className={'uppercase bold'}>Timings</h4>
							</Col>
						</Row>
						<Row className={''}>
							<Col lg={4} className={'text-left'}>
								{
									schedule
								}
							</Col>
						</Row>
					</div>
				</Container>
				<div id={'wrapper_checkout'}>
					{checkoutBasket}
				</div>
			</>
		)
	}

	return (
		shop
	)
};

const mapStateToProps = state => ({
	shop: state.shop.shop,
	cart: state.cart.cart,
	totalPrice: state.cart.totalPrice,
	loading: state.shop.loading,
})

const mapDispatchToProps = dispatch => ({
	getShop: ( storeId ) => dispatch(actions.fetchShop( storeId )),
	addToCart: ( service ) => dispatch(actions.addToCart( service )),
	removeFromCart: ( serviceId, servicePrice ) => dispatch(actions.removeFromCart( serviceId, servicePrice ))
})

export default connect( mapStateToProps, mapDispatchToProps )(ShopView);
