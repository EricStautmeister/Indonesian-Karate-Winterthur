import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import KontaktForm from '../components/KontaktForm';
import StdLayout from '../components/singleItemLayout';
import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col } from '@mantine/core';
import Link from 'next/link';
import { Icon } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
	wrapper: {
		marginTop: theme.spacing.xl * 2,
		display: 'flex',
		flexDirection: 'row',
	},
	textWrapper: {
		flex: 1,
		paddingRight: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
		width: '30rem',
	},
	imageWrapper: {
		width: '18rem',
		height: '30rem',
		backgroundImage: "url('/trainingsort.png')",
	},
	
	titles: {
		fontSize: 32,
	},
}));

const Kontakt: NextPage = () => {
	const { classes } = useStyles();
	return (
		<StdLayout navIndex={2}>
			<KontaktForm />
			<div className={classes.wrapper}>
				<div className={classes.textWrapper}>
					<Text size="xl" mt="md" weight={800} className={classes.titles}>
						Trainingsort
					</Text>
					<Text color="dimmed">
						Sportanlage Deutweg (neben der Eishalle). Der Trainingsraum befindet sich
						neben der Mitteltreppe B, oben in der Tribüne des Sportplatzes
					</Text>
				</div>
				<div className={classes.imageWrapper}></div>
			</div>
		</StdLayout>
	);
};

export default Kontakt;
