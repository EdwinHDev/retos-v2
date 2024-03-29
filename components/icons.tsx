import * as React from "react";
import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 24 } = props;

  return (
    <svg
      height={height}
      viewBox="0 0 56 59"
      width={width}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M36.4338 6.08866H32.8555C32.4452 6.08862 32.0453 5.95872 31.7133 5.71754C31.3813 5.47636 31.1342 5.1363 31.0073 4.74606L29.9016 1.34266C29.7748 0.952395 29.5277 0.612295 29.1957 0.371101C28.8638 0.129906 28.4639 0 28.0536 0C27.6433 0 27.2435 0.129906 26.9115 0.371101C26.5795 0.612295 26.3324 0.952395 26.2056 1.34266L25.0998 4.74606C24.9729 5.1363 24.7258 5.47637 24.3938 5.71755C24.0619 5.95873 23.662 6.08863 23.2517 6.08866H19.6733C19.263 6.08878 18.8634 6.21875 18.5315 6.45995C18.1996 6.70114 17.9526 7.04118 17.8258 7.43135C17.699 7.82153 17.699 8.24182 17.8257 8.63202C17.9524 9.02222 18.1994 9.3623 18.5312 9.60355L21.4263 11.7068C21.7582 11.948 22.0053 12.2881 22.1321 12.6783C22.2589 13.0686 22.2589 13.4889 22.1321 13.8792L21.0264 17.2825C20.8996 17.6727 20.8996 18.0931 21.0264 18.4833C21.1531 18.8736 21.4002 19.2137 21.7322 19.4549C22.0641 19.6961 22.4639 19.8261 22.8743 19.8261C23.2846 19.8261 23.6844 19.6962 24.0164 19.4551L26.9113 17.3516C27.2433 17.1105 27.6432 16.9806 28.0535 16.9806C28.4638 16.9806 28.8637 17.1105 29.1957 17.3516L32.0907 19.4551C32.4227 19.6962 32.8225 19.8261 33.2328 19.8261C33.6432 19.8261 34.043 19.6961 34.3749 19.4549C34.7069 19.2137 34.954 18.8736 35.0808 18.4833C35.2075 18.0931 35.2075 17.6727 35.0807 17.2825L33.9755 13.8796C33.8487 13.4893 33.8487 13.069 33.9755 12.6787C34.1023 12.2885 34.3494 11.9484 34.6813 11.7072L37.5755 9.60355C37.9073 9.36232 38.1542 9.02227 38.281 8.63211C38.4077 8.24195 38.4077 7.8217 38.2809 7.43154C38.1542 7.04139 37.9073 6.70135 37.5755 6.46012C37.2437 6.2189 36.844 6.08887 36.4338 6.08866Z" />
      <path d="M22.8255 25.0497H32.7925C33.1182 25.0497 33.4407 25.1139 33.7416 25.2385C34.0424 25.3632 34.3158 25.5458 34.5461 25.7761C34.7764 26.0064 34.9591 26.2798 35.0837 26.5807C35.2084 26.8816 35.2725 27.2041 35.2725 27.5297V56.2469C35.2725 56.9045 35.0113 57.5352 34.5463 58.0002C34.0813 58.4652 33.4506 58.7264 32.793 58.7264H22.8266C22.1689 58.7264 21.5381 58.4652 21.073 58.0001C20.6079 57.535 20.3466 56.9042 20.3466 56.2464V27.5292C20.3466 26.8717 20.6078 26.2412 21.0726 25.7762C21.5375 25.3112 22.168 25.0499 22.8255 25.0497Z" />
      <path d="M2.479 33.7578H12.4455C12.7712 33.7577 13.0936 33.8218 13.3945 33.9464C13.6954 34.0709 13.9688 34.2536 14.1991 34.4838C14.4294 34.7141 14.6121 34.9874 14.7367 35.2883C14.8613 35.5891 14.9255 35.9116 14.9255 36.2373V56.2472C14.9255 56.905 14.6642 57.5358 14.1991 58.0009C13.734 58.466 13.1032 58.7273 12.4455 58.7273H2.48C1.82226 58.7273 1.19147 58.466 0.726375 58.0009C0.261285 57.5358 0 56.905 0 56.2472V36.2373C-1.33687e-08 35.5797 0.261164 34.9491 0.726052 34.4842C1.19094 34.0192 1.82148 33.7579 2.479 33.7578Z" />
      <path d="M43.1733 33.7578H53.1401C53.7978 33.7578 54.4286 34.019 54.8937 34.4841C55.3588 34.9492 55.6201 35.58 55.6201 36.2378V56.247C55.6201 56.9047 55.3588 57.5355 54.8937 58.0006C54.4286 58.4657 53.7978 58.727 53.1401 58.727H43.1743C42.5166 58.727 41.8858 58.4657 41.4207 58.0006C40.9556 57.5355 40.6943 56.9047 40.6943 56.247V36.2369C40.6944 35.5795 40.9556 34.949 41.4205 34.4841C41.8853 34.0191 42.5158 33.7579 43.1733 33.7578Z" />
    </svg>
  );
};

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 161 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-black dark:fill-white"
        d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
      />
    </svg>
  );
};

