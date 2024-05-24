import React from 'react';
import Image from 'next/image';
import { Contact } from '@/typings/Contact';

const ContactCard = ({
	contactLastMessage,
	contactName,
	contactPictureSrc,
	contactPictureAlt,
	contactTime,
	numberOfUnreadMessages,
	onlineStatus
}: Contact) => {
	return (
		<div data-testid="contactCard" className="mb-[18px] flex ">
			<div className="w-[70px] h-[70px] border-2 border-green-500 rounded-lg">
				<Image
					src={contactPictureSrc}
					alt={contactPictureAlt}
					className="w-[100%] h-[100%] "
					width={0}
					height={0}
				/>
			</div>
			<div className="flex-col  ml-2 grow mt-1">
				<h2 className="mb-2 font-plusJakartaSans text-[18px] font-bold">
					{contactName}
				</h2>
				{contactLastMessage && (
					<p className="text-[14px]"> {contactLastMessage} </p>
				)}
				{onlineStatus && <p className="text-[14px]"> Online </p>}
			</div>
			{!onlineStatus && (
				<div className=" flex-col pt-3">
					<p className="text-[11px]  mb-1 border-green-500">
						{contactTime}
					</p>

					<div className="flex justify-end">
						<p className="rounded-full bg-primary w-[23px] h-[23px] flex justify-center items-center text-[11px]">
							{numberOfUnreadMessages}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default ContactCard;
