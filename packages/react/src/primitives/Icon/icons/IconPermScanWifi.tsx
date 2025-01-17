import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconPermScanWifi = (props) => {
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
          d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22L24 7.25C20.85 4.87 17.05 3 12 3ZM2.92 7.65C5.8 5.85 8.74 5 12 5C15.25 5 18.18 5.85 21.08 7.67L12 18.83L2.92 7.65ZM11 10H13V16H11V10ZM11 6H13V8H11V6Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
