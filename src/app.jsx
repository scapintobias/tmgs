import React from 'react';
import './index.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { Nav } from 'react-bootstrap';

import Footer from './components/footer';
import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import ContactPage from './pages/contactpage';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'TMGS.',
			headerLinks: [
				{ title: 'Home', path: '/' },
				{ title: 'About', path: '/about' },
				{ title: 'Contact', path: '/contact' },
			],
			home: {
				title: 'Be Relentless',
				subTitle: 'Projects that make a difference',
				text: 'Check out my projects below',
			},
			about: {
				title: 'About me',
			},
			contact: {
				title: "Let/'s talk",
			},
		};
	}

	render() {
		return (
			<Router>
				<Container className='p-0' fluid={true}>
					<Navbar
						className='border-bottom'
						bg='transparent'
						expand='lg'>
						<Navbar.Brand className='font-weight-bolder'>
							TMGS.
						</Navbar.Brand>

						<Navbar.Toggle
							className='border-0'
							aria-controls='navbar-toggle'
						/>
						<Navbar.Collapse id='navbar-toggle'>
							<Nav className='ml-auto'>
								<Link className='nav-link' to='/'>
									Home
								</Link>
								<Link className='nav-link' to='/about'>
									About
								</Link>
								<Link className='nav-link' to='/contact'>
									Contact
								</Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
					<Route
						path='/'
						exact
						render={() => (
							<HomePage
								title={this.state.home.title}
								subTitle={this.state.home.subTitle}
								text={this.state.home.text}
							/>
						)}
					/>
					<Route
						path='/about'
						exact
						render={() => (
							<AboutPage title={this.state.about.title} />
						)}
					/>
					<Route
						path='/contact'
						exact
						render={() => (
							<ContactPage title={this.state.contact.title} />
						)}
					/>
					<Footer />
				</Container>
			</Router>
		);
	}
}

export default App;
