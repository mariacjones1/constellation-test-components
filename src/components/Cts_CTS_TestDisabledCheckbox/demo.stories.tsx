
/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { configProps, stateProps } from './mock';

import CtsCtsTestDisabledCheckbox from './index';

const meta: Meta<typeof CtsCtsTestDisabledCheckbox> = {
  title: 'CtsCtsTestDisabledCheckbox',
  component: CtsCtsTestDisabledCheckbox,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof CtsCtsTestDisabledCheckbox>;

export const BaseCtsCtsTestDisabledCheckbox: Story = args => {

  const [value, setValue] = useState(configProps.value);

  const props = {
    value,
    additionalProps: configProps.additionalProps,
    getPConnect: () => {
      return {
        getStateProps: () => {
          return stateProps;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: (propName, theValue) => {
              setValue(theValue);
            },
            triggerFieldChange: () => { /* nothing */}
          };
        },
        getValidationApi: () => {
          return {
            validate: () => { /* nothing */}
          };
        }
      };
    }
  };

  return (
    <>
      <CtsCtsTestDisabledCheckbox {...props} {...args} />
    </>
  );
};

BaseCtsCtsTestDisabledCheckbox.args = {
  label: configProps.label,
  helperText: configProps.helperText,
  caption: configProps.caption,
  testId: configProps.testId,
  readOnly: configProps.readOnly,
  disabled: configProps.disabled,
  required: configProps.required,
  status: configProps.status,
  hideLabel: configProps.hideLabel,
  trueLabel: configProps.trueLabel,
  falseLabel: configProps.falseLabel,
  displayMode: configProps.displayMode,
  variant: configProps.variant,
  validatemessage: configProps.validatemessage
};
