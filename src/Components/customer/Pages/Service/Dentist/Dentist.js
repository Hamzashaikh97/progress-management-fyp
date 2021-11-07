import React from 'react';
import DentistImg from "../../../../../assets/customer/img/smile-dentist-image-2.png"
import Service from "../Service";

const Dentist = () => {

	const popularSearches = [
		'Lorem Ipsum',
		'Lorem Ipsum',
		'Lorem Ipsum',
		'Lorem Ipsum',
	]

	const props = {
		header__img: 'dentist__header__img',
		header__text: 'BOOK AN APPOINTMENT WITH A SMILE DENTIST ONLINE',
		card__text: 'Aesthetic doctor in Jumeirah Beach Residence',
		middle__text: 'Do you want a new Aesthetic doctor to enhance your face or a trendy hairstyle to go out? Whether for long health, the art of styling should be left to the professionals. For each makeover goal, there is a precise method that only seasoned hairdressers can implement. We have selected hairdressers for you in Paris, Bordeaux, Toulouse or even Lyon.',
		bottom__heading: 'here can I find a Aesthetic smile for your teeth?',
		middle__img: 'dentist__middle__img',
		bottom__paragraph: 'Do you want a new Aesthetic doctor to enhance your face or a trendy hairstyle to go out? Whether for long health, the art of styling should be left to the professionals. For each makeover goal, there is a precise method that only seasoned hairdressers can implement. We have selected hairdressers for you in Paris, Bordeaux, Toulouse or even Lyon.',
		bottom_img: DentistImg,
		popularSearches
	}

	return (
		<div>
			<Service props={{...props}}/>
		</div>
	);
};

export default Dentist;
