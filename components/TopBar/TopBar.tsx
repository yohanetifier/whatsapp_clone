import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import ContactOptions from '../ContactOptions/ContactOptions';

interface Props {}

const TopBar = (props: Props) => {
	return (
		<div
			data-testid="topBar"
			className=" p-2 flex items-center w-[100%] justify-between"
		>
			<div className=" w-[600px]">
				<ContactCard
					contactPictureSrc={'/test.jpg'}
					contactPictureAlt={'test'}
					contactName="Jane Doe"
					contactLastMessage={''}
					contactTime={''}
					onlineStatus={true}
				/>
			</div>
			<div className="">
				<ContactOptions />
			</div>
		</div>
	);
};

export default TopBar;
