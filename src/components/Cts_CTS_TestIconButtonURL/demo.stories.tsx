
/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';

import CtsCtsTestIconButtonUrl from './index';
import { stateProps, configProps } from './mock';

const meta: Meta<typeof CtsCtsTestIconButtonUrl> = {
  title: 'CtsCtsTestIconButtonUrl',
  component: CtsCtsTestIconButtonUrl,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof CtsCtsTestIconButtonUrl>;

if (!window.PCore) {
  window.PCore = {};
}

const statelistData = {
  data: [
    {
      pyLabel: 'Massachusetts',
      pyStateCode: 'MA'
    },
    {
      pyLabel: 'Rhode Island',
      pyStateCode: 'RI'
    },
    {
      pyLabel: 'Connecticut',
      pyStateCode: 'CT'
    }
  ]
};

window.PCore.getDataPageUtils = () => {
  return {
    getData: () => {
      return new Promise(resolve => {
        resolve(statelistData);
      });
    },
    getDataAsync: () => {
      return new Promise(resolve => {
        resolve(statelistData);
      });
    }
  };
};

export const BaseCtsCtsTestIconButtonUrl: Story = args => {

  const props = {
    countryCode: configProps.countryCode,
    getPConnect: () => {
      return {
        getValue: value => {
          return value;
        },
        getContextName: () => {
          return 'app/primary_1';
        },
        getLocalizedValue: value => {
          return value;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: () => {
              /* nothing */
            },
            triggerFieldChange: () => {
              /* nothing */
            }
          };
        },
        ignoreSuggestion: () => {
          /* nothing */
        },
        acceptSuggestion: () => {
          /* nothing */
        },
        setInheritedProps: () => {
          /* nothing */
        },
        resolveConfigProps: () => {
          /* nothing */
        }
      };
    }
  };

  return (
    <>
      <CtsCtsTestIconButtonUrl {...props} {...args} />
    </>
  );
};

BaseCtsCtsTestIconButtonUrl.args = {
  countryCode: configProps.countryCode
};
