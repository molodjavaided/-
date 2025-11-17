import styled from "styled-components";
import { Icon } from "../../../../components";
import { Link } from "react-router-dom";

const LargeText = styled.div`
  font-size: 48px;
  font-weight: bold;
  line-height: 48px;
`;

const SmallText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const LogoContainer = ({ className }) => (
  <Link className={className} to="/">
    <Icon size="70px" margin="0 0 0 0" id="fa-code" />
    <div>
      <LargeText>Блог</LargeText>
      <SmallText>Веб-разработчик</SmallText>
    </div>
  </Link>
);

export const Logo = styled(LogoContainer)`
  display: flex;
  align-items: center;
  gap: 17px;
  text-decoration: none;
  color: #000;
`;
