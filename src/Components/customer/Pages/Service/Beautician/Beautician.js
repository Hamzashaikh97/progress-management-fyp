import React from 'react';
import BeautyImg from '../../../../../assets/customer/img/beauty-image-3.png';
import Service from "../Service";

const Beautician = () => {
	const popularSearches = [
		'Lorem Ipsum',
		'Lorem Ipsum',
		'Lorem Ipsum',
		'Lorem Ipsum',
	]

	const props = {
		header__img: 'beautician__header__img',
		header__text: 'BOOK AN APPOINTMENT WITH A BEAUTICIAN ONLINE',
		card__text: 'Aesthetic doctor in Jumeirah Beach Residence',
		middle__text: 'Do you want a new Aesthetic doctor to enhance your face or a trendy hairstyle to go out? Whether for long health, the art of styling should be left to the professionals. For each makeover goal, there is a precise method that only seasoned hairdressers can implement. We have selected hairdressers for you in Paris, Bordeaux, Toulouse or even Lyon.',
		bottom__heading: 'here can I find a BEAUTICIAN for your face?',
		middle__img: 'beautician__middle__img',
		bottom__paragraph: 'Do you want a new Aesthetic doctor to enhance your face or a trendy hairstyle to go out? Whether for long health, the art of styling should be left to the professionals. For each makeover goal, there is a precise method that only seasoned hairdressers can implement. We have selected hairdressers for you in Paris, Bordeaux, Toulouse or even Lyon.',
		bottom_img: BeautyImg,
		popularSearches
	}

	return (
		<div>
			<Service props={{...props}}/>
		</div>
	);
};

export default Beautician;
