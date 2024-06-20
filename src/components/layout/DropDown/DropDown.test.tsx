import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DropDown from './DropDown';
import { mockDropDownList } from '@/mocks/UserProfileMock';

describe('DropDown Component', () => {
    it('renders a heading', () => {
        render(<DropDown options={mockDropDownList} />);

        const button = screen.getByRole('button', {});
        expect(button).toBeInTheDocument();
    });
});
