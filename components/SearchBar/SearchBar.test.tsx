import '@testing-library/jest-dom/';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
describe('SearchBar', () => {
	it('should render without crash', () => {
		render(<SearchBar />);
		expect(screen.getByRole('textbox')).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText('Search or start a new chat')
		).toBeInTheDocument();
		expect(document.querySelector('svg')).toBeInTheDocument();
	});
});
