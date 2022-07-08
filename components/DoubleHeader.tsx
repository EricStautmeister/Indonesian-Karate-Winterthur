import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Title } from '@mantine/core';
import { createStyles, Header, Container, Anchor, Group, Burger, Button } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import PsLogo from '/ps-logo.png';

const HEADER_HEIGHT = 84;

const useStyles = createStyles((theme) => ({
	inner: {
		height: HEADER_HEIGHT,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	links: {
		paddingTop: theme.spacing.lg,
		height: HEADER_HEIGHT,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',

		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	mainLinks: {
		marginRight: -theme.spacing.sm,
	},

	mainLink: {
		textTransform: 'uppercase',
		fontSize: 13,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
		padding: `7px ${theme.spacing.sm}px`,
		fontWeight: 700,
		borderBottom: '2px solid transparent',
		transition: 'border-color 100ms ease, color 100ms ease',

		'&:hover': {
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
			textDecoration: 'none',
		},
	},

	secondaryLink: {
		color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
		fontSize: theme.fontSizes.xs,
		textTransform: 'uppercase',
		transition: 'color 100ms ease',

		'&:hover': {
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
			textDecoration: 'none',
		},
	},

	mainLinkActive: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		borderBottomColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
	},
}));

interface LinkProps {
	label: string;
	link: string;
}

interface DoubleHeaderProps {
	mainLinks: LinkProps[];
	userLinks: LinkProps[];
	navIndex: number;
}

export default function DoubleHeader({ mainLinks, userLinks, navIndex }: DoubleHeaderProps) {
	const [opened, toggleOpened] = useBooleanToggle(false);
	const { classes, cx } = useStyles();
	const [active, setActive] = useState(navIndex);

	const mainItems = mainLinks.map((item, index) => (
		<Link key={item.label} href={item.link} style={{ textDecoration: 'none' }}>
			<Anchor
				href={item.link}
				component="a"
				className={cx(classes.mainLink, { [classes.mainLinkActive]: index === active })}
				onClick={(event: React.MouseEvent) => {
					// event.preventDefault();
					setActive(index);
				}}>
				{item.label}
			</Anchor>
		</Link>
	));

	const secondaryItems = userLinks.map((item) => (
		<Link key={item.label} href={item.link} passHref>
			<Anchor
				component="a"
				// onClick={(event: React.MouseEvent) => event.preventDefault()}
				className={classes.secondaryLink}>
				{item.label}
			</Anchor>
		</Link>
	));

	return (
		<Header height={HEADER_HEIGHT} mb={120}>
			<Container className={classes.inner}>
				<Title>Pencak Silat Winterthur</Title>
				<div className={classes.links}>
					<Group position="right">{secondaryItems}</Group>
					<Group spacing={0} position="right" className={classes.mainLinks}>
						{mainItems}
					</Group>
				</div>
				<Burger
					opened={opened}
					onClick={() => toggleOpened()}
					className={classes.burger}
					size="sm"
				/>
			</Container>
		</Header>
	);
}
