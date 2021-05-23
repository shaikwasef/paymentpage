import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    typography: {
        fontFamily: ['Mulish',
        'sans-serif'].join(',')
       },
    palette : {
        primary : {
            light : '#1D7CBF',
            main : '#1D7CBF',
            dark : '#1D7CBF',
            contrastText : '#fff'
        },
    }
})

export default theme;