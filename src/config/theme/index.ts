import { extendTheme } from '@chakra-ui/react';

import radii from './borderRadius';
import breakpoints from './breakpoints';
import colors from './colors';
import components from './components';
import fonts from './fonts';
import fontSizes from './fontSizes';

const chakraTheme = extendTheme({
  fontSizes,
  fonts,
  breakpoints,
  colors,
  components,
  radii,
  styles: {
    global: {
      html: {
        'scroll-behavior': 'smooth',
      },
      body: {
        bg: 'neutrals.lightest',
      },
    },
  },
  config: {
    cssVarPrefix: 'oportuniza-ai',
  },
});

type Theme = typeof chakraTheme;

export type { Theme };
export default chakraTheme;
