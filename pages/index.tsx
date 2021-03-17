import Head from 'next/head';
import ReactTooltip from 'react-tooltip';
import { useEffect, useRef, useState } from 'react';
import Home from '../sections/Home';
import Skills from '../sections/Skills';
import Interests from '../sections/Interests';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';

export default function Index() {
	const [loaded, setLoaded] = useState(false);
	const contactRef = useRef(null);
	const contactFormRef = useRef(null);
	const projectsRef = useRef(null);

	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<div className="portfolio">
			<Head>
				<title>&gt;jfm | Jonathan Fernández Mertanen</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<main>
				{loaded && <ReactTooltip delayShow={300} effect={'solid'} />}
				<Home projectsRef={projectsRef} contactRef={contactRef} />
				<Skills />
				<Interests />
				<Projects projectsRef={projectsRef} />
				<Contact contactRef={contactRef} contactFormRef={contactFormRef} />
			</main>
			<Footer />
		</div>
	);
}
