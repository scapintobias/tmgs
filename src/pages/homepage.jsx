import React from 'react';
import Hero from '../components/hero';

function HomePage(props) {
	return (
		<Hero title={props.title} subTitle={props.subTitle} text={props.text} />
	);
}

export default HomePage;
