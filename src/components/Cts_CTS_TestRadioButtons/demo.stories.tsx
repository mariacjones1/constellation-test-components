
/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { configProps, rawMetadata, fieldMetadata, stateProps } from './mock';

import CtsCtsTestRadioButtons from './index';

const meta: Meta<typeof CtsCtsTestRadioButtons> = {
  title: 'CtsCtsTestRadioButtons',
  component: CtsCtsTestRadioButtons,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof CtsCtsTestRadioButtons>;

export const BaseCtsCtsTestRadioButtons: Story = args => {

  const [value, setValue] = useState(configProps.value);

  const props = {
    value,
    hasSuggestions: configProps.hasSuggestions,
    fieldMetadata,
    getPConnect: () => {
      return {
        getConfigProps: () => {
          return configProps;
        },
        getStateProps: () => {
          return stateProps;
        },
        getPageReference: () => {
          return 'caseInfo.content';
        },
        getLocalizedValue: val => {
          return val;
        },
        getLocaleRuleNameFromKeys: (localeClass, localeContext, localeName) => {
          return `${localeClass}!${localeContext}!${localeName}`;
        },
        getCaseInfo: () => {
          return {
            getClassName: () => {
              return 'DIXL-MediaCo-Work-NewService';
            }
          };
        },
        getRawMetadata: () => {
          return rawMetadata;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: (propName, theValue) => {
              setValue(theValue);
            },
            triggerFieldChange: () => {/* nothing */}
          };
        },
        getValidationApi: () => {
          return {
            validate: () => {/* nothing */}
          };
        },
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      };
    }
  };

  return (
    <>
      <CtsCtsTestRadioButtons {...props} {...args} />
    </>
  );
};

BaseCtsCtsTestRadioButtons.args = {
  datasource: configProps.datasource,
  label: configProps.label,
  helperText: configProps.helperText,
  placeholder: configProps.placeholder,
  inline: configProps.inline,
  testId: configProps.testId,
  readOnly: configProps.readOnly,
  disabled: configProps.disabled,
  required: configProps.required,
  status: configProps.status,
  hideLabel: configProps.hideLabel,
  displayMode: configProps.displayMode,
  validatemessage: configProps.validatemessage
};
