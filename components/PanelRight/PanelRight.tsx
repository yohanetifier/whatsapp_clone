import React from 'react';
import TopBar from '../TopBar/TopBar';
import Historique from '../Historique/Historique';
import Input from '../Input/Input';
import MessageBar from '../MessageBar/MessageBar';

interface Props {}

const PanelRight = (props: Props) => {
	return (
		<div className=" w-[75%]">
			<TopBar />
			<Historique />
			<MessageBar />
		</div>
	);
};

export default PanelRight;
