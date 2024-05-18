import '@testing-library/jest-dom/';
import { render, screen } from '@testing-library/react';
import ContactList from './ContactList';

describe('ContactList', () => {
	it('should render without crash', () => {
		render(<ContactList />);
		const contactList = screen.getByTestId('contactList');
		expect(contactList).toBeInTheDocument();
	});
});
