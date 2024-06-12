
import { useState, useEffect } from 'react';
import {
  CurrencyInput as CosmosCurrency,
  CurrencyDisplay,
  NumberDisplay,
  FieldValueList,
  Text,
  useAfterInitialEffect,
  withConfiguration
} from '@pega/cosmos-react-core';


import type { PConnFieldProps } from './PConnProps';

// includes in bundle
import handleEvent from './event-utils';
import { suggestionsHandler } from './suggestions-handler';

import StyledCtsCtsTestCurrencyWrapper from './styles';

// interface for props
interface CtsCtsTestCurrencyProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here
  displayAsStatus?: boolean;
  isTableFormatter?: boolean;
  hasSuggestions?: boolean;
  variant?: any;
  formatter: string;
  decimalPrecision: string;
  allowDecimals: boolean;
  currencyISOCode: string;
  alwaysShowISOCode: boolean;
  additionalProps: any;
  showGroupSeparators: boolean;
  currencyDisplay: 'symbol' | 'code' | 'name' | undefined;
  negative: 'minus-sign' | 'parentheses' | undefined;
  notation: 'standard' | 'compact' | undefined;
  currencyDecimalPrecision: string;
}

// interface for StateProps object
interface StateProps {
  value: string;
  hasSuggestions: boolean;
}

const formatValue = (value: any) => {
  if (!value && value !== 0) return '';
  const [integer, decimal = ''] = value.toString().split('.');
  return `${integer}.${decimal.padEnd(3, '0')}`;
};


// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
function CtsCtsTestCurrency(props: CtsCtsTestCurrencyProps) {
  const {
    getPConnect,
    value = 0,
    placeholder,
    validatemessage,
    label,
    hideLabel = false,
    helperText,
    testId,
    allowDecimals = true,
    currencyISOCode = 'USD',
    alwaysShowISOCode = false,
    displayMode,
    additionalProps = {},
    variant,
    formatter = 'defaultCurrency',
    negative = 'minus-sign',
    notation = 'standard',
    isTableFormatter = false,
    hasSuggestions = false
  } = props;
  let { currencyDisplay = 'symbol' } = props;
  const pConn = getPConnect();
  const actions = pConn.getActionsApi();
  const stateProps = pConn.getStateProps() as StateProps;
  const propName: string = stateProps.value;
  const [currencyValue, setCurrencyValue] = useState(() => formatValue(value));

  let { readOnly = false, required = false, disabled = false } = props;
  let { showGroupSeparators = false } = props;

  [readOnly, required, disabled] = [readOnly, required, disabled].map(
    (prop) => prop === true || (typeof prop === 'string' && prop === 'true')
  );

  const [status, setStatus] = useState(hasSuggestions ? 'pending' : undefined);

  useEffect(() => {
    if (validatemessage !== '') {
      setStatus('error');
    }
    if (hasSuggestions) {
      setStatus('pending');
    } else if (!hasSuggestions && status !== 'success') {
      setStatus(validatemessage !== '' ? 'error' : undefined);
    }
  }, [validatemessage, hasSuggestions, status]);

  useAfterInitialEffect(() => {
    setCurrencyValue(formatValue(value));
  }, [value]);

  const { decimalPrecision, currencyDecimalPrecision = 'auto' } = props;
  let noOfDecimals: number = parseInt(decimalPrecision, 10);
  if (Number.isNaN(noOfDecimals)) noOfDecimals = 0;
  let noOfFractionDigits =
    currencyDecimalPrecision === 'auto' ? undefined : parseInt(currencyDecimalPrecision, 10);

  if (
    displayMode === 'LABELS_LEFT' ||
    displayMode === 'STACKED_LARGE_VAL' ||
    displayMode === 'DISPLAY_ONLY'
  ) {
    let displayComp;
    // let { showGroupSeparators = false } = props;
    if (displayMode === 'LABELS_LEFT' && isTableFormatter) {
      noOfFractionDigits = undefined;
      showGroupSeparators = true;
      if (formatter === 'Currency-Code') {
        currencyDisplay = 'code';
      }
    }

    const displayValue = !value && value !== 0 ? undefined : Number(currencyValue);


    displayComp = (
      <CurrencyDisplay
        value={displayValue}
        currencyISOCode={currencyISOCode}
        formattingOptions={{
          groupSeparators: true,
          fractionDigits: noOfFractionDigits,
          currency: currencyDisplay,
          negative,
          notation: negative === 'parentheses' ? 'standard' : notation
        }}
      />
    );




    if (['Integer', 'Decimal', 'Percentage', 'Decimal-Auto'].includes(formatter)) {
      let unit;

      switch (formatter) {
        case 'Integer': {
          noOfDecimals = 0;
          break;
        }
        case 'Decimal': {
          break;
        }
        case 'Decimal-Auto': {
          noOfDecimals = Number.isInteger(currencyValue) ? 0 : 2;
          break;
        }
        case 'Percentage': {
          showGroupSeparators = false;
          unit = 'percent';
          break;
        }
        // no default
      }

      displayComp = (
        <NumberDisplay
          value={displayValue}
          formattingOptions={{
            fractionDigits: noOfDecimals,
            groupSeparators: showGroupSeparators,
            notation
          }}
          unit={unit}
        />
      );
    }


    switch (displayMode) {
      case 'DISPLAY_ONLY': {
        return (<StyledCtsCtsTestCurrencyWrapper> {displayComp} </StyledCtsCtsTestCurrencyWrapper>) ;
      }
      case 'LABELS_LEFT': {
        return (
          <StyledCtsCtsTestCurrencyWrapper>
          <FieldValueList
            variant={hideLabel ? 'stacked' : variant}
            data-testid={testId}
            fields={[{ id: '1', name: hideLabel ? '' : label, value: displayComp }]}
          />
          </StyledCtsCtsTestCurrencyWrapper>
        );
      }
      case 'STACKED_LARGE_VAL': {
        return (
          <StyledCtsCtsTestCurrencyWrapper>
          <FieldValueList
            variant='stacked'
            data-testid={testId}
            fields={[
              {
                id: '2',
                name: hideLabel ? '' : label,
                value: (
                  <Text variant='h1' as='span'>
                    {displayComp}
                  </Text>
                )
              }
            ]}
          />
          </StyledCtsCtsTestCurrencyWrapper>
        );
      }
      // no default
    }
  }

  const onResolveSuggestionHandler = (accepted: boolean) => {
    suggestionsHandler(accepted, pConn, setStatus);
  };

  return (
    <StyledCtsCtsTestCurrencyWrapper>
    <CosmosCurrency
      {...additionalProps}
      label={label}
      labelHidden={hideLabel}
      info={validatemessage || helperText}
      value={currencyValue}
      status={status}
      showDecimal={allowDecimals}
      currencyISOCode={currencyISOCode}
      alwaysShowISOCode={alwaysShowISOCode}
      showGroupSeparators={showGroupSeparators}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      data-testid={testId}
      onChange={(enteredValue) => {
        if (hasSuggestions) {
          setStatus(undefined);
        }
        setCurrencyValue(enteredValue);
        pConn.clearErrorMessages({
            category: '',
            property: propName,
            context: ''
        });
      }}
      onBlur={(enteredValue) => {
        const parsedValue = enteredValue !== '' ? Number(enteredValue) : enteredValue;
        if (!readOnly && (!value || value !== parsedValue)) {
           // @ts-ignore
          handleEvent(actions, 'changeNblur', propName, parsedValue);
          if (hasSuggestions) {
            pConn.ignoreSuggestion('');
          }
        }
      }}
      onResolveSuggestion={onResolveSuggestionHandler}
    />
    </StyledCtsCtsTestCurrencyWrapper>
  );
}



export default withConfiguration(CtsCtsTestCurrency);
