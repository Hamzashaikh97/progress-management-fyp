import React, {useEffect} from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import Shop from "./Shop/Shop";
import ProgressBar from "../../../../lib/customer/ProgressBar/ProgressBar";
import { fetchShops } from "../../../../Store/customer/actions/index";
import './Shops.css'
import {formattingImage} from "../../../../Helpers/customerHelpers";

const Shops = props => {

	useEffect(() => {
		const shopNameQueryString = new URLSearchParams(props.location.search).get('shopName')
		const shopTypeQueryString = new URLSearchParams(props.location.search).get('shopType')

		console.log(shopNameQueryString, shopTypeQueryString);
		props.getAllStore(shopNameQueryString, shopTypeQueryString);
		window.scrollTo(0, 0)
	}, []);

	let shops = (
		<ProgressBar shopProgress="shop-progress "
		             shopRing="shop-ring" />
	)

	if (!props.loading) {
		shops = props.shops.map((shop, index) => {

			const mainShop = {
				address: shop.address,
				shopImage: shop.shopImage.avatar,
				shopName: shop.shopName,
				_id: shop._id
			}
			return (
				(
					<Shop key={index}
					      shop={mainShop}
					/>
				)
			)
		});
	}
	return (
		<div>
			<div id={'section__result__1'}>
				<Container>
					<Row className={'justify-content-center'}>
						<Col md={8} className={'text-center'}>
							<h3 className={'uppercase white light'}>hair dresser and hair salons</h3>
							<Form className={'text-left form-row w-100 mt-5'}>
								<Form.Group className={'w-50 px-1'}>
									<Form.Label className={'uppercase white light'}>Service/Treatment</Form.Label>
									<Form.Control type={'text'} className={'header__form'} />
								</Form.Group>
								<Form.Group className={'w-50 px-1 light'}>
									<Form.Label className={'uppercase white'}>Location</Form.Label>
									<Form.Control type={'text'} className={'header__form'} />
								</Form.Group>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>

			<div id={'section__result__2'} className={'mt-5 mb-5'}>
				<Container>
					<Row>
						<Col md={6}>
							<p className={'text-muted'}>Choose from {props.shops ? props.shops.length : 0} venues offering hairdresser and salons in edinburgh</p>
						</Col>
						<Col md={6} className={'d-flex flex-row-reverse text-right mb-4'}>
							<Button className={'uppercase search__btn'} id={'hide__btn'}>Hide Map</Button>
							<Button className={'uppercase mx-3 search__btn'} id={'filter__btn'}>
								Filter and sort<i className="fas fa-bars pl-2" />
							</Button>
						</Col>
					</Row>

					<Row>
						<Col md={6}>
							{
								shops
							}
						</Col>
						<Col md={6}>
							<div>
								<iframe
									id={'map'}
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
									width="600" height="450" frameBorder="0" style={{border: 0}} allowFullScreen=""
									aria-hidden="false" tabIndex="0" />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};



const mapStateToProps = state => {
	return {
		shops: state.shop.shops,
		loading: state.shop.loading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getAllStore: (shopName, shopType) => dispatch(fetchShops(shopName, shopType))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Shops);
