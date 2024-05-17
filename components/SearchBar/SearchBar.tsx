import React from 'react';
import { RiSearch2Line } from 'react-icons/ri';

interface Props {}

const SearchBar = (props: Props) => {
	return (
		<div className="flex border-2 items-center gap-2 mt-[20px] h-[40px] rounded-full p-5">
			<RiSearch2Line />
			<input
				type="text"
				placeholder="Search or start a new chat "
				className=" w-full bg-transparent outline-none"
			/>
		</div>
	);
};

export default SearchBar;
