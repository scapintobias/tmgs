import React from 'react';

import { Col, Container, Jumbotron, Row } from 'react-bootstrap';

function Hero(props) {
	return (
		<Jumbotron className="bg-transparent jumbotron-fluid p-0">
			<Container fluid={true}>
				<Row className="justify-content-center py-5">
					<Col md={7} sm={12}>
						{props.title && (
							<h1 className="display-1 font-weight-bolder responsive">
								{props.title}
							</h1>
						)}
						{props.subTitle && (
							<h3 className="display-4 font-weight-light responsive">
								{props.subTitle}
							</h3>
						)}
						{props.text && (
							<h3 className="lead font-weight-light responsive">{props.text}</h3>
						)}
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	);
}

export default Hero;
