import { ComponentStyleConfig, SystemProps } from '@chakra-ui/react';

const outline = {
  field: {
    bg: 'none',
    borderColor: 'neutrals.light',
    color: 'neutrals.base',
    _focus: {
      borderColor: 'brand.500',
    },
    _invalid: {
      borderColor: 'red.300',
      boxShadow: 'none',
    },
  } as SystemProps,
  icon: {
    width: '1rem',
    height: '1rem',
    insetEnd: '1.0rem',
    position: 'relative',
    color: 'neutrals.base',
    fontSize: '1.75rem',
  } as SystemProps,
};

const sizes = {
  sm: {
    field: {
      borderRadius: 8,
    },
  },
  md: {
    field: {
      borderRadius: 8,
    },
  },
  lg: {
    field: {
      borderRadius: 8,
    },
  },
};

const config: ComponentStyleConfig = {
  variants: {
    outline: outline,
  },
  sizes: sizes,
  defaultProps: {
    variant: 'outline', // null here
  },
};

export default config;
