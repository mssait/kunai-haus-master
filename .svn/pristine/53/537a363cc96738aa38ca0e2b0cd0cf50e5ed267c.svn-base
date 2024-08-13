import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import SearchIcon from '@mui/icons-material/Search'
import { AppBar, Box, Button, Card, CardContent, Collapse, Divider, Drawer, Fade, IconButton, InputBase, List, ListItemButton, ListItemIcon, ListItemText, Popper, Stack, Toolbar, alpha, styled } from '@mui/material'
import { IconDashboard, IconLogin, IconLogout, IconMenu2, IconUser, IconUserCheck, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { getHomePage, isAdmin, isLoggedIn, isUser } from '../auth/AuthProvider'
import LogoSection from './MainLayout/LogoSection'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
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
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:hover': {
                border: "1px solid rgba(0,0,0,0.25)"
            },
            '&:focus': {
                width: '20ch',
                border: "1px solid rgba(0,0,0,0.5)"
            },
        },
    },
}));

const scrollTo = id => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function PublicLayout() {

    const [openDrawer, setOpenDrawer] = useState(false)
    let { pathname } = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const showServices = Boolean(anchorEl);
    const [openMobileDropDown, setOpenMobileDropDown] = useState(false)

    return (
        <React.Fragment>
            <BrowserView>
                <AppBar position="sticky" sx={{ backgroundColor: 'grey.50', color: 'grey.900' }}>
                    <Toolbar sx={{ py: { md: 0.25 } }}>
                        <Box>
                            <LogoSection />
                        </Box>
                        {pathname === "/" ? (
                            <React.Fragment>
                                <Stack direction="row" mx="auto" spacing={2}>
                                    <Button component={Link}
                                        to="/"
                                        size="large">
                                        Home
                                    </Button>
                                    <Button size="large" onClick={() => { scrollTo('about-us') }}>
                                        About Us
                                    </Button>
                                    <Button size="large" onClick={() => { scrollTo("provinces") }}>
                                        Provinces
                                    </Button>
                                    <Button size="large" onClick={() => { scrollTo("faqs") }}>
                                        FAQs
                                    </Button>
                                    <Box display="flex" onMouseLeave={() => { setAnchorEl(null) }}>
                                        <Button size="large" onMouseOver={({ currentTarget }) => { setAnchorEl(currentTarget) }}
                                            onClick={({ currentTarget }) => { setAnchorEl(currentTarget) }}>
                                            Companies
                                        </Button>
                                        <Popper
                                            transition
                                            open={showServices}
                                            anchorEl={anchorEl}
                                            onClose={() => { setAnchorEl(null) }}
                                            onMouseLeave={() => { setAnchorEl(null) }}
                                            sx={{ zIndex: 9999 }}
                                        >
                                            {({ TransitionProps }) => (
                                                <Fade {...TransitionProps}>
                                                    <Card elevation={4}>
                                                        <CardContent>
                                                            <Box
                                                                position="absolute"
                                                                width={12}
                                                                height={12}
                                                                top={-6}
                                                                left="50%"
                                                                bgcolor="#FFF"
                                                                sx={{
                                                                    transform: "translateX(-50%) rotate(45deg)"
                                                                }} />
                                                            <Stack spacing={1}>
                                                                <Button
                                                                    component={Link}
                                                                    to="/company/sme"
                                                                    size="large"
                                                                >
                                                                    SME
                                                                </Button>
                                                                <Button
                                                                    component={Link}
                                                                    to="/company/bank"
                                                                    size="large"
                                                                >
                                                                    Bank
                                                                </Button>
                                                                <Button
                                                                    component={Link}
                                                                    to="/company/government"
                                                                    size="large"
                                                                >
                                                                    Government Officers
                                                                </Button>
                                                                <Button
                                                                    component={Link}
                                                                    to="/company/development-partner"
                                                                    size="large"
                                                                >
                                                                    Development partners
                                                                </Button>
                                                                <Button
                                                                    component={Link}
                                                                    to="/company/private-company"
                                                                    size="large"
                                                                >
                                                                    Private companies
                                                                </Button>
                                                            </Stack>
                                                        </CardContent>
                                                    </Card>
                                                </Fade>
                                            )}
                                        </Popper>
                                    </Box>
                                </Stack>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Stack direction="row" mx="auto" spacing={2}>
                                    <Button
                                        component={Link}
                                        to="/company/sme"
                                        size="large"
                                    >
                                        SME
                                    </Button>
                                    <Button
                                        component={Link}
                                        to="/company/bank"
                                        size="large"
                                    >
                                        Bank
                                    </Button>
                                    <Button
                                        component={Link}
                                        to="/company/government"
                                        size="large"
                                    >
                                        Government Officers
                                    </Button>
                                    <Button
                                        component={Link}
                                        to="/company/development-partner"
                                        size="large"
                                    >
                                        Development partners
                                    </Button>
                                    <Button
                                        component={Link}
                                        to="/company/private-company"
                                        size="large"
                                    >
                                        Private companies
                                    </Button>
                                </Stack>
                            </React.Fragment>
                        )}
                        <Box position='absolute' right={80}>
                            <form action="/search">
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                        name="query"
                                    />
                                </Search>
                            </form>
                        </Box>
                        <Box position='absolute' right={20}>
                            <IconButton color="inherit" component={Link} to={isAdmin() ? "/admin" : isUser() ? "/dashboard" : "/login"}>
                                {isLoggedIn() ? <IconUserCheck size='30' /> : <IconUser size='30' />}
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </BrowserView>
            <MobileView>
                <AppBar position="sticky" sx={{ backgroundColor: 'grey.50', color: 'grey.900' }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => {
                                setOpenDrawer(open => !open)
                            }}>
                            {openDrawer ? (
                                <IconX />
                            ) : (
                                <IconMenu2 />
                            )}
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={openDrawer}
                            onClose={() => {
                                setOpenDrawer(false)
                            }}
                        >
                            <Box my={2} mx={8}>
                                <LogoSection />
                            </Box>
                            <Divider />
                            <List>
                                {isLoggedIn() ? (
                                    <ListItemButton
                                        component={Link} to="/logout"
                                        onClick={() => {
                                            setOpenDrawer(false)
                                        }}>
                                        <ListItemIcon>
                                            <IconLogout />
                                        </ListItemIcon>
                                        <ListItemText primary="Logout" />
                                    </ListItemButton>
                                ) : (
                                    <ListItemButton
                                        component={Link} to="/login"
                                        onClick={() => {
                                            setOpenDrawer(false)
                                        }}>
                                        <ListItemIcon>
                                            <IconLogin />
                                        </ListItemIcon>
                                        <ListItemText primary="Login" />
                                    </ListItemButton>
                                )}
                                {isLoggedIn() && (
                                    <ListItemButton
                                        component={Link} to={getHomePage()}
                                        onClick={() => {
                                            setOpenDrawer(false)
                                        }}>
                                        <ListItemIcon>
                                            <IconDashboard />
                                        </ListItemIcon>
                                        <ListItemText primary="Dashboard" />
                                    </ListItemButton>
                                )}
                                <Divider />
                                {pathname === "/" ? (
                                    <React.Fragment>
                                        <ListItemButton
                                            onClick={() => {
                                                scrollTo('about-us')
                                            }}>
                                            <ListItemText primary="About Us" />
                                        </ListItemButton>
                                        <ListItemButton
                                            onClick={() => {
                                                scrollTo('provinces')
                                            }}>
                                            <ListItemText primary="Provinces" />
                                        </ListItemButton>
                                        <ListItemButton
                                            onClick={() => {
                                                scrollTo('faqs')
                                            }}>
                                            <ListItemText primary="FAQs" />
                                        </ListItemButton>
                                        <ListItemButton onClick={() => { setOpenMobileDropDown(preState => !preState) }}>
                                            <ListItemText primary="Companies" />
                                            {openMobileDropDown ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={openMobileDropDown} timeout="auto" unmountOnExit>
                                            <List>
                                                <ListItemButton
                                                    sx={{ pl: 4 }}
                                                    component={Link} to="/company/sme"
                                                    onClick={() => {
                                                        setOpenDrawer(false)
                                                    }}>
                                                    <ListItemText primary="SME" />
                                                </ListItemButton>
                                                <ListItemButton
                                                    sx={{ pl: 4 }}
                                                    component={Link} to="/company/bank"
                                                    onClick={() => {
                                                        setOpenDrawer(false)
                                                    }}>
                                                    <ListItemText primary="Bank" />
                                                </ListItemButton>
                                                <ListItemButton
                                                    sx={{ pl: 4 }}
                                                    component={Link} to="/company/government"
                                                    onClick={() => {
                                                        setOpenDrawer(false)
                                                    }}>
                                                    <ListItemText primary="Government" />
                                                </ListItemButton>
                                                <ListItemButton
                                                    sx={{ pl: 4 }}
                                                    component={Link} to="/company/development-partner"
                                                    onClick={() => {
                                                        setOpenDrawer(false)
                                                    }}>
                                                    <ListItemText primary="Development Partner" />
                                                </ListItemButton>
                                                <ListItemButton
                                                    sx={{ pl: 4 }}
                                                    component={Link} to="/company/private-company"
                                                    onClick={() => {
                                                        setOpenDrawer(false)
                                                    }}>
                                                    <ListItemText primary="Private Company" />
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <ListItemButton
                                            component={Link} to="/company/sme"
                                            onClick={() => {
                                                setOpenDrawer(false)
                                            }}>
                                            <ListItemText primary="SME" />
                                        </ListItemButton>
                                        <ListItemButton
                                            component={Link} to="/company/bank"
                                            onClick={() => {
                                                setOpenDrawer(false)
                                            }}>
                                            <ListItemText primary="Bank" />
                                        </ListItemButton>
                                        <ListItemButton
                                            component={Link} to="/company/government"
                                            onClick={() => {
                                                setOpenDrawer(false)
                                            }}>
                                            <ListItemText primary="Government" />
                                        </ListItemButton>
                                        <ListItemButton
                                            component={Link} to="/company/development-partner"
                                            onClick={() => {
                                                setOpenDrawer(false)
                                            }}>
                                            <ListItemText primary="Development Partner" />
                                        </ListItemButton>
                                        <ListItemButton
                                            component={Link} to="/company/private-company"
                                            onClick={() => {
                                                setOpenDrawer(false)
                                            }}>
                                            <ListItemText primary="Private Company" />
                                        </ListItemButton>
                                    </React.Fragment>
                                )}
                            </List>
                        </Drawer>
                        <Box display="flex" flexGrow={1}>
                            <LogoSection />
                        </Box>
                        <form action="/search">
                            <Search>
                                <StyledInputBase
                                    required
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    name="query"
                                    endAdornment={<IconButton type="submit">
                                        <SearchIcon />
                                    </IconButton>}
                                />
                            </Search>
                        </form>
                    </Toolbar>
                </AppBar>
            </MobileView>
            <Box minHeight="calc(100vh - 148.5px)">
                <Outlet />
            </Box>
        </React.Fragment >
    )
}