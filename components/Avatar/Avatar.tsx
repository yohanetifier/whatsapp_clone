import React from 'react';
import Image from 'next/image';

interface Props {
	pictureSrc: string;
	pictureAlt: string;
}

const Avatar = ({ pictureSrc, pictureAlt }: Props) => {
	return (
		<div className="w-[47px] h-[47px] border-2 border-red-500 rounded-full overflow-hidden">
			<Image
				src={pictureSrc}
				alt={pictureAlt}
				width={0}
				height={0}
				className="w-[100%] h-[100%] border-2 border-green-500"
			/>
		</div>
	);
};

export default Avatar;
