import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import ContactOptions from '../ContactOptions/ContactOptions';

interface Props {}

const TopBar = (props: Props) => {
	return (
		<div data-testid="topBar" className="p-6 flex">
			<div className="border-2 border-red-500 grow">
				<ContactCard
					contactPictureSrc={''}
					contactPictureAlt={''}
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
