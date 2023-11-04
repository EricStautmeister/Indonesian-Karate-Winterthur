import DoubleHeader from './DoubleHeader';
import Head from 'next/head';

import links from './routes';
import styles from '../styles/Home.module.css';

interface LayoutProps {
	children: any;
	navIndex: number;
}

export default function StdLayout({ children, navIndex }: LayoutProps) {
	return (
		<>
			<Head>
				<title>Pencak Silat Winterthur</title>
				<meta
					name="description"
					content="Die Unterteilung des Trainings in die drei Bereiche: Pencak Silat/Indonesian Karate, Selbstverteidigung und Koordination/Fitness/Stretching erlaubt ein grosses Spektrum an Bewegungsformen und Übungsfeldern anzubieten."
				/>
				<link rel="icon" href="/wrestling.ico" />
			</Head>
			<DoubleHeader mainLinks={links.mainLinks} userLinks={links.userLinks} navIndex={navIndex} />
			<main style={{ position: 'relative', top: '-7.45rem' }}>{children}</main>
			{/* <Footer /> */}
		</>
	);
}
