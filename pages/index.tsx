import type { NextPage } from 'next';
import { useEffect } from 'react';
import StdLayout from '../components/stdLayout';
import HeroContentCenter from '../components/HeroContentCenter';
import { useScrollLock } from '@mantine/hooks';

const heroText = {
	text: 'In unserer Schule erlernen Kinder, Jugendliche und Erwachsene die vielseitige Kampfkunst des Indonesischen Karates.',
};

const Home: NextPage = () => {
	const [, setScrollLocked] = useScrollLock();

	useEffect(() => {
		setScrollLocked(true);
	}, [setScrollLocked]);

	return (
		<StdLayout navIndex={0}>
			<HeroContentCenter heroText={heroText} />
		</StdLayout>
	);
};

export default Home;
