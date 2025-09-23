import styled from "styled-components";
// import { forwardRef } from "react"; В React 19 forwardRef больше не нужен

const InputContainer = ({ className, width, ref, ...props }) => {
  return <input className={className} {...props} ref={ref} />;
};

export const Input = styled(InputContainer)`
  width: ${({ width = "100%" }) => width};
  padding: 10px;
  border-radius: 10px;
`;
