import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const LoginInfo = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.appColors.pink,
  borderBottomLeftRadius: theme.shape.borderRadius * 2,
  color: theme.appColors.white,
  padding: theme.spacing(1, 2),
  minWidth: 250,
  position: 'absolute',
  right: 0,
}));

const Ribbon = styled('div')(({ theme }) => ({
  flexGrow: 1,
  marginInlineEnd: 'auto',
  borderBlockStart: '4px solid',
  borderBlockStartColor: theme.appColors.pink,
}));

export default function LoginRibbon() {
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'fixed',
        top: '64px',
        insetInline: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Ribbon />
      <LoginInfo>
        Logged in as : <span>User_NAME</span>{' '}
      </LoginInfo>
    </Box>
  );
}
