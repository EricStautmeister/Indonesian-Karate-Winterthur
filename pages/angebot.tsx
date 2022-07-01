import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import KontaktForm from '../components/KontaktForm';
import StdLayout from '../components/singleItemLayout';
import AngebotMitIcons from '../components/AngebotMitIcons';

const Angebot: NextPage = () => {
	return (
		<StdLayout navIndex={1}>
			<AngebotMitIcons />
		</StdLayout>
	);
};

export default Angebot;
