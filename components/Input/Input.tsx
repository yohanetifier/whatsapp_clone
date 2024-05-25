import React from 'react';

type Props = Pick<HTMLInputElement, 'type'> &
	Partial<Pick<HTMLInputElement, 'placeholder'>>;

const Input = ({ type, placeholder }: Props) => {
	return <input type={type} placeholder={placeholder} />;
};

export default Input;
