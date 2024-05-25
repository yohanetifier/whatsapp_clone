import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import ContactOptions from '../ContactOptions/ContactOptions';

interface Props {}

const TopBar = (props: Props) => {
	return (
		<div
			data-testid="topBar"
			className="flex items-center border-2 border-green-500 w-[100%]"
		>
			<div className="border-2 border-red-500 w-[600px]">
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
