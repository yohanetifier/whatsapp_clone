import React from 'react';
import { GoPlus } from 'react-icons/go';
import Input from '../Input/Input';
import { VscSmiley } from 'react-icons/vsc';
import { BiMicrophone } from 'react-icons/bi';
import { CiStickyNote } from 'react-icons/ci';
import { size } from '@/lib/utils';

interface Props {}

const MessageBar = (props: Props) => {
	const optionsMessage = [
		{
			icon: <CiStickyNote className={`${size}`} />
		},
		{
			icon: <VscSmiley className={`${size}`} />
		}
	];
	return (
		<div className="gap-2 p-6 border-2 h-[11%] flex items-center">
			<button>
				<GoPlus className={`${size}`} />
			</button>
			<div className="p-2 w-[98%] flex justify-between rounded-full border-2 border-gray-500">
				<Input
					type={'text'}
					className="w-[94%] outline-none border-0 bg-transparent"
				/>
				{optionsMessage.map(({ icon }, index) => (
					<button key={index}>{icon}</button>
				))}
			</div>
			<button>
				<BiMicrophone className={`${size}`} />
			</button>
		</div>
	);
};

export default MessageBar;
