import { useWidgetContext } from 'context/WidgetContext';
import { Container, Grid } from '@mui/material';
import CardAnimation from 'components/shared/CardAnimation';
import styled from 'styled-components';

// WIDGET COMPONENTS
import Clock from 'components/widgets/clock/Clock';
import Weather from 'components/widgets/weather/Weather';
import TaskTracker from 'components/widgets/task-tracker/TaskTracker';
import BobRossPaintings from 'components/widgets/bobross/BobRossPaintings';
import Counter from 'components/widgets/counter/Counter';
import Codewars from 'components/widgets/codewars/Codewars';

export default function Widgets() {
	const { currentDisplay } = useWidgetContext();

	return (
		<StyledMuiContainer>
			<Grid container spacing={3}>
				{currentDisplay('clock') && (
					<Grid item xs={12} sm={6} md={4}>
						<CardAnimation children={<Clock />} />
					</Grid>
				)}
				{currentDisplay('weather') && (
					<Grid item xs={12} sm={6} md={4}>
						<CardAnimation children={<Weather />} />
					</Grid>
				)}
				{currentDisplay('task') && (
					<Grid item xs={12} sm={6} md={4}>
						<CardAnimation children={<TaskTracker />} />
					</Grid>
				)}
				{currentDisplay('bobross') && (
					<Grid item xs={12} sm={6} md={4}>
						<CardAnimation children={<BobRossPaintings />} />
					</Grid>
				)}
				{currentDisplay('counter') && (
					<Grid item xs={12} sm={6} md={4}>
						<CardAnimation children={<Counter />} />
					</Grid>
				)}
				{currentDisplay('codewars') && (
					<Grid item xs={12} sm={12} md={12}>
						<CardAnimation children={<Codewars />} />
					</Grid>
				)}
			</Grid>
		</StyledMuiContainer>
	);
}

const StyledMuiContainer = styled(Container)`
	margin: 2rem 0;
`;
