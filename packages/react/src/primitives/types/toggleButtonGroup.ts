import * as React from 'react';

import { AriaProps } from './base';
import { FlexProps } from './flex';
import { ToggleButtonProps } from './toggleButton';

export interface ToggleButtonGroupProps
  extends FlexProps,
    Pick<ToggleButtonProps, 'size' | 'variation'> {
  children: React.ReactNode;
  isExclusive?: boolean;
  value: string | string[];
  onChange: (value: string | string[]) => void;
}
