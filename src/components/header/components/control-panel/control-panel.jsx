import styled from "styled-components";
import { Icon, Button } from "../../../../components";
import { Link, useNavigate } from "react-router-dom";
import { ROLE } from "../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserLogin,
  selectUserRole,
  selectUserSession,
} from "../../../../selectors";
import { logout } from "../../../../actions";

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);

  return (
    <div className={className}>
      <RightAligned $gap="8px">
        {roleId === ROLE.GUEST ? (
          <Button>
            <Link to="/login">Войти</Link>
          </Button>
        ) : (
          <>
            <UserName>{login}</UserName>
            <Icon
              id="fa-sign-out"
              size="20px"
              onClick={() => dispatch(logout(session))}
            />
          </>
        )}
      </RightAligned>
      <RightAligned $gap="20px">
        <Icon id="fa-backward" size="20px" onClick={() => navigate(-1)} />
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

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ $gap }) => $gap};
  align-items: center;
`;

const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 6px 0px;
`;

export const ControlPanel = styled(ControlPanelContainer)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
