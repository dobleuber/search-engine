import { render, screen } from "@testing-library/react";
import {SearchInput} from ".";

describe("SearchInput", () => {
    it("should exist", () => {
        expect(SearchInput).toBeDefined();
    });

    it("Should render a search form with an input", () => {
        const onSearchSpy = jest.fn();
        render(<SearchInput onSearch={onSearchSpy}/>);

        expect(screen.getByRole("search")).toBeInTheDocument();
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    })
    
    it("should render a button", () => {
        const onSearchSpy = jest.fn();
        render(<SearchInput onSearch={onSearchSpy}/>);
        expect(screen.getByText(/Search/)).toBeInTheDocument();
    });
});