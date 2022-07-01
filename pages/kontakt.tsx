import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import KontaktForm from '../components/KontaktForm';
import StdLayout from '../components/singleItemLayout';

const Kontakt: NextPage = () => {
	return (
		<StdLayout navIndex={2}>
			<KontaktForm />
		</StdLayout>
	);
};

export default Kontakt;
