import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, TextField, Tooltip } from "@mui/material";
import { useState } from "react";

const PasswordField = props => {
    const [show, setShow] = useState(false)

    return (
        <TextField type={show ? 'text' : 'password'} {...props} InputProps={{
            endAdornment: (
                <Tooltip title={show ? "Hide Password" : "Show Password"}>
                    <IconButton tabIndex={-1} edge="end" onClick={() => {
                        setShow(show => !show)
                    }}>
                        {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                </Tooltip>
            )
        }} />
    )
}
export default PasswordField;