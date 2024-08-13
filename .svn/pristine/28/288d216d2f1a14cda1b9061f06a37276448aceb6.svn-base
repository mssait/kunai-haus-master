import { InputLabel, OutlinedInput } from "@mui/material";
import { IMaskInput } from "react-imask";
import { forwardRef } from "react";

const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            inputRef={ref}
            onAccept={value => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

const MaskedField = props => {
    return (
        <>
            <InputLabel>{props.label}</InputLabel>
            <OutlinedInput {...props} inputComponent={TextMaskCustom} inputProps={props} />
        </>
    )
}
export default MaskedField