import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconWifiProtectedSetup = (props) => {
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
          d="M16.71 5.29L19 3H11V11L13.3 8.7C15.27 10.16 16.55 12.48 16.55 15.12C16.55 16.43 16.23 17.66 15.67 18.75C18 17.23 19.55 14.61 19.55 11.62C19.55 9.1 18.44 6.85 16.71 5.29Z"
          fill="currentColor"
        />
        <path
          d="M7.45999 8.88C7.45999 7.57 7.77999 6.34 8.33999 5.25C5.99999 6.77 4.45999 9.39 4.45999 12.38C4.45999 14.9 5.55999 17.15 7.29999 18.71L4.99999 21H13V13L10.7 15.3C8.73999 13.84 7.45999 11.52 7.45999 8.88Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
