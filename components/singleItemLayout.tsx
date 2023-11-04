import links from './routes';
import DoubleHeader from './DoubleHeader';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		width: '100%',
		padding: theme.spacing.xl,
		paddingTop: theme.spacing.xl * 2,
		paddingBottom: theme.spacing.xl * 2,
		borderRadius: theme.radius.lg,
		border: `1px solid ${theme.colors.gray[2]}`,
		boxSizing: 'border-box',
		[theme.fn.smallerThan('sm')]: {
			padding: theme.spacing.md,
			paddingTop: theme.spacing.md,
			paddingBottom: theme.spacing.md,
		},
	},
}));

interface LayoutProps {
	children: React.ReactNode;
	navIndex: number;
}

export default function Layout({ children, navIndex }: LayoutProps) {
	const { classes, cx } = useStyles();

	return (
		<>
			<DoubleHeader mainLinks={links.mainLinks} userLinks={links.userLinks} navIndex={navIndex} />
			<main style={{ position: 'relative', top: '-7.55rem' }}>
				<div className={classes.container}>{children}</div>
			</main>
			{/* <Footer /> */}
		</>
	);
}
