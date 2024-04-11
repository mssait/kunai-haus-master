import { AppBar, Box, Toolbar, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import AuthPage from '../../components/AuthPage';
import config from '../../config';
import Header from './Header';
import Sidebar from './Sidebar';
import LicenceNotification from '../../user/LicenceNotification';

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -(config.drawerWidth - 20),
            width: `calc(100% - ${config.drawerWidth}px)`
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${config.drawerWidth}px)`,
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${config.drawerWidth}px)`,
            padding: '8px',
            marginRight: '10px'
        }
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100% - ${config.drawerWidth}px)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px'
        },
    })
}));

const MainLayout = ({ menuItems, licence = true }) => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
    const [leftDrawerOpened, setLeftDrawerOpened] = useState(true);
    const handleLeftDrawerToggle = () => {
        setLeftDrawerOpened(leftDrawerOpened => !leftDrawerOpened)
    };

    useEffect(() => {
        setLeftDrawerOpened(!matchDownMd)
    }, [matchDownMd]);

    return (
        <AuthPage>
            <Box display="flex">
                <AppBar
                    enableColorOnDark
                    position="fixed"
                    color="inherit"
                    elevation={0}
                    sx={{
                        bgcolor: theme.palette.background.default,
                        transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                    }}
                >
                    <Toolbar>
                        <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                    </Toolbar>
                </AppBar>
                <Sidebar menuItems={menuItems} drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
                <Main theme={theme} open={leftDrawerOpened}>
                    {licence ? <Outlet /> : (
                        <LicenceNotification />
                    )}
                </Main>
            </Box>
        </AuthPage>
    );
};

export default MainLayout;
