import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'Patrick Hand',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            tablet: 768,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

export default theme;
