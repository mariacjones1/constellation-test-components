import handleEvent from './event-utils';
import StyledCtsCtsTestAlertButtonWrapper from './styles';

// interface for props
interface CtsCtsTestAlertButtonProps {
  onClick: () => void;
}

function CtsCtsTestAlertButton({ onClick }: CtsCtsTestAlertButtonProps) {
  const handleClick = () => {
    handleEvent();
    onClick();
  };

  return (
    <StyledCtsCtsTestAlertButtonWrapper>
      <button onClick={handleClick}>Show Alert</button>
    </StyledCtsCtsTestAlertButtonWrapper>
  );
}

export default CtsCtsTestAlertButton;
