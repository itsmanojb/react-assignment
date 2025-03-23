import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import UsersTable from './UsersTable';
import { UIContextProvider } from '../contexts/UIContext';
import useFetch from '../hooks/useFetch';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../config/ThemeConfig';

jest.mock('../hooks/useUIContext', () => ({
  __esModule: true,
  default: () => ({
    showInfoPanel: jest.fn(), // mock the function
  }),
}));

jest.mock('../hooks/useFetch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('UsersTable', () => {
  beforeEach(() => {
    (useFetch as jest.Mock).mockReset();
  });

  it('should show a loading spinner while fetching data', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(
      <ThemeProvider theme={theme}>
        <UIContextProvider>
          <UsersTable />
        </UIContextProvider>
      </ThemeProvider>,
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should show an error message if fetching data fails', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: null,
      loading: false,
      error: 'Failed to fetch',
    });

    render(
      <ThemeProvider theme={theme}>
        <UIContextProvider>
          <UsersTable />
        </UIContextProvider>
      </ThemeProvider>,
    );

    expect(screen.getByText(/Error: Failed to fetch/)).toBeInTheDocument();
  });

  it('should display user data in the table when fetch is successful', async () => {
    const mockData = [
      {
        employeeId: '1',
        fullName: 'John Doe',
        department: 'HR',
        mobileNo: '1234567890',
        email: 'johndoe@example.com',
      },
    ];
    (useFetch as jest.Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });

    render(
      <ThemeProvider theme={theme}>
        <UIContextProvider>
          <UsersTable />
        </UIContextProvider>
      </ThemeProvider>,
    );

    await waitFor(() =>
      expect(screen.getByText(/John Doe/)).toBeInTheDocument(),
    );

    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
    expect(screen.getByText(/HR/)).toBeInTheDocument();
    expect(screen.getByText(/1234567890/)).toBeInTheDocument();
    expect(screen.getByText(/johndoe@example.com/)).toBeInTheDocument();
  });

  it('should disable the delete button', async () => {
    const mockData = [
      {
        employeeId: '1',
        fullName: 'John Doe',
        department: 'HR',
        mobileNo: '1234567890',
        email: 'johndoe@example.com',
      },
    ];
    (useFetch as jest.Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });

    render(
      <ThemeProvider theme={theme}>
        <UIContextProvider>
          <UsersTable />
        </UIContextProvider>
      </ThemeProvider>,
    );

    await waitFor(() =>
      expect(screen.getByText(/John Doe/)).toBeInTheDocument(),
    );

    const deleteButton = screen.getByLabelText('delete');
    expect(deleteButton).toBeDisabled();
  });

  it('should trigger a search input change', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });

    render(
      <ThemeProvider theme={theme}>
        <UIContextProvider>
          <UsersTable />
        </UIContextProvider>
      </ThemeProvider>,
    );

    const searchInput = screen.getByPlaceholderText('Search…');
    fireEvent.change(searchInput, { target: { value: 'John' } });

    expect(searchInput).toHaveValue('John');
  });

  it('should trigger the "Create User" button click', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });

    render(
      <ThemeProvider theme={theme}>
        <UIContextProvider>
          <UsersTable />
        </UIContextProvider>
      </ThemeProvider>,
    );

    const createUserButton = screen.getByRole('button', {
      name: /Create User/,
    });
    fireEvent.click(createUserButton);

    expect(createUserButton).toBeInTheDocument();
  });
});
