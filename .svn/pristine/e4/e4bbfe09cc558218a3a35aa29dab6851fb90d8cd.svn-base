import { createTheme } from "@mui/material"
import config from "../config"

let theme = createTheme({
    palette: {
        primary: {
            light: "#ffecec",
            main: "#662113",
            dark: "#b2471d",
            200: "#80C47E",
            800: "#5D8E5B",
        },
        secondary: {
            light: "#ffb99d",
            main: "#C9DFF2",
            dark: "#101010",
            200: "#b39ddb",
            800: "#4527a0",
        },
        background: {
            default: "#FFFFFF",
            paper: "#FFFFFF",
        },
        grey: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            900: "#212121",
        },
        success: {
            light: "#b9f6ca",
            200: "#69f0ae",
            main: "#00e676",
            dark: "#00c853",
        },
        error: {
            light: "#ef9a9a",
            main: "#ff6e64",
            dark: "#c62828",
        },
        warning: {
            light: "#fff8e1",
            main: "#ffe57f",
            dark: "#ffc107",
        },
    },
    shape: {
        borderRadius: config.borderRadius
    },
})
theme = createTheme({
    ...theme,
    typography: {
        fontFamily: config.fontFamily,
        h6: {
            fontWeight: 500,
            color: theme.palette.grey[900],
            fontSize: '0.75rem'
        },
        h5: {
            fontSize: '0.875rem',
            color: theme.palette.grey[900],
            fontWeight: 500
        },
        h4: {
            fontSize: '1rem',
            color: theme.palette.grey[900],
            fontWeight: 600
        },
        h3: {
            fontSize: 24,
            color: theme.palette.grey[900],
            fontWeight: 600
        },
        h2: {
            fontSize: 36,
            color: theme.palette.grey[900],
            fontWeight: 700
        },
        h1: {
            fontSize: '2.125rem',
            color: theme.palette.grey[900],
            fontWeight: 700
        },
        subtitle1: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: theme.palette.grey[900],
        },
        subtitle2: {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: theme.palette.grey[500],
        },
        caption: {
            fontSize: '0.75rem',
            color: theme.palette.grey[500],
            fontWeight: 400
        },
        body1: {
            fontWeight: 400,
            lineHeight: '1.334em'
        },
        body2: {
            letterSpacing: '0em',
            fontWeight: 400,
            lineHeight: '1.5em',
            color: theme.palette.grey[700],
        },
        button: {
            textTransform: 'capitalize'
        },
        customInput: {
            marginTop: 1,
            marginBottom: 1,
            '& > label': {
                top: 23,
                left: 0,
                color: theme.palette.grey[500],
                '&[data-shrink="false"]': {
                    top: 5
                }
            },
            '& > div > input': {
                padding: '30.5px 14px 11.5px !important'
            },
            '& legend': {
                display: 'none'
            },
            '& fieldset': {
                top: 0
            }
        },
        mainContent: {
            backgroundColor: theme.palette.primary.light,
            width: '100%',
            minHeight: 'calc(100vh - 88px)',
            flexGrow: 1,
            padding: '20px',
            marginTop: '88px',
            marginRight: '20px',
            borderRadius: `${config.borderRadius}px`
        },
        menuCaption: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: theme.palette.grey[900],
            padding: '6px',
            textTransform: 'capitalize',
            marginTop: '10px'
        },
        subMenuCaption: {
            fontSize: '0.6875rem',
            fontWeight: 500,
            color: theme.palette.grey[500],
            textTransform: 'capitalize'
        },
        commonAvatar: {
            cursor: 'pointer',
            borderRadius: '8px'
        },
        smallAvatar: {
            width: '22px',
            height: '22px',
            fontSize: '1rem'
        },
        mediumAvatar: {
            width: '34px',
            height: '34px',
            fontSize: '1.2rem'
        },
        largeAvatar: {
            width: '44px',
            height: '44px',
            fontSize: '1.5rem'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: '4px'
                }
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundImage: 'none'
                },
                rounded: {
                    borderRadius: `${config.borderRadius}px`
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    color: theme.palette.grey[900],
                    padding: '24px'
                },
                title: {
                    fontSize: '1.125rem'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '24px'
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '24px'
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: theme.palette.grey[700],
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    '&.Mui-selected': {
                        color: theme.palette.secondary.dark,
                        backgroundColor: theme.palette.secondary.light,
                        '&:hover': {
                            backgroundColor: theme.palette.secondary.light,
                        },
                        '& .MuiListItemIcon-root': {
                            color: theme.palette.secondary.dark,
                        }
                    },
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.light,
                        color: theme.palette.secondary.dark,
                        '& .MuiListItemIcon-root': {
                            color: theme.palette.secondary.dark
                        }
                    }
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: theme.palette.grey[700],
                    minWidth: '36px'
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: theme.palette.grey[900],
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: theme.palette.grey[900],
                    '&::placeholder': {
                        color: theme.palette.grey[500],
                        fontSize: '0.875rem'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: theme.palette.background.default,
                    borderRadius: `${config.borderRadius}px`,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.grey[400]
                    },
                    '&:hover $notchedOutline': {
                        borderColor: theme.palette.primary.light
                    },
                    '&.MuiInputBase-multiline': {
                        padding: 1
                    }
                },
                input: {
                    fontWeight: 500,
                    background: theme.palette.background.default,
                    padding: '15.5px 14px',
                    borderRadius: `${config.borderRadius}px`,
                    '&.MuiInputBase-inputSizeSmall': {
                        padding: '10px 14px',
                        '&.MuiInputBase-inputAdornedStart': {
                            paddingLeft: 0
                        }
                    }
                },
                inputAdornedStart: {
                    paddingLeft: 4
                },
                notchedOutline: {
                    borderRadius: `${config.borderRadius}px`
                }
            }
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        color: theme.palette.grey[300]
                    }
                },
                mark: {
                    backgroundColor: theme.palette.background.paper,
                    width: '4px'
                },
                valueLabel: {
                    color: theme.palette.primary.light
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: theme.palette.grey[200],
                    opacity: 1
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    color: theme.palette.primary.dark,
                    background: theme.palette.primary[200],
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    '&.MuiChip-deletable .MuiChip-deleteIcon': {
                        color: 'inherit'
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: theme.palette.background.paper,
                    background: theme.palette.grey[700]
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: '48px',
                    padding: '16px',
                }
            }
        }
    },
})
export default theme