import React from 'react';
import Carousel from '../components/carousel';
import Hero from '../components/hero';

function HomePage(props) {
	return (
		<div>
			<Hero
				title={props.title}
				subTitle={props.subTitle}
				text={props.text}
			/>
			<Carousel />
		</div>
	);
}

export default HomePage;
