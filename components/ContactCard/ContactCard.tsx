import React from 'react';
import Image from 'next/image';

interface Props {}

const ContactCard = (props: Props) => {
	return (
		<div className="mt-2 flex">
			<div className="w-[70px] h-[70px] border-2 border-green-500 rounded-lg">
				<Image
					src={''}
					alt={''}
					className="w-[100%] h-[100%] "
					width={0}
					height={0}
				/>
			</div>
			<div className="ml-2 grow mt-1">
				<h2 className="font-plusJakartaSans text-[18px] font-bold">
					Jane Cooper
				</h2>
				<p className="text-[14px]">Haha oh man</p>
			</div>
			<div className="mt-3 ">
				<p className="text-[11px]">07:38 am</p>
				<div className="flex justify-end">
					<p className="rounded-full bg-primary w-[30px] h-[30px] flex justify-center items-center">
						3
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
