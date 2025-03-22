import { Box, styled, Toolbar } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AppSettingsAltOutlinedIcon from "@mui/icons-material/AppSettingsAltOutlined";
import RequestPageOutlinedIcon from "@mui/icons-material/RequestPageOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import AccordionMenus from "./AccordionMenus";

const IconButton = styled(ListItemButton)(({ theme }) => ({
  display: "inline-flex",
  padding: theme.spacing(1, 0),
  borderRadius: theme.shape.borderRadius,
}));

const ExpendedMenuDrawer = styled("div")(({ theme }) => ({
  display: "flex",
  flex: 1,
  padding: theme.spacing(1, 0),
  borderInlineStart: "1px solid",
  borderColor: theme.palette.divider,
}));

type Props = {
  drawer: boolean;
  onDrawerToggle: (arg: string) => void;
};

export default function IconToolbar({ drawer, onDrawerToggle }: Props) {
  const NavMenus = [
    {
      icon: <MapsHomeWorkOutlinedIcon />,
      label: "My Organization",
      tooltip: "",
      link: "#",
    },
    {
      icon: <HomeOutlinedIcon />,
      label: "Home",
      tooltip: "",
      link: "#",
    },
    {
      icon: <DescriptionOutlinedIcon />,
      label: "Documents",
      tooltip: "",
      link: "#",
    },
    {
      icon: <AppSettingsAltOutlinedIcon />,
      label: "App Settings",
      tooltip: "",
      link: "#",
    },
    {
      icon: <RequestPageOutlinedIcon />,
      label: "Expenses",
      tooltip: "",
      link: "#",
    },
    {
      icon: <AssessmentOutlinedIcon />,
      label: "Assessments",
      tooltip: "",
      link: "#",
    },
    {
      icon: <FileCopyOutlinedIcon />,
      label: "Reports",
      tooltip: "",
      link: "#",
    },
    {
      icon: <LibraryAddCheckOutlinedIcon />,
      label: "Approvals",
      tooltip: "",
      link: "#",
    },
    {
      icon: <WarningAmberOutlinedIcon />,
      label: "Errors",
      tooltip: "",
      link: "#",
    },
    {
      icon: <TimelineOutlinedIcon />,
      label: "Analysis",
      tooltip: "",
      link: "#",
    },
  ];

  const UserMenus = [
    {
      icon: <PhoneIphoneOutlinedIcon />,
      label: "My App",
      tooltip: "",
      link: "#",
    },
  ];

  return (
    <>
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          backgroundColor: (theme) => theme.appColors.grey,
          height: "100%",
        }}>
        <Box
          sx={{
            overflowY: "auto",
            paddingInline: 0.5,
            display: "flex",
            flexDirection: "column",
          }}>
          <List sx={{ display: "grid", rowGap: 2, paddingBlock: 2 }}>
            {NavMenus.map((menu, index) => (
              <ListItem key={index} disablePadding>
                <IconButton onClick={() => onDrawerToggle("show")}>
                  <ListItemIcon sx={{ justifyContent: "center" }}>
                    {menu.icon}
                  </ListItemIcon>
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Divider style={{ marginBlockStart: "auto" }} />
          <List>
            {UserMenus.map((menu, index) => (
              <ListItem
                key={index}
                disablePadding
                onClick={() => onDrawerToggle("show")}>
                <IconButton>
                  <ListItemIcon sx={{ justifyContent: "center" }}>
                    {menu.icon}
                  </ListItemIcon>
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Box>
        {drawer && (
          <ExpendedMenuDrawer>
            <AccordionMenus />
          </ExpendedMenuDrawer>
        )}
      </Box>
    </>
  );
}
