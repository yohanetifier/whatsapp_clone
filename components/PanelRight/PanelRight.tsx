import React from 'react';
import TopBar from '../TopBar/TopBar';

interface Props {}

const PanelRight = (props: Props) => {
	return (
		<div className="border-2 border-red-500 w-[75%]">
			<TopBar />
		</div>
	);
};

export default PanelRight;
