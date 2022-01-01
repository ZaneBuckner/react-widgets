import { Wrapper, Button, Title } from './Toolbar.styled';

function WidgetWrapper({ name, icon }) {
	return (
		<Wrapper>
			<Button>{icon}</Button>
			<Title>{name}</Title>
		</Wrapper>
	);
}

export default WidgetWrapper;
