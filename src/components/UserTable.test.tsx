import { render, screen } from '@testing-library/react';
import UsersTable from './UsersTable';
import { UIContextProvider } from '../contexts/UIContext';
import useFetch from '../hooks/useFetch';
import useUIContext from '../hooks/useUIContext';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utils/ThemeConfig';

// Mock the `useUIContext` and `useFetch` hooks
jest.mock('../contexts/UIContext', () => ({
  useUIContext: jest.fn(),
}));

// Mock the useFetch hook in this test
jest.mock('../hooks/useFetch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('UsersTable', () => {
  beforeEach(() => {
    // Reset the mocks before each test
    (useUIContext as jest.Mock).mockReset(); // Reset the mock
    (useFetch as jest.Mock).mockReset(); // Reset the mock
  });

  it('should show a loading spinner while fetching data', () => {
    // Mock useFetch to return loading state
    (useFetch as jest.Mock).mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(
    <UIContextProvider>
      <UsersTable/>
    </UIContextProvider>
  );

    // Check if the loading spinner is visible
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  /* it('should show an error message if fetching data fails', () => {
    // Mock useFetch to return error state
    (useFetch as jest.Mock).mockReturnValue({ data: null, loading: false, error: 'Failed to fetch' });

    render(<UsersTable />);
    
    // Check if the error message is displayed
    expect(screen.getByText(/Error: Failed to fetch/)).toBeInTheDocument();
  });

  it('should display user data in the table when fetch is successful', async () => {
    // Mock useFetch to return successful data
    const mockData = [
      {
        employeeId: '1',
        fullName: 'John Doe',
        department: 'HR',
        mobileNo: '1234567890',
        email: 'johndoe@example.com',
      },
    ];
    (useFetch as jest.Mock).mockReturnValue({ data: mockData, loading: false, error: null });

    render(<UsersTable />);
    
    // Wait for the table to be populated with the data
    await waitFor(() => expect(screen.getByText(/John Doe/)).toBeInTheDocument());

    // Check if all user data is rendered in the table
    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
    expect(screen.getByText(/HR/)).toBeInTheDocument();
    expect(screen.getByText(/1234567890/)).toBeInTheDocument();
    expect(screen.getByText(/johndoe@example.com/)).toBeInTheDocument();
  });

  it('should call showInfoPanel when the edit button is clicked', async () => {
    const mockData = [
      {
        employeeId: '1',
        fullName: 'John Doe',
        department: 'HR',
        mobileNo: '1234567890',
        email: 'johndoe@example.com',
      },
    ];
    const showInfoPanelMock = jest.fn();
    (useUIContext as jest.Mock).mockReturnValue({ showInfoPanel: showInfoPanelMock });
    (useFetch as jest.Mock).mockReturnValue({ data: mockData, loading: false, error: null });

    render(<UsersTable />);
    
    // Wait for the table to render and locate the edit button
    const editButton = screen.getByLabelText('edit');
    fireEvent.click(editButton);

    // Ensure showInfoPanel is called
    expect(showInfoPanelMock).toHaveBeenCalledWith(true);
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
    (useFetch as jest.Mock).mockReturnValue({ data: mockData, loading: false, error: null });

    render(<UsersTable />);
    
    // Wait for the table to be populated with the data
    await waitFor(() => expect(screen.getByText(/John Doe/)).toBeInTheDocument());

    // Check if the delete button is disabled
    const deleteButton = screen.getByLabelText('delete');
    expect(deleteButton).toBeDisabled();
  });

  it('should trigger a search input change', () => {
    (useFetch as jest.Mock).mockReturnValue({ data: [], loading: false, error: null });

    render(<UsersTable />);
    
    const searchInput = screen.getByPlaceholderText('Search…');
    fireEvent.change(searchInput, { target: { value: 'John' } });

    // Ensure the input value changes
    expect(searchInput).toHaveValue('John');
  });

  it('should trigger the "Create User" button click', () => {
    render(<UsersTable />);
    
    const createUserButton = screen.getByRole('button', { name: /Create User/ });
    fireEvent.click(createUserButton);

    // Add assertions based on what happens when the button is clicked.
    // For now, we're just confirming the click event works.
    expect(createUserButton).toBeInTheDocument();
  }); */
});
