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
                    borderRadius : '0',
                    minWidth:'0',
                    '&:hover' : {
                        backgroundColor : '#1D7CBF'
                    }
                },
                textSecondary : {
                    color : '#1D7CBF',
                },
                containedPrimary : {
                    margin : '-0.2px -0.2px'
                }
            },
            MuiPaper : {
                elevation1 : {
                    boxShadow : 'none',
                }
            },
            MuiTableCell : {
                root : {
                    borderBottom: 'none',
                    fontWeight : '600',
                    padding : '25px 16px'
                },
                head : {
                    padding : '25px 16px',
                    fontWeight : '700',
                    color : 'grey',
                    fontSize : '10px',
                },
                body : {
                    color : 'grey',
                }
            }
    },
} )

export default theme;