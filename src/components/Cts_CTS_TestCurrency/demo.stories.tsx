
/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';

import { configProps, fieldMetadata, stateProps } from './mock';

import CtsCtsTestCurrency from './index';

const meta: Meta<typeof CtsCtsTestCurrency> = {
  title: 'CtsCtsTestCurrency',
  component: CtsCtsTestCurrency,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof CtsCtsTestCurrency>;

export const BaseCtsCtsTestCurrency: Story = args => {

  const props = {
    value: Number(configProps.value),
    hasSuggestions: configProps.hasSuggestions,
    fieldMetadata,
    getPConnect: () => {
      return {
        getStateProps: () => {
          return stateProps;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: () => {/* nothing */},
            triggerFieldChange: () => {/* nothing */}
          };
        },
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */},
        clearErrorMessages: () => {/* nothing */}
      };
    }
  };

  return (
    <>
      <CtsCtsTestCurrency {...props} {...args} />
    </>
  );
};

BaseCtsCtsTestCurrency.args = {
  label: configProps.label,
  placeholder: configProps.placeholder,
  helperText: configProps.helperText,
  showGroupSeparators: configProps.showGroupSeparators,
  allowDecimals: configProps.allowDecimals,
  currencyISOCode: configProps.currencyISOCode,
  alwaysShowISOCode: configProps.alwaysShowISOCode,
  testId: configProps.testId,
  readOnly: configProps.readOnly,
  disabled: configProps.disabled,
  required: configProps.required,
  status: configProps.status,
  hideLabel: configProps.hideLabel,
  displayMode: configProps.displayMode,
  variant: configProps.variant,
  validatemessage: configProps.validatemessage
};
