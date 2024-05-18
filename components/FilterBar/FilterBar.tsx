import React from 'react';

interface Routes {
	label: string;
}

interface Props {
	data: Routes[];
}

const FilterBar = ({ data }: Props) => {
	return (
		<div
			data-testid="filterBar"
			className="border-2 flex  mt-4 rounded-[14px] overflow-hidden"
		>
			{data.map(({ label }, index) => (
				<div
					key={index}
					className="flex justify-center items-center w-1/3"
				>
					<button className=" p-4 text-tertiary ">{label}</button>
				</div>
			))}
		</div>
	);
};

export default FilterBar;
