import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconDepartureBoard = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 18C6.32843 18 7 17.3284 7 16.5C7 15.6716 6.32843 15 5.5 15C4.67157 15 4 15.6716 4 16.5C4 17.3284 4.67157 18 5.5 18Z"
          fill="currentColor"
        />
        <path
          d="M12.5 18C13.3284 18 14 17.3284 14 16.5C14 15.6716 13.3284 15 12.5 15C11.6716 15 11 15.6716 11 16.5C11 17.3284 11.6716 18 12.5 18Z"
          fill="currentColor"
        />
        <path
          d="M16 1C13.61 1 11.51 2.2 10.25 4.02C9.84 4.01 9.43 4 9 4C4.58 4 1 4.5 1 8V18C1 18.88 1.39 19.67 2 20.22V22C2 22.55 2.45 23 3 23H4C4.55 23 5 22.55 5 22V21H13V22C13 22.55 13.45 23 14 23H15C15.55 23 16 22.55 16 22V20.22C16.61 19.67 17 18.88 17 18V14.92C20.39 14.43 23 11.53 23 8C23 4.13 19.87 1 16 1ZM9 6H9.29C9.2 6.32 9.13 6.66 9.08 6.99H3.34C3.89 6.46 5.31 6 9 6ZM3 8.99H9.08C9.24 10.1 9.65 11.12 10.26 12H3V8.99ZM15 18C15 18.37 14.79 18.62 14.66 18.73L14.37 19H3.63L3.34 18.73C3.21 18.62 3 18.37 3 18V14H12.41C13.19 14.47 14.06 14.79 15 14.92V18ZM16 13C13.24 13 11 10.76 11 8C11 5.24 13.24 3 16 3C18.76 3 21 5.24 21 8C21 10.76 18.76 13 16 13ZM16.5 4H15V9L18.62 11.16L19.37 9.93L16.5 8.25V4Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
