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
            contrastText : "#fff"
        },
        secondary : {
            light : '#fff',
            main : '#fff',
            dark : '#fff',
            contrastText : '#1D7CBF'
        }
    },
    overrides: {
            MuiButton: { 
                root: { 
                    fontWeight : '800',
                    width : '25%',
                    minWidth : '0',
                    padding : '6px 10px',
                    borderRadius : '0',
                },
                textSecondary : {
                    color : '#1D7CBF',
                }
            }, 
    },
} )

export default theme;