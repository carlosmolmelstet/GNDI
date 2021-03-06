import { Icon, IconProps } from '@chakra-ui/react';

export function FacebookIcon({ ...props }: IconProps) {
  return (
    <Icon
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M39 19.6192C39 8.78379 30.2696 0 19.5 0C8.73044 0 0 8.78379 0 19.6192C0 29.4117 7.13086 37.5282 16.4531 39V25.2903H11.502V19.6192H16.4531V15.2968C16.4531 10.3798 19.3643 7.66375 23.8186 7.66375C25.952 7.66375 28.1836 8.04693 28.1836 8.04693V12.8751H25.7247C23.3023 12.8751 22.5469 14.3874 22.5469 15.9389V19.6192H27.9551L27.0905 25.2903H22.5469V39C31.8691 37.5282 39 29.4117 39 19.6192Z"
        fill="#1877F2"
      />
    </Icon>
  );
}
