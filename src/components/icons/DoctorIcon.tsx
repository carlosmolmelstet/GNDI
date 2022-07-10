import { Icon, IconProps } from '@chakra-ui/react';

export function DoctorIcon({ ...props }: IconProps) {
  return (
    <Icon
      width="123"
      height="123"
      viewBox="0 0 123 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_9_5481)">
        <path
          d="M84.58 103.47C85.3894 103.468 86.1811 103.706 86.855 104.155C87.5289 104.603 88.0547 105.241 88.3658 105.988C88.6769 106.735 88.7593 107.558 88.6026 108.352C88.4459 109.146 88.0572 109.876 87.4856 110.449C86.914 111.022 86.1853 111.412 85.3916 111.571C84.5979 111.729 83.7751 111.649 83.0271 111.34C82.2792 111.031 81.6398 110.506 81.19 109.834C80.7401 109.161 80.5 108.37 80.5 107.56C80.4987 107.024 80.6032 106.492 80.8077 105.996C81.0121 105.5 81.3125 105.049 81.6915 104.669C82.0705 104.289 82.5207 103.987 83.0163 103.782C83.512 103.576 84.0434 103.47 84.58 103.47ZM88.19 42.8502C89.074 43.0707 89.8526 43.5944 90.39 44.3302C91.47 45.7202 91.77 47.9702 91.47 50.3302C91.1963 52.5338 90.4418 54.6503 89.26 56.5302C87.95 58.5302 86.26 59.8202 84.26 59.6902C84.12 66.2002 80.93 69.1902 76.77 73.1002L75.18 74.6102L74.64 75.1202L74.77 75.2102C74.268 75.611 73.7402 75.9785 73.19 76.3102C71.784 77.3571 70.2304 78.1895 68.58 78.7802C66.3802 79.5394 64.0671 79.9182 61.74 79.9002C59.3249 79.9374 56.9209 79.5655 54.63 78.8002L53.63 78.4402C52.3181 78.0474 51.0614 77.4896 49.89 76.7802L49.39 76.4702C48.8346 78.1466 48.0756 79.7486 47.13 81.2402L62.65 92.0502L77.23 79.9002C76.3228 78.48 75.575 76.9642 75 75.3802C81.43 79.9502 82.82 89.4902 82.61 97.1902C82.61 98.1902 82.55 98.4502 82.53 98.7802C80.9716 99.1273 79.5352 99.8869 78.3709 100.979C77.2066 102.072 76.3572 103.457 75.9116 104.99C75.4659 106.523 75.4404 108.148 75.8377 109.694C76.235 111.241 77.0405 112.652 78.17 113.78C79.6591 115.399 81.7182 116.376 83.9137 116.507C86.1091 116.637 88.2695 115.911 89.94 114.48C91.0035 113.649 91.8641 112.587 92.4566 111.374C93.0491 110.162 93.3581 108.83 93.36 107.48C93.3604 106.075 92.9877 104.694 92.28 103.48C90.78 100.88 89.15 100.12 86.66 98.8802C86.49 98.7902 86.66 98.4102 86.66 97.3502C86.8804 92.6102 86.3882 87.8641 85.2 83.2702C86.2899 83.8388 87.4276 84.3106 88.6 84.6802C97.5 86.7802 108.44 87.6802 112.36 89.8802C114.303 90.9391 116.006 92.3897 117.36 94.1402C120.83 98.7202 121.12 111.9 122.36 117.5C122.05 120.78 120.2 122.66 116.54 122.94H5.82C2.17 122.6 0.31 120.71 0 117.44C1.26 111.84 1.56 98.6502 5 94.0802C6.35943 92.3155 8.08148 90.8628 10.05 89.8202C15.62 86.7202 29.27 85.8802 38.35 83.3602C37.4952 85.9514 36.9645 88.6385 36.77 91.3602C35.77 92.1302 33.13 93.0302 32.3 94.0202C30.8543 95.7472 29.5627 97.5976 28.44 99.5502C28.2637 99.854 28.1706 100.199 28.17 100.55C28.17 100.83 28.46 101.12 28.34 101.36L28.15 101.73C25.55 106.73 23.86 112.34 24.66 114.73C24.8754 115.299 25.2298 115.805 25.691 116.201C26.1522 116.598 26.7053 116.872 27.3 117C28.3281 117.271 29.3868 117.409 30.45 117.41C30.76 117.41 31.08 117.41 31.39 117.41C31.549 117.558 31.7234 117.689 31.91 117.8C32.1232 117.927 32.3475 118.034 32.58 118.12C32.8706 118.231 33.1789 118.289 33.49 118.29C33.8222 118.29 34.151 118.224 34.4575 118.096C34.764 117.968 35.0421 117.781 35.2755 117.544C35.509 117.308 35.6933 117.028 35.8176 116.72C35.942 116.412 36.004 116.082 36 115.75C35.9922 115.405 35.9139 115.064 35.77 114.75C35.5776 114.276 35.2487 113.87 34.8249 113.583C34.4011 113.297 33.9016 113.142 33.39 113.14C32.47 113.14 31.16 113.6 31.16 114.52V114.58H30.52C29.7345 114.587 28.9515 114.493 28.19 114.3C27.74 114.18 27.48 114.01 27.42 113.82C26.84 112.14 28.42 107.49 30.71 102.99L31 102.44C31.4241 102.27 31.777 101.959 32 101.56C32.9898 99.8231 34.1309 98.1767 35.41 96.6402C36.3596 95.7706 37.5281 95.176 38.79 94.9202H39C39.6286 95.3721 40.2054 95.8919 40.72 96.4702C42.0849 98.0117 43.291 99.6868 44.32 101.47C44.55 101.88 45.11 101.97 45.32 102.36C47.97 106.64 49.46 111.55 49.1 113.42C49.02 113.86 48.66 114.12 48.1 114.3C47.2458 114.534 46.3654 114.658 45.48 114.67C45.4506 114.605 45.4172 114.541 45.38 114.48C45.38 113.56 44.06 113.13 43.14 113.1C42.6284 113.102 42.1289 113.257 41.7051 113.543C41.2813 113.83 40.9524 114.236 40.76 114.71C40.6203 115.026 40.5423 115.365 40.53 115.71C40.53 116.376 40.7944 117.014 41.2652 117.485C41.7359 117.956 42.3743 118.22 43.04 118.22C43.3544 118.219 43.666 118.161 43.96 118.05C44.1893 117.964 44.4103 117.857 44.62 117.73C44.7455 117.655 44.8657 117.571 44.98 117.48H45.34C46.5773 117.506 47.8113 117.345 49 117C49.7256 116.825 50.3851 116.444 50.8995 115.903C51.4138 115.362 51.7612 114.684 51.9 113.95C52.34 111.51 50.57 106.13 47.96 101.25C48.0691 100.994 48.1236 100.718 48.12 100.44C48.1106 100.089 48.0144 99.7453 47.84 99.4402C46.6623 97.4111 45.2891 95.502 43.74 93.7402C42.91 92.8102 41.08 92.5402 40.89 91.3002C40.39 88.0702 41.79 84.0702 43.89 80.5902C44.4393 79.9039 44.9278 79.1712 45.35 78.4002L45.67 77.9602C46.6209 77.0002 47.7913 76.2863 49.08 75.8802C48.5933 75.5135 48.1033 75.1135 47.61 74.6802L46.07 73.3002L45.97 73.2102C41.97 69.7302 38.56 66.7802 37.97 59.6502C35.19 59.4102 33.22 56.7702 32.25 53.6502C31.7408 51.9867 31.5209 50.2481 31.6 48.5102C31.6125 46.8694 32.1407 45.2741 33.11 43.9502C33.2966 43.712 33.5078 43.4941 33.74 43.3002L33.6 43.2102C32.96 35.2102 34.83 21.3902 26.17 18.7702C42.51 -1.54981 60.51 -5.26981 75.6 7.13019C91.28 8.00019 98.85 30.6402 88.19 42.8502ZM42.19 37.8502C41.4236 40.3166 41.3544 42.9469 41.99 45.4502C42.096 45.7947 42.0876 46.1642 41.9663 46.5036C41.8449 46.843 41.617 47.134 41.3166 47.3331C41.0161 47.5323 40.6594 47.6289 40.2995 47.6085C39.9397 47.5882 39.596 47.4519 39.32 47.2202C37.32 45.5202 36.11 45.3602 35.59 45.9802C35.0905 46.7546 34.8297 47.6587 34.84 48.5802C34.7786 49.9329 34.9512 51.2861 35.35 52.5802C36.03 54.8102 37.35 56.6402 38.93 56.1802C39.0846 56.1277 39.2467 56.1007 39.41 56.1002C39.6293 56.0949 39.8475 56.1328 40.0522 56.2119C40.2568 56.2909 40.4439 56.4095 40.6027 56.5609C40.7615 56.7123 40.8889 56.8934 40.9777 57.0941C41.0665 57.2947 41.1148 57.5109 41.12 57.7302C41.29 64.7302 44.36 67.4002 48.12 70.6302L48.22 70.7102L49.82 72.1102C51.5062 73.645 53.4861 74.822 55.64 75.5702C57.0755 76.0534 58.5683 76.3459 60.08 76.4402C61.199 76.4619 62.3182 76.4084 63.43 76.2802C64.9391 76.1201 66.4292 75.8153 67.88 75.3702C69.7136 74.6278 71.3823 73.5301 72.79 72.1402L74.41 70.6002C78.41 66.8602 81.33 64.1002 80.77 57.3902C80.7436 57.0772 80.8061 56.763 80.9502 56.4839C81.0943 56.2048 81.3142 55.9719 81.5847 55.8122C81.8552 55.6524 82.1652 55.5721 82.4793 55.5806C82.7933 55.5891 83.0986 55.686 83.36 55.8602C84.49 56.6102 85.61 55.8602 86.44 54.6202C87.348 53.1705 87.925 51.5384 88.13 49.8402C88.4038 48.6547 88.2589 47.411 87.72 46.3202C87.32 45.8002 86.25 46.0102 84.19 47.5802C83.9291 47.8027 83.606 47.9394 83.2646 47.9719C82.9232 48.0044 82.5801 47.931 82.282 47.7616C81.9838 47.5923 81.7449 47.3353 81.5979 47.0256C81.4508 46.7158 81.4027 46.3683 81.46 46.0302C82.92 37.4902 82.19 32.2102 80.32 28.6902C78.69 25.6902 76.09 23.8402 73.32 22.3702C67.17 27.0702 62.83 27.6002 58.51 28.1402C54.94 28.5802 51.39 29.0202 46.68 32.2702C44.6288 33.6011 43.0612 35.5579 42.21 37.8502H42.19Z"
          fill="#FF9F00"
        />
      </g>
      <defs>
        <clipPath id="clip0_9_5481">
          <rect width="122.47" height="122.88" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
}