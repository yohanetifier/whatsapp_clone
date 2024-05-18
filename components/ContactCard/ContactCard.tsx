import React from 'react';
import Image from 'next/image';

interface Props {}

const ContactCard = (props: Props) => {
	return (
		<div className="mt-2 flex ">
			<div className="w-[70px] h-[70px] border-2 border-green-500 rounded-lg">
				<Image
					src={'/avatar.jpg'}
					alt={'avatar'}
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
			<div className=" flex-col  pt-3">
				<p className="text-[11px]  mb-1 border-green-500">07:38 am</p>
				<div className="flex justify-end">
					<p className="rounded-full bg-primary w-[23px] h-[23px] flex justify-center items-center text-[11px]">
						3
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
