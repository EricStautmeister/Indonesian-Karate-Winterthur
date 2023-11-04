import type { NextPage } from 'next';
import StdLayout from '../components/singleItemLayout';
import AngebotMitIcons from '../components/AngebotMitIcons';
import { ChevronsUp, HandStop, Barbell, Flame } from 'tabler-icons-react';

import styles from '../styles/Home.module.css';

const featuresText = [
	{
		icon: ChevronsUp,
		title: 'Pencak Silat',
		description:
			'Pencak Silat erfordert keine akrobatischen Begabungen und eignet sich für jeden Körperbau und alle Altersklassen. Innere Kraft finden und entfalten ist der Kernpunkt des Systems um die Harmonie von Seele und Körper im Indonesian Karate zu finden.',
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

const targetGroupsText = [
	{
		title: 'ERWACHSENE',
		text: 'Das heutige Berufs- und Familienleben stellt Erwachsenen oft hohe Ansprüche an Leistungsvermögen und Emotionen. Pencak Silat bietet die Möglichkeit, den oft stressigen Alltag los zu lassen und neue Kraft und Energie zu tanken. Neues Selbstvertrauen kann entwickelt und Aggressionen abgebaut werden. Konzentration und Koordination werden geschult – dabei darf jeder in seinem Tempo lernen. Durch die Auseinandersetzung mit dem eigenen Körper kann der Kopf zur Ruhe finden – ein neues Körperempfinden und eine neue Zufriedenheit können sich einstellen. Das anspruchsvolle Programm lehrt einen Geduld mit sich selber zu üben auf dem Weg Richtung Schwarzgurt.',
	},
	{
		title: 'JUGENDLICHE',
		text: 'Schulen- und Lehrstellen sind in den letzten Jahren kopflastiger geworden. Einerseits werden hohe Ansprüche an Lehrlinge und Schüler gestellt, gleichzeitig aber auch eine hohe Selbstständigkeit erwartet. Pencak Silat bietet die Möglichkeit, den oft stressigen Schul- oder Lehrstellen-Alltag etwas los zu lassen und neue Kraft und Energie zu tanken. Neues Selbstvertrauen kann entwickelt und Aggressionen abgebaut werden. Konzentration und Koordination werden geschult – dabei darf jeder in seinem Tempo lernen. Durch die Auseinandersetzung mit dem eigenen Körper kann der Kopf zur Ruhe finden – ein neues Körperempfinden und eine neue Zufriedenheit können sich einstellen. Das anspruchsvolle Programm lehrt einen Geduld mit sich selber zu üben auf dem Weg Richtung Schwarzgurt.',
	},
	{
		title: 'KINDER',
		text: 'Kinder brauchen Bewegung! Mit Pencak Silat bekommen sie die Möglichkeit, sich „auszuleben“, spielerisch ihre Kräfte zu messen und  neues Selbstvertrauen zu gewinnen. Dabei lernen sie auch, achtsam mit sich selber und ihren Mitschülern und Mitschülerinnen umzugehen. Aggressionen werden abgebaut und Konzentration und Koordination geschult.',
	},
];

const Angebot: NextPage = () => {
	return (
		<StdLayout navIndex={1}>
			<AngebotMitIcons featuresText={featuresText} targetGroupsText={targetGroupsText} />
		</StdLayout>
	);
};

export default Angebot;
