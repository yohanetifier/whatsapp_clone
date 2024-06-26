import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PanelLeft from './PanelLeft';

describe('PanelLeft', () => {
	it('should render wihout crash', () => {
		render(<PanelLeft />);
		const searchbar = screen.getByTestId('searchbar');
		const input = screen.getByPlaceholderText('Search or start a new chat');
		const filterBar = screen.getByTestId('filterBar');
		const contactList = screen.getByTestId('contactList');
		expect(screen.getByTestId('avatar')).toBeInTheDocument();
		expect(searchbar).toBeInTheDocument();
		expect(input).toBeInTheDocument();
		expect(filterBar).toBeInTheDocument();
		expect(contactList).toBeInTheDocument();
		expect(screen.getByTestId('createMessage')).toBeInTheDocument();
	});
});
