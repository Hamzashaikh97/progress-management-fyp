import React from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import SearchImg1 from '../../../../assets/customer/img/service_search_img.jpeg';
import lineImg from '../../../../assets/customer/img/line_img.png';
import './Service.css'

const Service = ({props}) => {
	return (
		<>
			<div id={props.header__img} className={'section__header__img'}>
				<Container>
					<Row className={'justify-content-center'}>
						<Col md={8}>
							<h1 id={'service__heading'} className={'white text-center'}>
								{props.header__text}
							</h1>
						</Col>
					</Row>
				</Container>
			</div>

			<div id={'section__search'}>
				<Container>
					<Row>
						<Col md={12}>
							<Form className={'form-inline justify-content-center mt-5'}>
								<Form.Control name={'search'} placeholder={'Search'} id={'service__form1__width'} className={'service__form'}/>
								<Form.Control name={'search'} placeholder={'Location'} id={'service__form2__width'} className={'service__form'} />
								<Button variant="primary" type="submit" id={'service__button'}>
									Search
								</Button>
							</Form>
						</Col>
					</Row>
					<Row className={'mt-5'}>
						<Col md={4} className={'mb-4'}>
							<div className="card wrapper position-relative">
								<img src={SearchImg1} className="card-img-top" alt="service_img" />
								<div className={'hover__text py-4 text-left'}>
									<p className={'uppercase text-muted m-0 px-2'}>Discover our</p>
									<p className={'bold m-0 px-2'}>{props.card__text}</p>
								</div>
							</div>
						</Col>
						<Col md={4} className={'mb-4'}>
							<div className="card wrapper position-relative">
								<img src={SearchImg1} className="card-img-top" alt="service_img" />
								<div className={'hover__text py-4 text-left'}>
									<p className={'uppercase text-muted m-0 px-2'}>Discover our</p>
									<p className={'bold m-0 px-2'}>Aesthetic doctor in Jumeirah Beach Residence</p>
								</div>
							</div>
						</Col>
						<Col md={4} className={'mb-4'}>
							<div className="card wrapper position-relative">
								<img src={SearchImg1} className="card-img-top" alt="service_img" />
								<div className={'hover__text py-4 text-left'}>
									<p className={'uppercase text-muted m-0 px-2'}>Discover our</p>
									<p className={'bold m-0 px-2'}>Aesthetic doctor in Jumeirah Beach Residence</p>
								</div>
							</div>
						</Col>
						<Col md={4} className={'mb-4'}>
							<div className="card wrapper position-relative">
								<img src={SearchImg1} className="card-img-top" alt="service_img" />
								<div className={'hover__text py-4 text-left'}>
									<p className={'uppercase text-muted m-0 px-2'}>Discover our</p>
									<p className={'bold m-0 px-2'}>Aesthetic doctor in Jumeirah Beach Residence</p>
								</div>
							</div>
						</Col>
						<Col md={4} className={'mb-4'}>
							<div className="card wrapper position-relative">
								<img src={SearchImg1} className="card-img-top" alt="service_img" />
								<div className={'hover__text py-4 text-left'}>
									<p className={'uppercase text-muted m-0 px-2'}>Discover our</p>
									<p className={'bold m-0 px-2'}>Aesthetic doctor in Jumeirah Beach Residence</p>
								</div>
							</div>
						</Col>
						<Col md={4} className={'mb-5'}>
							<div className="card wrapper position-relative">
								<img src={SearchImg1} className="card-img-top" alt="service_img" />
								<div className={'hover__text py-4 text-left'}>
									<p className={'uppercase text-muted m-0 px-2'}>Discover our</p>
									<p className={'bold m-0 px-2'}>Aesthetic doctor in Jumeirah Beach Residence</p>
								</div>
							</div>
						</Col>
					</Row>
					<Row className={'mb-4'}>
						<Col md={12} className={'text-center'}>
							<Button className={'white uppercase header__btn '} id={'service__btn'}>see more cities</Button>
						</Col>
					</Row>
					<Row className={'pb-5'}>
						<Col md={12}>
							<p className={'service__text'}>{props.middle__text}</p>
						</Col>
					</Row>
				</Container>
			</div>

			<div id={props.middle__img} className={'section__discover'}>
				<Container>
					<Row className={'justify-content-center'}>
						<Col md={6} className={'text-center'}>
							<p className={'white uppercase'}>discover</p>
							<h3 className={'uppercase white'}>{props.bottom__heading}</h3>
							<img alt={'line__img'} src={lineImg} />
						</Col>
					</Row>
				</Container>
			</div>

			<div id={'section__bottom'}>
				<Container>
					<Row className={'justify-content-center mb-5'}>
						<Col md={8}>
							<Card id={'service__card'} className={'p-3'}>
								<Card.Body className={'text-muted'}>
									{props.bottom__paragraph}
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row className={'mb-5'}>
						<Col lg={6}>
							<div className={'d-flex justify-content-around mt-5'}>
									<ul className={'list-unstyled'}>
										<li>Popular searches</li>
										{props.popularSearches.map((text) => (
											<li className={'light service__bottom__list'}>{text}</li>
										))}
									</ul>
									<ul className={'list-unstyled mt-4'}>
										{props.popularSearches.map((text) => (
											<li className={'light service__bottom__list'}>{text}</li>
										))}
									</ul>
							</div>
						</Col>
						<Col lg={6}>
							<img alt={'about__img'} src={props.bottom_img} className={'img-fluid'}/>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Service;
