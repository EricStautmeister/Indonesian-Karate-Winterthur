import React from 'react';
import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col } from '@mantine/core';
import { ChevronsUp, HandStop, Barbell, Flame } from 'tabler-icons-react';
import Link from 'next/link';

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

	buffer: {
		marginBottom: theme.spacing.xl * 2,
	},
}));

const features = [
	{
		icon: ChevronsUp,
		title: 'Indonesian Karate',
		description:
			'Indonesian Karate erfordert keine akrobatischen Begabungen und eignet sich für jeden Körperbau und alle Altersklassen. Innere Kraft finden und entfalten ist der Kernpunkt des Systems um die Harmonie von Seele und Körper im Indonesian Karate zu finden.',
	},
	{
		icon: HandStop,
		title: 'Selbstverteidigung',
		description:
			'Selbstschutz darf nicht ausschließlich als Verteidigung gegen einen Angreifer verstanden werden. Reflexe, blitzschnelle Reaktion, Instinkt, Intuition und Wahrnehmung werden entwickelt, gefördert und bleiben durch gezieltes Training bis ins hohe Alter erhalten.',
	},
	{
		icon: Barbell,
		title: 'Fitness',
		description:
			'Das ganzheitliche Fitnesstraining beinhaltet verschiedene Übungen, die alleine, zu zweit oder in der Gruppe trainiert werden. Gezielte Übungen stärken den Körper und halten ihn fit. Dank Dehnübungen bleibt der Körper geschmeidig und Spannungen aus dem Alltag werden abgebaut.',
	},
	{
		icon: Flame,
		title: 'Selbstvertrauen',
		description:
			'Selbstsicherheit und Selbstbestimmung, Vertrauen in die eigenen Fähigkeiten, schützen nicht nur vor einem Überfall, sondern bestimmen ebenso unser privates und berufliches Leben.',
	},
];

const targetGroups = [
	{
		title: 'ERWACHSENE',
		text: 'Das heutige Berufs- und Familienleben stellt Erwachsenen oft hohe Ansprüche an Leistungsvermögen und Emotionen. Indonesian Karate bietet die Möglichkeit, den oft stressigen Alltag los zu lassen und neue Kraft und Energie zu tanken. Neues Selbstvertrauen kann entwickelt und Aggressionen abgebaut werden. Konzentration und Koordination werden geschult – dabei darf jeder in seinem Tempo lernen. Durch die Auseinandersetzung mit dem eigenen Körper kann der Kopf zur Ruhe finden – ein neues Körperempfinden und eine neue Zufriedenheit können sich einstellen. Das anspruchsvolle Programm lehrt einen Geduld mit sich selber zu üben auf dem Weg Richtung Schwarzgurt.',
	},
	{
		title: 'JUGENDLICHE',
		text: 'Schulen- und Lehrstellen sind in den letzten Jahren kopflastiger geworden. Einerseits werden hohe Ansprüche an Lehrlinge und Schüler gestellt, gleichzeitig aber auch eine hohe Selbstständigkeit erwartet. Indonesian Karate bietet die Möglichkeit, den oft stressigen Schul- oder Lehrstellen-Alltag etwas los zu lassen und neue Kraft und Energie zu tanken. Neues Selbstvertrauen kann entwickelt und Aggressionen abgebaut werden. Konzentration und Koordination werden geschult – dabei darf jeder in seinem Tempo lernen. Durch die Auseinandersetzung mit dem eigenen Körper kann der Kopf zur Ruhe finden – ein neues Körperempfinden und eine neue Zufriedenheit können sich einstellen. Das anspruchsvolle Programm lehrt einen Geduld mit sich selber zu üben auf dem Weg Richtung Schwarzgurt.',
	},
	{
		title: 'KINDER',
		text: 'Kinder brauchen Bewegung! Mit Indonesian Karate bekommen sie die Möglichkeit, sich „auszuleben“, spielerisch ihre Kräfte zu messen und  neues Selbstvertrauen zu gewinnen. Dabei lernen sie auch, achtsam mit sich selber und ihren Mitschülern und Mitschülerinnen umzugehen. Aggressionen werden abgebaut und Konzentration und Koordination geschult.',
	},
];

export default function AngebotMitIcons() {
	const { classes } = useStyles();

	const featureItems = features.map((feature) => (
		<div key={feature.title}>
			<ThemeIcon
				size={44}
				radius="md"
				variant="gradient"
				gradient={{ deg: 133, from: 'blue', to: 'cyan' }}>
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

	const targetGroupItems = targetGroups.map((targetGroup) => (
		<>
			<Text size="xl" mt="sm" weight={800}>
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
				<Text color="dimmed" className={classes.buffer}>
					Die Unterteilung des Trainings in die drei Bereiche: Indonesian Karate,
					Selbstverteidigung und Fitness/Stretching erlaubt ein grosses Spektrum an
					Bewegungsformen und Übungsfeldern anzubieten.
				</Text>
				<SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
					{featureItems}
				</SimpleGrid>
				<Link href="/kontakt" passHref>
					<Button
						component="a"
						variant="gradient"
						gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
						size="lg"
						radius="md"
						mt="xl"
						className={classes.buffer}>
						Kontakt aufnehmen
					</Button>
				</Link>
				{targetGroupItems}
			</div>
		</div>
	);
}
