import React from 'react';
import { MdPhoneInTalk } from 'react-icons/md';
import { BsCameraVideo } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { size } from '@/lib/utils';

interface Props {}

const ContactOptions = (props: Props) => {
	const options = [
		{
			icon: <MdPhoneInTalk className={`${size}`} />
		},
		{
			icon: <BsCameraVideo className={`${size}`} />
		},
		{
			icon: <CiSearch className={`${size}`} />
		}
	];
	return (
		<div
			data-testid="contactOptions"
			className="flex justify-between w-[120px]"
		>
			{options.map(({ icon }, index) => (
				<button key={index}>{icon}</button>
			))}
		</div>
	);
};

export default ContactOptions;
