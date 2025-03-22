import { Box, styled } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MenuButton = styled('a')(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius * 2,
  marginBlockEnd: theme.spacing(0.5),
  textDecoration: 'none',
  color: theme.palette.text.primary,
  transition: 'all 0.3s',
  ':hover, &.active': {
    backgroundColor: theme.appColors.blue.main,
    color: theme.appColors.white,
  },
}));

export default function AccordionMenus() {
  const uLinks = [
    {
      label: 'User overview',
      active: true,
      link: '#',
    },
    {
      label: 'Departments',
      active: false,
      link: '#',
    },
    {
      label: 'Key templates',
      active: false,
      link: '#',
    },
  ];
  return (
    <Box width={'100%'}>
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: 'transparent',
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="h3" fontWeight={600}>
            My Company LTD.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion
            sx={{
              backgroundColor: 'transparent',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary style={{ paddingInline: 0 }}>
              <Typography component="span">Overview</Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion
            defaultExpanded
            sx={{
              backgroundColor: 'transparent',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              style={{ paddingInline: 0 }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Users</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={(theme) => ({
                borderInlineStart: `1px solid ${theme.palette.divider}`,
              })}
            >
              {uLinks.map((item, i) => (
                <MenuButton key={i} href={item.link} className={item.active ? 'active' : ''}>
                  {item.label}
                </MenuButton>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: 'transparent',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary style={{ paddingInline: 0 }}>
              <Typography component="span">Order &amp; Change History</Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: 'transparent',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary style={{ paddingInline: 0 }}>
              <Typography component="span">Multi-change Status</Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: 'transparent',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              style={{ paddingInline: 0 }}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">Kaldsflow</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={(theme) => ({
                borderInlineStart: `1px solid ${theme.palette.divider}`,
              })}
            >
              // Kaldsflow content
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: 'transparent',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              style={{ paddingInline: 0 }}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">Number Overview</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={(theme) => ({
                borderInlineStart: `1px solid ${theme.palette.divider}`,
              })}
            >
              // Number Overview content
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: 'transparent',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary style={{ paddingInline: 0 }}>
              <Typography component="span">Time Management</Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: 'transparent',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary style={{ paddingInline: 0 }}>
              <Typography component="span">Licenses</Typography>
            </AccordionSummary>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
