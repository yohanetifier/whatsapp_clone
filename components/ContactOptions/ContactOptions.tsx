import React from 'react';
import { MdPhoneInTalk } from 'react-icons/md';
import { BsCameraVideo } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';

interface Props {}

const ContactOptions = (props: Props) => {
	const size = 'w-[28px] h-[28px]';
	return (
		<div
			data-testid="contactOptions"
			className="flex justify-between w-[200px]"
		>
			<MdPhoneInTalk className={`${size}`} />
			<BsCameraVideo className={`${size}`} />
			<CiSearch className={`${size}`} />
			<IoIosArrowDown className={`${size} ml-4`} />
		</div>
	);
};

export default ContactOptions;
