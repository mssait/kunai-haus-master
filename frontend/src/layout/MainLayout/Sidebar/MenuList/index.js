import { Typography } from '@mui/material';
import NavGroup from './NavGroup';

const MenuList = ({ menuItems, isOpen, setIsOpen }) => {
    const navItems = menuItems.items.map(item => {
        return item.type === 'group' ? (
            <NavGroup isOpen={isOpen} setIsOpen={setIsOpen} key={item.id} item={item} />
        ) : (
            <Typography key={item.id} variant="h6" color="error" align="center">
                Menu Items Error
            </Typography>
        );
    });

    return <>{navItems}</>;
};

export default MenuList;
