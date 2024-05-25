import React from 'react';
import TopBar from '../TopBar/TopBar';
import Historique from '../Historique/Historique';

interface Props {}

const PanelRight = (props: Props) => {
	return (
		<div className=" w-[75%]">
			<TopBar />
			<Historique />
		</div>
	);
};

export default PanelRight;
