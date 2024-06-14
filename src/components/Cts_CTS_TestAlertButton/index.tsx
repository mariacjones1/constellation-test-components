import handleEvent from './event-utils';
import StyledCtsCtsTestAlertButtonWrapper from './styles';

// interface for props
interface CtsCtsTestAlertButtonProps {
  getPConnect: () => any;
}

// Duplicated runtime code from Constellation Design System Component

function CtsCtsTestAlertButton(props: CtsCtsTestAlertButtonProps) {
  const handleClick = () => {
    handleEvent();
  };

  return (
    <StyledCtsCtsTestAlertButtonWrapper>
      <button onClick={handleClick}>Show Alert</button>
    </StyledCtsCtsTestAlertButtonWrapper>
  );
}

export default CtsCtsTestAlertButton;
