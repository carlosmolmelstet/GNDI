import { ChakraProvider } from '@chakra-ui/react';
import chakraTheme from '@config/theme';

const App = ({ Component, pageProps }): JSX.Element => (
  <ChakraProvider theme={chakraTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
