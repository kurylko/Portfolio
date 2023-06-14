import {Button, createTheme, ThemeProvider} from '@mui/material';


const CButton = (props) => {

    const theme = createTheme({
        palette: {
            primary: {
                light: 'rgba(252, 133, 133, 0.5)',
                main: 'rgb(207, 95, 95, 0.8)',
                dark: 'rgb(207, 95, 95)',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: 'rgb(207, 95, 95, 0.8)',
                dark: '#ba000d',
                contrastText: 'rgb(207, 95, 95, 0.8)',
            },
        }
    });


    return (
        <ThemeProvider theme={theme}>
            <Button {...props}/>
        </ThemeProvider>
    )
}

export default CButton