import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconLocalLaundryService = (props) => {
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
          d="M18 2.01L6 2C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V4C20 2.89 19.11 2.01 18 2.01ZM18 20H6L5.99 4H18V20Z"
          fill="currentColor"
        />
        <path
          d="M8 7C8.55228 7 9 6.55228 9 6C9 5.44772 8.55228 5 8 5C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7Z"
          fill="currentColor"
        />
        <path
          d="M11 7C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6C10 6.55228 10.4477 7 11 7Z"
          fill="currentColor"
        />
        <path
          d="M12 19C14.76 19 17 16.76 17 14C17 11.24 14.76 9 12 9C9.24 9 7 11.24 7 14C7 16.76 9.24 19 12 19ZM14.36 11.64C15.66 12.94 15.66 15.06 14.36 16.36C13.06 17.66 10.94 17.66 9.64 16.36L14.36 11.64Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