export const LogoRetos: React.FC<IconSvgProps> = (props) => {
  const { width, height = 32 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 56 59"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M36.4338 6.08866H32.8555C32.4452 6.08862 32.0453 5.95872 31.7133 5.71754C31.3813 5.47636 31.1342 5.1363 31.0073 4.74606L29.9016 1.34266C29.7748 0.952395 29.5277 0.612295 29.1957 0.371101C28.8638 0.129906 28.4639 0 28.0536 0C27.6433 0 27.2435 0.129906 26.9115 0.371101C26.5795 0.612295 26.3324 0.952395 26.2056 1.34266L25.0998 4.74606C24.9729 5.1363 24.7258 5.47637 24.3938 5.71755C24.0619 5.95873 23.662 6.08863 23.2517 6.08866H19.6733C19.263 6.08878 18.8634 6.21875 18.5315 6.45995C18.1996 6.70114 17.9526 7.04118 17.8258 7.43135C17.699 7.82153 17.699 8.24182 17.8257 8.63202C17.9524 9.02222 18.1994 9.3623 18.5312 9.60355L21.4263 11.7068C21.7582 11.948 22.0053 12.2881 22.1321 12.6783C22.2589 13.0686 22.2589 13.4889 22.1321 13.8792L21.0264 17.2825C20.8996 17.6727 20.8996 18.0931 21.0264 18.4833C21.1531 18.8736 21.4002 19.2137 21.7322 19.4549C22.0641 19.6961 22.4639 19.8261 22.8743 19.8261C23.2846 19.8261 23.6844 19.6962 24.0164 19.4551L26.9113 17.3516C27.2433 17.1105 27.6432 16.9806 28.0535 16.9806C28.4638 16.9806 28.8637 17.1105 29.1957 17.3516L32.0907 19.4551C32.4227 19.6962 32.8225 19.8261 33.2328 19.8261C33.6432 19.8261 34.043 19.6961 34.3749 19.4549C34.7069 19.2137 34.954 18.8736 35.0808 18.4833C35.2075 18.0931 35.2075 17.6727 35.0807 17.2825L33.9755 13.8796C33.8487 13.4893 33.8487 13.069 33.9755 12.6787C34.1023 12.2885 34.3494 11.9484 34.6813 11.7072L37.5755 9.60355C37.9073 9.36232 38.1542 9.02227 38.281 8.63211C38.4077 8.24195 38.4077 7.8217 38.2809 7.43154C38.1542 7.04139 37.9073 6.70135 37.5755 6.46012C37.2437 6.2189 36.844 6.08887 36.4338 6.08866Z"
        fill="#db2777"
      />
      <path
        d="M22.8255 25.0497H32.7925C33.1182 25.0497 33.4407 25.1139 33.7416 25.2385C34.0424 25.3632 34.3158 25.5458 34.5461 25.7761C34.7764 26.0064 34.9591 26.2798 35.0837 26.5807C35.2084 26.8816 35.2725 27.2041 35.2725 27.5297V56.2469C35.2725 56.9045 35.0113 57.5352 34.5463 58.0002C34.0813 58.4652 33.4506 58.7264 32.793 58.7264H22.8266C22.1689 58.7264 21.5381 58.4652 21.073 58.0001C20.6079 57.535 20.3466 56.9042 20.3466 56.2464V27.5292C20.3466 26.8717 20.6078 26.2412 21.0726 25.7762C21.5375 25.3112 22.168 25.0499 22.8255 25.0497Z"
        fill="#db2777"
      />
      <path
        d="M2.479 33.7578H12.4455C12.7712 33.7577 13.0936 33.8218 13.3945 33.9464C13.6954 34.0709 13.9688 34.2536 14.1991 34.4838C14.4294 34.7141 14.6121 34.9874 14.7367 35.2883C14.8613 35.5891 14.9255 35.9116 14.9255 36.2373V56.2472C14.9255 56.905 14.6642 57.5358 14.1991 58.0009C13.734 58.466 13.1032 58.7273 12.4455 58.7273H2.48C1.82226 58.7273 1.19147 58.466 0.726375 58.0009C0.261285 57.5358 0 56.905 0 56.2472V36.2373C-1.33687e-08 35.5797 0.261164 34.9491 0.726052 34.4842C1.19094 34.0192 1.82148 33.7579 2.479 33.7578Z"
        fill="#db2777"
      />
      <path
        d="M43.1733 33.7578H53.1401C53.7978 33.7578 54.4286 34.019 54.8937 34.4841C55.3588 34.9492 55.6201 35.58 55.6201 36.2378V56.247C55.6201 56.9047 55.3588 57.5355 54.8937 58.0006C54.4286 58.4657 53.7978 58.727 53.1401 58.727H43.1743C42.5166 58.727 41.8858 58.4657 41.4207 58.0006C40.9556 57.5355 40.6943 56.9047 40.6943 56.247V36.2369C40.6944 35.5795 40.9556 34.949 41.4205 34.4841C41.8853 34.0191 42.5158 33.7579 43.1733 33.7578Z"
        fill="#db2777"
      />
    </svg>
  );
};

