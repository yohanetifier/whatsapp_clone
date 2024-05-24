import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import ContactOptions from '../ContactOptions/ContactOptions';

interface Props {}

const TopBar = (props: Props) => {
	return (
		<div data-testid="topBar" className="p-6 flex">
			<ContactCard
				contactPictureSrc={''}
				contactPictureAlt={''}
				contactName="Jane Doe"
				contactLastMessage={''}
				contactTime={''}
				onlineStatus={true}
			/>
			<ContactOptions />
		</div>
	);
};

export default TopBar;
