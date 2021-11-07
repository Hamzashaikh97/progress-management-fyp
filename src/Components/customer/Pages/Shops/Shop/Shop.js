import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import RatingStar from "../../../../../lib/customer/RatingStar/RatingStar";

const Shop = ({ shop }) => {


	return (
		<Card id={'search__item'}>
			<Card.Img variant="top" src={ shop.shopImage } />
			<Card.Body  className={'text-left'}>
				<Row>
					<Col md={7}>
						<Card.Title className={'bold'}>{ shop.shopName }</Card.Title>
						<RatingStar
							value={ shop.avgRating }
						/>
						<div className={'d-flex text-muted'}>
							<i className="fas fa-map-marker-alt pr-2" style={{fontSize: '18px'}} />
							<p>{ shop.address }</p>
						</div>
						<p className={'medium'}> 9:00 - 6:00</p>
						{/*{*/}
						{/*	shop.tags.map((tag, index) =>(*/}
						{/*		<label key={index} className={'text-muted light'} style={{fontSize: '12px'}}>*/}
						{/*			- { tag } -*/}
						{/*		</label>*/}
						{/*	))*/}
						{/*}*/}
					</Col>
					<Col md={5}>
						<NavLink to={`/service/${shop._id}`} className={'uppercase btn btn-primary light service__btn'}>Book Appointment</NavLink>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default Shop;
