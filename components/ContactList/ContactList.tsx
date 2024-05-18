import React from 'react';
import ContactCard from '../ContactCard/ContactCard';

interface Props {}

const ContactList = (props: Props) => {
	return (
		<div data-testid="contactList" className="mt-8">
			<ContactCard />
		</div>
	);
};

export default ContactList;
