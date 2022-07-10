import { ComponentStyleConfig, SystemProps } from '@chakra-ui/react';

const solid: SystemProps = {
  bg: 'brand.500',
  _hover: {
    bg: 'brand.700',
  },
  color: 'neutrals.white',
  letterSpacing: 1,
};

const outline: SystemProps = {
  color: 'brand.500',
  bg: 'neutrals.white',
  _hover: {
    bg: 'brand.50',
  },
  borderColor: 'brand.500',
  letterSpacing: 3,
};

const ghost: SystemProps = {
  _hover: {
    bg: 'brand.50',
  },
  color: 'brand.500',
};

const link: SystemProps = {
  color: 'brand.500',
};

const config: ComponentStyleConfig = {
  variants: {
    solid: solid,
    outline: outline,
    ghost: ghost,
    link: link,
  },
  baseStyle: {
    borderRadius: 'lg',
    fontWeight: 400,
    px: 6,
    paddingInline: 6,
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};

export default config;
