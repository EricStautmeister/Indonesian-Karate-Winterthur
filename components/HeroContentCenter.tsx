import React from 'react';
import { Title, Text, Container, Button, Overlay, createStyles } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: 'relative',
		height: '90vh',
		paddingTop: 180,
		paddingBottom: 300,
		backgroundImage: "url('/psvs.jpg')",
		backgroundSize: 'fit',
		backgroundPosition: 'center',
		overflow: 'hidden',

		'@media (max-width: 520px)': {
			paddingTop: 80,
			paddingBottom: 50,
		},
	},

	inner: {
		position: 'relative',
		zIndex: 1,
	},

	title: {
		fontWeight: 800,
		fontSize: 40,
		letterSpacing: -1,
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		color: theme.white,
		marginBottom: theme.spacing.xs,
		textAlign: 'center',
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,

		'@media (max-width: 520px)': {
			fontSize: 28,
			textAlign: 'left',
		},
	},

	highlight: {
		color: theme.colors[theme.primaryColor][4],
	},

	description: {
		color: theme.colors.gray[0],
		textAlign: 'center',

		'@media (max-width: 520px)': {
			fontSize: theme.fontSizes.md,
			textAlign: 'left',
		},
	},

	controls: {
		marginTop: theme.spacing.xl * 1.5,
		display: 'flex',
		justifyContent: 'center',

		'@media (max-width: 520px)': {
			flexDirection: 'column',
		},
	},

	link: {
		paddingLeft: theme.spacing.md/2,
		paddingRight: theme.spacing.md/2,
	},

	control: {
		height: 42,
		fontSize: theme.fontSizes.md,

		'&:not(:first-of-type)': {
			marginLeft: theme.spacing.md,
		},

		'@media (max-width: 520px)': {
			'&:not(:first-of-type)': {
				marginTop: theme.spacing.md,
				marginLeft: 0,
			},
		},
	},

	secondaryControl: {
		color: theme.white,
		backgroundColor: 'rgba(255, 255, 255, .4)',

		'&:hover': {
			backgroundColor: 'rgba(255, 255, 255, .45) !important',
		},
	},
}));

interface Props {
	heroText: {
		text: string;
	};
}

export default function HeroContentCenter({ heroText }: Props) {
	const { classes, cx } = useStyles();

	return (
		<div className={classes.wrapper}>
			<Overlay color="#000" opacity={0.65} zIndex={1} />

			<div className={classes.inner}>
				<Title className={classes.title}>
					Pencak Silat{' '}
					<Text component="span" inherit className={classes.highlight}>
						Winterthur
					</Text>
				</Title>

				<Container size={640}>
					<Text size="lg" className={classes.description}>
						{heroText.text}
					</Text>
				</Container>

				<div className={classes.controls}>
					<Link href="/angebot" className={classes.link}>
						<Button className={classes.control} variant="white" size="lg">
							Angebot
						</Button>
					</Link>
					<Link href="/kontakt" className={classes.link}>
						<Button className={cx(classes.control, classes.secondaryControl)} size="lg">
							Kontakt
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
