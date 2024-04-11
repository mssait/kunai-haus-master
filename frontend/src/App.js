import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { LicenseInfo } from '@mui/x-data-grid-premium';
import { SnackbarProvider } from "notistack";
import NavigationScroll from './layout/NavigationScroll';
import Routes from './routes';
import defaultTheme from './themes/default-theme';
import './global.css'

LicenseInfo.setLicenseKey('e62622550a8ec71dafc2ed1559066863Tz0xLEU9MzMwMjA1MTM4MTY0NCxTPXByZW1pdW0sTE09c3Vic2NyaXB0aW9uLEtWPTI=');

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
        <SnackbarProvider maxSnack={3}>
          <CssBaseline />
          <NavigationScroll>
            <Routes />
          </NavigationScroll>
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
