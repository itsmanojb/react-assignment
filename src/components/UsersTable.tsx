import {
  alpha,
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  styled,
  Theme,
} from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputBase from '@mui/material/InputBase';
import useFetch from '../hooks/useFetch';
import useAppContext from '../hooks/useAppContext';
import { User } from '../types/User';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
  margin: theme.spacing(0, 2, 0, -2),
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

export default function UsersTable() {
  const { selectUser } = useAppContext();

  const { data, loading, error } = useFetch('users');

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          height: '90dvh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return data ? (
    <Container>
      <Box
        sx={{
          display: 'flex',
          padding: 3,
          alignItems: 'center',
          marginBlockStart: 4,
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box sx={{ display: 'flex', columnGap: 2, flex: 1 }}>
          <Button color="inherit" startIcon={<FilterAltOutlinedIcon />}>
            Filter
          </Button>
          <Button color="inherit" startIcon={<ViewWeekOutlinedIcon />}>
            Columns (5/7)
          </Button>
          <Button
            disableElevation
            variant="contained"
            sx={{
              marginInlineStart: 'auto',
              backgroundColor: (theme: Theme) => theme.appColors.blue.main,
            }}
          >
            Create User
          </Button>
        </Box>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Employee ID</TableCell>
              <TableCell>Mobile No.</TableCell>
              <TableCell>Email</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(data as User[]).map((user) => (
              <TableRow
                key={user.employeeId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.fullName}
                </TableCell>
                <TableCell>{user.department}</TableCell>
                <TableCell>{user.employeeId}</TableCell>
                <TableCell>{user.mobileNo}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="edit"
                    color="inherit"
                    onClick={() => selectUser(user)}
                  >
                    <ModeEditOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="delete" disabled color="inherit">
                    <DeleteOutlinedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  ) : null;
}
