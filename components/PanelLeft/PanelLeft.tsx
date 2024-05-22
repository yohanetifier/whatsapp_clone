import React from 'react';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import Avatar from '../Avatar/Avatar';
import SearchBar from '../SearchBar/SearchBar';
import FilterBar from '../FilterBar/FilterBar';
import ContactList from '../ContactList/ContactList';
import { MdMessage } from 'react-icons/md';

interface Props {}

const PanelLeft = (props: Props) => {
	const data = [
		{
			label: 'Favourites'
		},
		{
			label: 'Friends'
		},
		{
			label: 'Groups'
		}
	];
	return (
		<div className="relative h-[100vh] w-[425px] p-8 bg-backgroundPrimary">
			<div className="flex justify-between items-center">
				<Avatar pictureSrc={'/avatar.jpg'} pictureAlt={'avatar'} />
				<IoIosArrowDown className="w-[28px] h-[28px]" />
			</div>
			<SearchBar />
			<FilterBar data={data} />
			<ContactList />
			<button
				data-testid="createMessage"
				className="absolute bottom-[30px] right-[30px] rounded-full w-[66px] h-[66px] bg-green-500 flex justify-center items-center "
			>
				<MdMessage className="w-[28px] h-[28px] text-white" />
			</button>
		</div>
	);
};

export default PanelLeft;
