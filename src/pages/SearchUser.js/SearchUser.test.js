import { fireEvent, render, screen } from "@testing-library/react"
import { SearchUser } from "./SearchUser";
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
 }));

test("input should be rendered", () => {
    render(<SearchUser/>);
    const inputEl = screen.getByLabelText('Github Username');
    expect(inputEl).toBeInTheDocument()
    expect(inputEl).toBeVisible()
})

test("input should be empty", () => {
    render(<SearchUser/>);
    const inputEl = screen.getByLabelText('Github Username');
    expect(inputEl.value).toBe("")
})

test("input should be changed", () => {
    render(<SearchUser/>);
    const inputEl = screen.getByLabelText('Github Username');
    const testValue = 'test';

    fireEvent.change(inputEl, {target: {value: testValue}});
    expect(inputEl.value).toBe("test");
})

test("search button should be rendered", () => {
    render(<SearchUser/>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toBeInTheDocument();
})

test("search button should be disabled", () => {
    render(<SearchUser/>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toHaveAttribute('disabled');
})

test("search button should not be disabled when username exists", () => {
    render(<SearchUser/>);
    const buttonEl = screen.getByRole('button');
    const inputEl = screen.getByLabelText('Github Username');
    const testValue = 'test';

    fireEvent.change(inputEl, {target: {value: testValue}});

    expect(buttonEl).not.toBeDisabled();
})