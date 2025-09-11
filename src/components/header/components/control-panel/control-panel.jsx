import styled from "styled-components";
import { Icon } from "../../../../components";
import { Link, useNavigate } from "react-router-dom";

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ $gap }) => $gap};
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 100px;
  height: 32px;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  color: #fff;
  background-color: #626262ff;
  border-radius: 8px;
  &:hover {
    background-color: #ce3c3cff;
  }
`;

const StyledButton = styled.div`
  cursor: pointer;
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <RightAligned $gap="8px">
        <StyledLink to="/login">Войти</StyledLink>
      </RightAligned>
      <RightAligned $gap="20px">
        <StyledButton onClick={() => navigate(-1)}>
          <Icon id="fa-backward" size="20px" />
        </StyledButton>

        <Link to="/post">
          <Icon id="fa-file-text-o" size="20px" />
        </Link>
        <Link to="/users">
          <Icon id="fa-users" size="20px" />
        </Link>
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
