import { Box, IconButton } from '@mui/material';
import { IconMenu2 } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import LogoSection from '../LogoSection';
import ProfileSection from './ProfileSection';

const Header = ({ handleLeftDrawerToggle }) => {
    return (
        <>
            <Box
                display='flex'
                width={{ md: 228, xs: "auto" }}
            >
                <Box display={{ xs: 'none', md: 'block' }} flexGrow={1}>
                    <LogoSection />
                </Box>
                <IconButton onClick={handleLeftDrawerToggle}>
                    <IconMenu2 />
                </IconButton>
            </Box>
            <Box flexGrow={1} textAlign="center">
                <Box display={{ md: 'none' }}>
                    <LogoSection />
                </Box>
            </Box>
            <ProfileSection />
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
