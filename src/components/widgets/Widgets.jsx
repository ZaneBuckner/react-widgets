import { useWidgetContext } from 'context/WidgetContext';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import { Container, Grid } from '@mui/material';
import CardAnimation from 'components/shared/CardAnimation';

import Counter from './counter/Counter';
import Weather from './weather/Weather';
import Codewars from './codewars/Codewars';
import Clock from './clock/Clock';
import TaskTracker from './task-tracker/TaskTracker';
import BobRossPaintings from './bobross/BobRossPaintings';

export default function Widgets() {
	const { currentDisplay } = useWidgetContext();

	const widgetComponents = [
		{
			id: uuidv4(),
			ref: 'weather',
			component: <Weather />,
			columns: { xs: 12, sm: 6, md: 4 },
			isVisible: currentDisplay('weather'),
		},
		{
			id: uuidv4(),
			ref: 'task',
			component: <TaskTracker />,
			columns: { xs: 12, sm: 6, md: 4 },
			isVisible: currentDisplay('task'),
		},
		{
			id: uuidv4(),
			ref: 'clock',
			component: <Clock />,
			columns: { xs: 12, sm: 6, md: 4 },
			isVisible: currentDisplay('clock'),
		},
		{
			id: uuidv4(),
			ref: 'codewars',
			component: <Codewars />,
			columns: { xs: 12, sm: 12, md: 12 },
			isVisible: currentDisplay('codewars'),
		},
		{
			id: uuidv4(),
			ref: 'bobross',
			component: <BobRossPaintings />,
			columns: { xs: 12, sm: 6, md: 4 },
			isVisible: currentDisplay('bobross'),
		},
		{
			id: uuidv4(),
			ref: 'counter',
			component: <Counter />,
			columns: { xs: 12, sm: 6, md: 4 },
			isVisible: currentDisplay('counter'),
		},
	];

	return (
		<StyledMuiContainer>
			<Grid container spacing={3}>
				{widgetComponents.map(
					widget =>
						widget.isVisible && (
							<Grid
								item
								key={widget.id}
								xs={widget.columns.xs}
								sm={widget.columns.sm}
								md={widget.columns.md}
							>
								<CardAnimation children={widget.component} />
							</Grid>
						),
				)}
			</Grid>
		</StyledMuiContainer>
	);
}

const StyledMuiContainer = styled(Container)`
	margin: 2rem 0;
`;
