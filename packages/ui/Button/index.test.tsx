import {Button} from '.';
import {render} from '@testing-library/react';

describe('Button', () => {
    it('should exists', () => {
        expect(Button).toBeDefined();
    });

    it('should render a button', () => {
        const {getByText} = render(<Button/>);
        expect(getByText('Hey!')).toBeInTheDocument();
    })
})