export const EditIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 20 } = props;

  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height}
      role="presentation"
      viewBox="0 0 20 20"
      width={width}
      stroke="currentColor"
      {...props}
    >
      <path
        d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M2.5 18.3333H17.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const DeleteIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 20 } = props;

  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height}
      role="presentation"
      viewBox="0 0 20 20"
      width={width}
      className="stroke-current hover:!stroke-danger-500"
      {...props}
    >
      <path
        d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M8.60834 13.75H11.3833"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.91669 10.4167H12.0834"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const EyeIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 20 } = props;

  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height}
      role="presentation"
      viewBox="0 0 20 20"
      width={width}
      {...props}
    >
      <path
        d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const GoogleIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 20 } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.02326 12C5.02326 11.2205 5.15553 10.4732 5.39163 9.77232L1.25916 6.68396C0.453767 8.28432 0 10.0876 0 12C0 13.9107 0.453209 15.7129 1.25749 17.3121L5.38772 14.2178C5.15386 13.5201 5.02326 12.7756 5.02326 12Z"
        fill="#FBBC05"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2791 4.90909C14.0093 4.90909 15.5721 5.50909 16.8 6.49091L20.3721 3C18.1953 1.14545 15.4046 0 12.2791 0C7.4266 0 3.25618 2.71582 1.25916 6.684L5.39162 9.77236C6.34381 6.94364 9.05804 4.90909 12.2791 4.90909Z"
        fill="#EB4335"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2791 19.0909C9.05804 19.0909 6.34381 17.0564 5.39162 14.2277L1.25916 17.3155C3.25618 21.2842 7.4266 24 12.2791 24C15.274 24 18.1334 22.9593 20.2794 21.0093L16.3568 18.0415C15.25 18.7238 13.8564 19.0909 12.2791 19.0909Z"
        fill="#34A853"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12.0001C24 11.291 23.8884 10.5273 23.7209 9.81824H12.2791V14.4546H18.8651C18.5358 16.0353 17.6395 17.2506 16.3569 18.0415L20.2795 21.0093C22.5338 18.9617 24 15.9115 24 12.0001Z"
        fill="#4285F4"
      />
    </svg>
  );
};

export const PlusIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 24 } = props;

  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={width}
      role="presentation"
      viewBox="0 0 24 24"
      width={height}
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M6 12h12" />
        <path d="M12 18V6" />
      </g>
    </svg>
  );
};

