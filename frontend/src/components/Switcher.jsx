import {Switch} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";


const Switcher = ({isChecked, handleChangeLanguage}) => {

    const theme = createTheme({
        components: {
            MuiSwitch: {
                styleOverrides: {
                    switchBase: {
                        // Controls default (unchecked) color for the thumb
                        color: "rgba(0, 0, 0, 0.8)"
                    },
                    colorPrimary: {
                        "&.Mui-checked": {
                            // Controls checked color for the thumb
                            color: "rgba(252, 133, 133, 1)"
                        }
                    },
                    track: {
                        // Controls default (unchecked) color for the track
                        opacity: 0.2,
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        ".Mui-checked.Mui-checked + &": {
                            // Controls checked color for the track
                            opacity: 0.7,
                            backgroundColor: "rgba(252, 133, 133, 0.5)"
                        }
                    }
                }
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={isChecked}
                            onChange={handleChangeLanguage}
                        />
                    }
                    label={isChecked ? 'JS' : 'TS'}
                />
            </FormGroup>
        </ThemeProvider>
    )
}

export default Switcher

