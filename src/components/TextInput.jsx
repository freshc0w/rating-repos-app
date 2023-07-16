import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	error: {
		borderColor: '#d73a4a',
	},
});

const TextInput = ({ style, error, ...props }) => {
	const textInputStyle = error ? [style, styles.error] : [style];

	return (
		<NativeTextInput
			style={textInputStyle}
			{...props}
		/>
	);
};

export default TextInput;