export const VerticalDotsIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 24 } = props;

  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={width}
      role="presentation"
      viewBox="0 0 24 24"
      width={height}
      {...props}
    >
      <path
        d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ChevronDownIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 24 } = props;

  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height}
      role="presentation"
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const UserIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 24 } = props;

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={height}
      role="presentation"
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <path
        d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
        fill="currentColor"
      ></path>
      <path
        d="M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const MailIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 24 } = props;

  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height}
      role="presentation"
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <path
        d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const AnnounceIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 24 } = props;

  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={height}
      role="presentation"
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2ZM14 15.25H7C6.59 15.25 6.25 14.91 6.25 14.5C6.25 14.09 6.59 13.75 7 13.75H14C14.41 13.75 14.75 14.09 14.75 14.5C14.75 14.91 14.41 15.25 14 15.25ZM17 10.25H7C6.59 10.25 6.25 9.91 6.25 9.5C6.25 9.09 6.59 8.75 7 8.75H17C17.41 8.75 17.75 9.09 17.75 9.5C17.75 9.91 17.41 10.25 17 10.25Z" />
    </svg>
  );
};

export const AddIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 24 } = props;

  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      height={height}
      role="presentation"
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <path
        d="M6 12H18"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18V6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MinusIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 24 } = props;

  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      height={height}
      role="presentation"
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <path
        d="M6 12H18"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ViewIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 24 } = props;

  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={height}
      role="presentation"
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <path d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z" />
      <path d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z" />
    </svg>
  );
};

export const TopIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 24 } = props;

  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={height}
      role="presentation"
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <path d="M21.2502 18.4701L19.6002 18.8601C19.2302 18.9501 18.9402 19.2301 18.8602 19.6001L18.5102 21.0701C18.3202 21.8701 17.3002 22.1201 16.7702 21.4901L13.7802 18.0501C13.5402 17.7701 13.6702 17.3301 14.0302 17.2401C15.8002 16.8101 17.3902 15.8201 18.5602 14.4101C18.7502 14.1801 19.0902 14.1501 19.3002 14.3601L21.5202 16.5801C22.2802 17.3401 22.0102 18.2901 21.2502 18.4701Z" />
      <path d="M2.69919 18.4701L4.34919 18.8601C4.71919 18.9501 5.00919 19.2301 5.08919 19.6001L5.43919 21.0701C5.62919 21.8701 6.64919 22.1201 7.17919 21.4901L10.1692 18.0501C10.4092 17.7701 10.2792 17.3301 9.91919 17.2401C8.14919 16.8101 6.55919 15.8201 5.38919 14.4101C5.19919 14.1801 4.85919 14.1501 4.64919 14.3601L2.42919 16.5801C1.66919 17.3401 1.93919 18.2901 2.69919 18.4701Z" />
      <path d="M12 2C8.13 2 5 5.13 5 9C5 10.45 5.43 11.78 6.17 12.89C7.25 14.49 8.96 15.62 10.95 15.91C11.29 15.97 11.64 16 12 16C12.36 16 12.71 15.97 13.05 15.91C15.04 15.62 16.75 14.49 17.83 12.89C18.57 11.78 19 10.45 19 9C19 5.13 15.87 2 12 2ZM15.06 8.78L14.23 9.61C14.09 9.75 14.01 10.02 14.06 10.22L14.3 11.25C14.49 12.06 14.06 12.38 13.34 11.95L12.34 11.36C12.16 11.25 11.86 11.25 11.68 11.36L10.68 11.95C9.96 12.37 9.53 12.06 9.72 11.25L9.96 10.22C10 10.03 9.93 9.75 9.79 9.61L8.94 8.78C8.45 8.29 8.61 7.8 9.29 7.69L10.36 7.51C10.54 7.48 10.75 7.32 10.83 7.16L11.42 5.98C11.74 5.34 12.26 5.34 12.58 5.98L13.17 7.16C13.25 7.32 13.46 7.48 13.65 7.51L14.72 7.69C15.39 7.8 15.55 8.29 15.06 8.78Z" />
    </svg>
  );
};

export const ImageIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 24 } = props;

  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      height={height}
      role="presentation"
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ImageAddIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 24 } = props;

  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      height={height}
      role="presentation"
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <path
        d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15.75 5H21.25" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18.5 7.75V2.25" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CloseIcon: React.FC<IconSvgProps> = (props) => {
  const { width, height = 20 } = props;

  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      height={height}
      role="presentation"
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <path
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.16998 14.83L14.83 9.17004"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.83 14.83L9.16998 9.17004"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
