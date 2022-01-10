import Web from '../pages'
import { render } from '@testing-library/react'

describe('Web', () => {
    it('should exist', () => {
        expect(Web).toBeDefined();
    });

    it('should render a button', () => {
        const {getByText} = render(<Web/>);
        expect(getByText('hey!')).toBeInTheDocument();
    })
})