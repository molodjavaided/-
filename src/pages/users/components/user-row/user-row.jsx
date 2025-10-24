import styled from "styled-components";
import { Icon } from "../../../../components";
import { TableRow } from "../table-row/table-row";
import { useState } from "react";
import { useServerRequest } from "../../../../hooks";
import PropTypes from "prop-types";
import { PROP_TYPE, ROLE } from "../../../../constants";

const UserRowContainer = ({
  className,
  id,
  login,
  registeredAt,
  roleId: userRoleId,
  roles,
  onUserRemove,
}) => {
  const [initialRoleId, setInitialRoleId] = useState(userRoleId);
  const [selectedRoleId, setSekectedRoleId] = useState(userRoleId);
  const requestServer = useServerRequest();

  const onRoleChange = ({ target }) => {
    setSekectedRoleId(Number(target.value));
  };

  const onRoleSave = (userId, newUserRoleId) => {
    requestServer("updateUserRole", userId, newUserRoleId).then(() => {
      setInitialRoleId(newUserRoleId);
    });
  };

  const isSaveButtonDisabled = selectedRoleId === initialRoleId;

  return (
    <div className={className}>
      <TableRow border={true}>
        <div className="login-column">{login}</div>
        <div className="registered-at-column">{registeredAt}</div>
        <div className="role-column">
          <select value={selectedRoleId} onChange={onRoleChange}>
            {roles.map(({ id: roleId, name: roleName }) => (
              <option key={roleId} value={roleId}>
                {roleName}
              </option>
            ))}
          </select>

          <Icon
            id="fa-floppy-o"
            disabled={isSaveButtonDisabled}
            onClick={() => onRoleSave(id, selectedRoleId)}
          />
        </div>
      </TableRow>
      <Icon id="fa-trash-o" onClick={onUserRemove} />
    </div>
  );
};

export const UserRow = styled(UserRowContainer)`
  display: flex;
  gap: 5px;
  align-items: center;
`;

UserRow.propTypes = {
  id: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  registeredAt: PropTypes.string.isRequired,
  roleId: PROP_TYPE.ROLE_ID.isRequired,
  roles: PropTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
  onUserRemove: PropTypes.func.isRequired,
};
