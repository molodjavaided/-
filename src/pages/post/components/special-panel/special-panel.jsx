import styled from "styled-components";
import { Icon } from "../../../../components";

const SpecialPanelContainer = ({
  className,
  publishedAt,
  margin,
  editButton,
}) => {
  return (
    <div className={className}>
      <div className="published-at">
        <Icon id="fa-calendar-o" />
        {publishedAt}
      </div>
      <div className="buttons">
        {editButton}
        <Icon id="fa-trash-o" onClick={() => {}} />
      </div>
    </div>
  );
};

export const SpecialPanel = styled(SpecialPanelContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ margin }) => margin};

  .published-at {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .buttons {
    display: flex;
    gap: 10px;
  }
`;
