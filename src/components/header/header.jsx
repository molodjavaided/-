import styled from "styled-components";
import { Logo, ControlPanel } from "./components";

const Discription = styled.div`
  font-style: italic;
`;

const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <Discription>
      Веб-технологии
      <br />
      Написание кода
      <br />
      Разбор ошибок
    </Discription>
    <ControlPanel />
  </header>
);

export const Header = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 1000px;
  height: 120px;
  background-color: #fff;
  padding: 25px 54px;
  box-shadow: 0 -7px 35px 9px #616161;
`;
