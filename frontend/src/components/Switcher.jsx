import {Switch} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Grid} from '@mui/material';


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
            <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item fontWeight={!isChecked ? 'bold' : 'light'}>JS</Grid>
                <Grid item>
                    <Switch
                        checked={isChecked}
                        onChange={handleChangeLanguage}
                    />
                </Grid>
                <Grid item fontWeight={!isChecked ? 'light' : 'bold'}>TS</Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Switcher

