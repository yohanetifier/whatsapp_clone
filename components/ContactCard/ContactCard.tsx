import React from 'react';
import Image from 'next/image';

interface Props {
	contactPictureSrc: string;
	contactPictureAlt: string;
	contactName: string;
	contactLastMessage?: string;
	contactTime?: string;
	numberOfUnreadMessages?: number;
	onlineStatus?: boolean;
}

const ContactCard = ({
	contactLastMessage,
	contactName,
	contactPictureSrc,
	contactPictureAlt,
	contactTime,
	numberOfUnreadMessages,
	onlineStatus
}: Props) => {
	return (
		<div className="mb-[18px] flex ">
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
				<p className="text-[14px]">
					{contactLastMessage}
					{onlineStatus}
				</p>
			</div>
			<div className=" flex-col  pt-3">
				<p className="text-[11px]  mb-1 border-green-500">
					{contactTime}
				</p>
				<div className="flex justify-end">
					<p className="rounded-full bg-primary w-[23px] h-[23px] flex justify-center items-center text-[11px]">
						{numberOfUnreadMessages}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
