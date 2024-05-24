import React from 'react';
import ContactCard from '../ContactCard/ContactCard';

interface Props {}

const TopBar = (props: Props) => {
	return (
		<div className="p-6">
			<ContactCard
				contactPictureSrc={''}
				contactPictureAlt={''}
				contactName="Jane Doe"
				contactLastMessage={''}
				contactTime={''}
				onlineStatus={true}
			/>
		</div>
	);
};

export default TopBar;
