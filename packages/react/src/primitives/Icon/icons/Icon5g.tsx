import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const Icon5g = (props) => {
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
          d="M16.5 13H19V15H14V9H21C21 7.9 20.1 7 19 7H14C12.9 7 12 7.9 12 9V15C12 16.1 12.9 17 14 17H19C20.1 17 21 16.1 21 15V11H16.5V13Z"
          fill="currentColor"
        />
        <path
          d="M3 13H8V15H3V17H8C9.1 17 10 16.1 10 15V13C10 11.9 9.1 11 8 11H5V9H10V7H3V13Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
