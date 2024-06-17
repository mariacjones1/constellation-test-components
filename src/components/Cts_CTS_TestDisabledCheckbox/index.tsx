import { useState } from 'react';
import {
  Checkbox as CosmosCheckbox,
  CheckboxGroup,
  withConfiguration,
  BooleanDisplay,
  Text
} from '@pega/cosmos-react-core';
import StyledCtsCtsTestDisabledCheckboxWrapper from './styles';
import CtsCtsTestAlertButton from '../Cts_CTS_TestAlertButton';

// interface for props
interface CtsCtsTestDisabledCheckboxProps {
  getPConnect: () => any;
  label?: string;
  caption: string;
  validatemessage?: string;
  helperText?: string;
  hideLabel?: boolean;
  testId?: string;
  displayMode?: string;
  variant?: string;
  trueLabel?: string;
  falseLabel?: string;
  additionalProps?: object;
}

function CtsCtsTestDisabledCheckbox(props: CtsCtsTestDisabledCheckboxProps) {
  const {
    label = '',
    caption,
    validatemessage = '',
    helperText = '',
    hideLabel = false,
    testId,
    additionalProps = {},
    displayMode,
    variant = 'inline',
    trueLabel,
    falseLabel
  } = props;
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleButtonClick = () => {
    setDisabled(false);
  };

  const handleCheckboxChange = (event: any) => {
    setChecked(event.target.checked);
  };

  const aCosmosCheckbox = (
    <CosmosCheckbox
      {...additionalProps}
      className='standard'
      checked={checked}
      label={caption}
      disabled={disabled}
      onChange={handleCheckboxChange}
      data-testid={testId}
    />
  );

  const parentTestId = testId === '' ? `${testId}-parent` : testId;

  let displayComponent;
  if (displayMode) {
    displayComponent = (
      <BooleanDisplay value={checked} trueLabel={trueLabel} falseLabel={falseLabel} />
    );
  }

  if (displayMode === 'DISPLAY_ONLY') {
    return (
      <StyledCtsCtsTestDisabledCheckboxWrapper>
        {displayComponent}
      </StyledCtsCtsTestDisabledCheckboxWrapper>
    );
  }

  return (
    <StyledCtsCtsTestDisabledCheckboxWrapper>
      <CtsCtsTestAlertButton onClick={handleButtonClick} />
      <CheckboxGroup
        label={label}
        labelHidden={hideLabel}
        data-testid={parentTestId}
        info={validatemessage || helperText}
        status={undefined}
      >
        {aCosmosCheckbox}
      </CheckboxGroup>
    </StyledCtsCtsTestDisabledCheckboxWrapper>
  );
}

export default withConfiguration(CtsCtsTestDisabledCheckbox);
