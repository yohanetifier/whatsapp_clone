import React from 'react';

interface Props {
	children: React.ReactNode;
}

const AlignWrapper = ({ children }: Props) => {
	return <div className="w-[90%] py-[20px]">{children}</div>;
};

export default AlignWrapper;
