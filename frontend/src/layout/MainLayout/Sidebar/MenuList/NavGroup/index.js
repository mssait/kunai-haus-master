import PropTypes from 'prop-types';

import { Divider, List, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getRoles, roleCheck } from "../../../../../auth/AuthProvider";
import NavCollapse from '../NavCollapse';
import NavItem from '../NavItem';

const NavGroup = ({ item, isOpen, setIsOpen }) => {
    const theme = useTheme();
    const roles = getRoles()
    // menu list collapse & items
    const items = item.children?.map((menu) => {
        if (roleCheck(roles, menu.roles)) {
            switch (menu.type) {
                case 'collapse':
                    return <NavCollapse isOpen={isOpen} setIsOpen={setIsOpen} key={menu.id} menu={menu} level={1} />;
                case 'item':
                    return <NavItem isOpen={isOpen} setIsOpen={setIsOpen} key={menu.id} item={menu} level={1} />;
                default:
                    return (
                        <Typography key={menu.id} variant="h6" color="error" align="center">
                            Menu Items Error
                        </Typography>
                    );
            }
        } else {
            return null
        }
    });

    return (
        roleCheck(roles, item.roles) ?
            <>
                <List
                    subheader={
                        item.title && (
                            <Typography variant="caption" sx={{ ...theme.typography.menuCaption }} display="block"
                                gutterBottom>
                                {item.title}
                                {item.caption && (
                                    <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block"
                                        gutterBottom>
                                        {item.caption}
                                    </Typography>
                                )}
                            </Typography>
                        )
                    }
                >
                    {items}
                </List>

                {/* group divider */}
                <Divider sx={{ mt: 0.25, mb: 1.25 }} />
            </> : null
    );
};

NavGroup.propTypes = {
    item: PropTypes.object
};

export default NavGroup;
