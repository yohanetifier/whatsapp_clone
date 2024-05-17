import '@testing-library/jest-dom/';
import { render, screen } from '@testing-library/react';
import FilterBar from './FilterBar';

describe('FilterBar', () => {
	it('should render without crash', () => {
		render(
			<FilterBar
				data={[
					{ label: 'Favourites' },
					{ label: 'Friends' },
					{ label: 'Groups' }
				]}
			/>
		);
		const buttons = screen.getAllByRole('button');
		expect(
			screen.getByRole('button', { name: 'Favourites' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: 'Friends' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: 'Groups' })
		).toBeInTheDocument();
		expect(buttons).toHaveLength(3);
	});
});
