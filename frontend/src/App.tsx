import styled from 'styled-components';
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import { useMemo, useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';

function App() {
	const [active, setActive] = useState(1);

	const global = useGlobalContext();

	const displayData = () => {
		switch (active) {
			case 1:
				return <Dashboard />;
			case 2:
				return <Dashboard />;
			case 3:
				return <Income />;
			case 4:
				return <Expenses />;
			default:
				return <Dashboard />;
		}
	};

	const orbMemo = useMemo(() => {
		return <Orb />;
	}, []);

	return (
		<AppStyled bg={bg}>
			{orbMemo}
			<MainLayout>
				<Navigation
					active={active}
					setActive={setActive}
				/>
				<main>{displayData()}</main>
			</MainLayout>
		</AppStyled>
	);
}

interface AppStyledProps {
	bg: string;
}

const AppStyled = styled.div<AppStyledProps>`
	height: 100vh;
	background-image: url(${(props) => props.bg});
	position: relative;
	main {
		flex: 1;
		background: var(--background-color);
		border: 3px solid #fff;
		backdrop-filter: blur(4.5px);
		border-radius: 32px;
		overflow: auto;
		overflow-x: hidden;
		&::-webkit-scrollbar {
			width: 0;
		}
	}
`;

export default App;
