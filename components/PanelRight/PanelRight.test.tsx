import '@testing-library/jest-dom/';
import { render, screen } from '@testing-library/react';
import PanelRight from './PanelRight';

describe('PanelRight', () => {
	it('should render the top bar', () => {
		render(<PanelRight />);
		const topBar = screen.getByTestId('topBar');
		expect(topBar).toBeInTheDocument();
	});
});
