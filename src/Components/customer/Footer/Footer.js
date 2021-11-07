import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Brand from "../../../assets/customer/img/footer-logo.png";
import './Footer.css'

const Footer = () => {
	return (
		<>
			<footer className={'position-relative'}>
				<div className="footer-top">
					<Container>
						<Row>
							<Col md={3}>
								<img src={Brand} alt={'logo'} id={'brand'} className={'py-5'}/>
								<p className={'white footer__paragraph'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
							</Col>
							<Col md={3} className={'d-flex flex-column justify-content-center'}>
								<p className={'white'}>Hairdresser</p>
								<p className={'white'}>Beauty institute</p>
								<p className={'white'}>Barber</p>
							</Col>
							<Col md={3} className={'d-flex flex-column justify-content-center'}>
								<p className={'white'}>Manicure</p>
								<p className={'white'}>Mag</p>
							</Col>
							<Col md={3} className={'d-flex flex-column justify-content-center'}>
								<p className={'white m-0 p-0'}>Subscribe to Our Newsletter</p>
								<p className={'white subscribe'}>Subscribers will receive news about us.</p>
								<Form className={'text-center'}>
									<Form.Control type="email" placeholder="Email" className={'header__form'} />
									<Button className={'site__btn mt-2'}>Submit</Button>
								</Form>
							</Col>
						</Row>
					</Container>
				</div>
				<div>
					<Container>
						<p className={'text-left white mt-3'} style={{fontSize: '0.8rem'}}>© 2020. All rights reserved.</p>
					</Container>
				</div>
			</footer>
		</>
	);
};

export default Footer;
