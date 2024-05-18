import React from 'react';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import Avatar from '../Avatar/Avatar';
import SearchBar from '../SearchBar/SearchBar';
import FilterBar from '../FilterBar/FilterBar';
import ContactList from '../ContactList/ContactList';

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
		<div className="h-[100vh] w-[425px] p-8 bg-backgroundPrimary  ">
			<div className="flex justify-between items-center">
				<Avatar pictureSrc={'/avatar.jpg'} pictureAlt={'avatar'} />
				<IoIosArrowDown className="w-[28px] h-[28px]" />
			</div>
			<SearchBar />
			<FilterBar data={data} />
			<ContactList />
		</div>
	);
};

export default PanelLeft;
