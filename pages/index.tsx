import type { NextPage } from 'next';
import { useEffect } from 'react';
import StdLayout from '../components/stdLayout';
import HeroContentCenter from '../components/HeroContentCenter';
import { useScrollLock } from '@mantine/hooks';

const Home: NextPage = () => {
  const [, setScrollLocked] = useScrollLock();

  useEffect(() => {
    setScrollLocked(true);
  }, [setScrollLocked]);
  
	return (
		<StdLayout navIndex={0} >
			<HeroContentCenter />
		</StdLayout>
	);
};

export default Home;
