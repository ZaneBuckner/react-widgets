import { styled } from '@mui/system';

import { TextField } from '@mui/material';

const StyledWrapper = styled('div')`
	/* border: 0.1px solid lightblue; */
	display: flex;
	align-items: flex-end;
	width: 100%;

	font-family: 'Roboto', serif;
	color: #c3c3c3;

	svg {
		margin-right: 1rem;
		font-size: 1.5rem;
	}

	/* HACK: DISABLE INTERNAL AUTOFILL BACKGROUND-COLOR */
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		box-shadow: 0 0 0 30px #363636 inset !important;
		-webkit-box-shadow: 0 0 0 30px #363636 inset !important;
	}
`;

const color = {
	gold: '#DAB55D',
	grey: '#C3C3C3',
	greyLight: '#838383',
};

const input = {
	text: '.css-1480iag-MuiInputBase-root-MuiInput-root',
	border: {
		before: '.MuiInput-root:before',
		hover: '.MuiInput-root:hover:not(.Mui-disabled):before',
		focus: '.MuiInput-root:after',
	},
	label: {
		before: '.MuiInputLabel-root',
		focus: 'label.Mui-focused',
	},
};

const StyledTextField = styled(TextField)`
	width: 100%;

	${input.text} {
		color: ${color.grey};
	}

	${input.label.before} {
		color: ${color.greyLight};
	}
	${input.label.focus} {
		color: ${color.grey};
	}

	${input.border.before} {
		border-color: ${color.greyLight};
	}
	${input.border.hover} {
		border-color: ${color.grey};
	}
	${input.border.focus} {
		border-color: ${color.gold};
	}
`;

function InputField({ required, type, title, label, innerRef, icon, ...props }) {
	return (
		<StyledWrapper>
			{icon}
			<StyledTextField
				required={required}
				type={type}
				title={title}
				label={label}
				ref={innerRef}
				icon={icon}
				variant='standard'
				{...props}
			/>
		</StyledWrapper>
	);
}

export default InputField;
