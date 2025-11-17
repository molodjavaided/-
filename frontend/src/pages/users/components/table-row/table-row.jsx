import styled from "styled-components";
import PropTypes from "prop-types";

const TableRowContainer = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const TableRow = styled(TableRowContainer)`
  display: flex;
  align-items: center;
  border: ${({ border }) => (border ? "1px solid black;" : "none")};

  & > div {
    display: flex;
    padding: 5px 10px;
  }

  & .login-column {
    width: 172px;
  }

  & .registered-at-column {
    width: 213px;
  }

  & .role-column {
    width: auto;
    gap: 10px;
  }
`;

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};
