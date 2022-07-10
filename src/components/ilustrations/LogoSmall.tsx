import { Icon, IconProps } from '@chakra-ui/react';

export function LogoSmall({ ...props }: IconProps) {
  return (
    <Icon
      width="41px"
      height="40px"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.9168 40H33.6001V25.7383L40.9168 40ZM31.8917 22.4151V36.7011L27.3878 27.9156L27.3739 27.9226L20.4566 14.4457L11.1885 32.5098H27.8288L31.6694 40H0L20.4566 0.125008L31.8917 22.4151Z"
        fill="#1B303F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.7744 20.1302L33.6036 6.14637V0L40.7744 13.97V20.1302ZM40.7744 23.8701V26.1342L33.6036 12.1642V6.14637L40.7744 20.1302V23.8701L33.6036 9.88627L40.7744 23.8701ZM33.6036 15.9354V39.9236H40.7744V29.9054L33.6036 15.9354Z"
        fill="#1DAEFF"
      />
    </Icon>
  );
}
