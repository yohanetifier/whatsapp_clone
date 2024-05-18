import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import { Contact } from '@/typings/Contact';

interface Props {}

const ContactList = (props: Props) => {
	const contact: Contact[] = [
		{
			contactPictureSrc: '/avatar.jpg',
			contactPictureAlt: 'avatar',
			contactName: 'John Doe',
			contactLastMessage: 'Hello',
			contactTime: '12:00',
			numberOfUnreadMessages: 3
		},
		{
			contactPictureSrc: '/avatar.jpg',
			contactPictureAlt: 'avatar',
			contactName: 'John Doe',
			contactLastMessage: 'Hello',
			contactTime: '12:00',
			numberOfUnreadMessages: 3
		},
		{
			contactPictureSrc: '/avatar.jpg',
			contactPictureAlt: 'avatar',
			contactName: 'John Doe',
			contactLastMessage: 'Hello',
			contactTime: '12:00',
			numberOfUnreadMessages: 3
		},
		{
			contactPictureSrc: '/avatar.jpg',
			contactPictureAlt: 'avatar',
			contactName: 'John Doe',
			contactLastMessage: 'Hello',
			contactTime: '12:00',
			numberOfUnreadMessages: 3
		},
		{
			contactPictureSrc: '/avatar.jpg',
			contactPictureAlt: 'avatar',
			contactName: 'John Doe',
			contactLastMessage: 'Hello',
			contactTime: '12:00',
			numberOfUnreadMessages: 3
		},
		{
			contactPictureSrc: '/avatar.jpg',
			contactPictureAlt: 'avatar',
			contactName: 'John Doe',
			contactLastMessage: 'Hello',
			contactTime: '12:00',
			numberOfUnreadMessages: 3
		},
		{
			contactPictureSrc: '/avatar.jpg',
			contactPictureAlt: 'avatar',
			contactName: 'John Doe',
			contactLastMessage: 'Hello',
			contactTime: '12:00',
			numberOfUnreadMessages: 3
		},
		{
			contactPictureSrc: '/avatar.jpg',
			contactPictureAlt: 'avatar',
			contactName: 'John Doe',
			contactLastMessage: 'Hello',
			contactTime: '12:00',
			numberOfUnreadMessages: 3
		},
		{
			contactPictureSrc: '/avatar.jpg',
			contactPictureAlt: 'avatar',
			contactName: 'John Doe',
			contactLastMessage: 'Hello',
			contactTime: '12:00',
			numberOfUnreadMessages: 3
		}
	];
	return (
		<div
			data-testid="contactList"
			className="mt-8 h-[690px] overflow-scroll"
		>
			{contact.map(
				(
					{
						contactLastMessage,
						contactName,
						contactPictureAlt,
						contactPictureSrc,
						contactTime,
						numberOfUnreadMessages
					},
					index
				) => (
					<ContactCard
						key={`${contactName} - ${index}`}
						contactLastMessage={contactLastMessage}
						contactName={contactName}
						contactPictureAlt={contactPictureAlt}
						contactPictureSrc={contactPictureSrc}
						contactTime={contactTime}
						numberOfUnreadMessages={numberOfUnreadMessages}
					/>
				)
			)}
		</div>
	);
};

export default ContactList;
