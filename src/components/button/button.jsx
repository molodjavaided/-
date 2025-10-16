import styled from "styled-components";

const ButtonContainer = ({ children, className, width, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export const Button = styled(ButtonContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: ${({ width = "100%" }) => width};
  border: none;
  padding: 6px 15px;
  cursor: pointer;
  color: #fff;
  background-color: #626262ff;
  border-radius: 8px;
  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "rgba(0, 0, 0, 0.5)" : "#ce3c3cff"};
    cursor: ${({ disabled }) => (disabled ? "default" : "ponter")};
  }
`;
