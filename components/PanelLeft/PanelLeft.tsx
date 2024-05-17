import React from 'react';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import Avatar from '../Avatar/Avatar';
import SearchBar from '../SearchBar/SearchBar';

interface Props {}

const PanelLeft = (props: Props) => {
	return (
		<div className="h-[100vh] w-[425px]">
			<div className="flex justify-between items-center">
				<Avatar />
				<IoIosArrowDown className="w-[28px] h-[28px]" />
			</div>
			<SearchBar />
		</div>
	);
};

export default PanelLeft;
