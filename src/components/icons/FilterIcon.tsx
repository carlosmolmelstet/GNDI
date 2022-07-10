import { Icon, IconProps } from '@chakra-ui/react';

export function FilterIcon({ ...props }: IconProps) {
  return (
    <Icon
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 1H1L9 10.46V17L13 19V10.46L21 1Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}
