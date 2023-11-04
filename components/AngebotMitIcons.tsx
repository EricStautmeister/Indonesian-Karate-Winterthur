import React from 'react';
import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col } from '@mantine/core';
import Link from 'next/link';
import { Icon } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
	wrapper: {
		padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
	},

	container: { paddingLeft: theme.spacing.xl * 16, paddingRight: theme.spacing.xl * 16 },

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 36,
		fontWeight: 900,
		lineHeight: 1.1,
		marginBottom: theme.spacing.md,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
	},

	bufferTop: {
		marginTop: theme.spacing.xl * 2,
	},

	bufferBottom: {
		marginBottom: theme.spacing.xl * 2,
	},
}));

interface Props {
	featuresText: {
		title: string;
		description: string;
		icon: Icon;
	}[];
	targetGroupsText: {
		title: string;
		text: string;
	}[];
}

export default function AngebotMitIcons({ featuresText, targetGroupsText }: Props) {
	const { classes } = useStyles();

	const featureItems = featuresText.map((feature) => (
		<div key={feature.title}>
			<ThemeIcon size={44} radius="md" variant="gradient" gradient={{ deg: 133, from: 'blue', to: 'cyan' }}>
				<feature.icon size={26} />
			</ThemeIcon>
			<Text size="lg" mt="sm" weight={500}>
				{feature.title}
			</Text>
			<Text color="dimmed" size="sm">
				{feature.description}
			</Text>
		</div>
	));

	const targetGroupItems = targetGroupsText.map((targetGroup) => (
		<>
			<Text size="xl" mt="sm" weight={800} classNames={classes.bufferTop}>
				{targetGroup.title}
			</Text>
			<Text color="dimmed">{targetGroup.text}</Text>
		</>
	));

	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<Title className={classes.title} order={2}>
					Trainingsangebote
				</Title>
				<Text color="dimmed" className={classes.bufferBottom}>
					Die Unterteilung des Trainings in die drei Bereiche: Pencak Silat/Indonesian Karate,
					Selbstverteidigung und Koordination/Fitness/Stretching erlaubt ein grosses Spektrum an
					Bewegungsformen und Übungsfeldern anzubieten.
				</Text>
				<SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
					{featureItems}
				</SimpleGrid>
				<Link href="/kontakt" passHref>
					<Button
						variant="gradient"
						gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
						size="lg"
						radius="md"
						mt="xl"
						className={classes.bufferBottom}>
						Kontakt aufnehmen
					</Button>
				</Link>
				{targetGroupItems}
			</div>
		</div>
	);
}
