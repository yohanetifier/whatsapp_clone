import React from 'react';

interface Props {
	type: 'text';
	placeholder?: string;
	className?: string;
}

const Input = ({ type, placeholder, className }: Props) => {
	return (
		<input type={type} placeholder={placeholder} className={className} />
	);
};

export default Input;
