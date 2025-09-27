import styled from "styled-components";

const IconContainer = ({ className, id, ...props }) => (
  <div className={className} {...props}>
    <i className={`fa ${id}`} aria-hidden="true"></i>
  </div>
);

export const Icon = styled(IconContainer)`
  font-size: ${({ size = "24px" }) => size};
  cursor: pointer;
  color: ${({ disabled }) => (disabled ? "#ccc" : "#000")};
`;
