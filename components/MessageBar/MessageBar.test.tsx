import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MessageBar from './MessageBar';

describe('MessageBar', () => {
	it('should have 4 action buttons ', () => {
		render(<MessageBar />);
		const buttons = screen.getAllByRole('button');
		expect(buttons).toHaveLength(4);
	});
	it('should have a input of type text', () => {
		render(<MessageBar />);
		const input = screen.getByRole('textbox');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('type', 'text');
	});
});
