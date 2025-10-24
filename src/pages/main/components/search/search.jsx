import styled from "styled-components";
import { Icon, Input } from "../../../../components";
import PropTypes from "prop-types";

const SearchContainer = ({ className, searchPhrase, onChange }) => {
  return (
    <div className={className}>
      <Input
        placeholder="Поиск по заголовкам..."
        onChange={onChange}
        value={searchPhrase}
      />
      <Icon id="fa-search" inactive={true} />
    </div>
  );
};

export const Search = styled(SearchContainer)`
  position: relative;
  display: flex;
  margin: 40px auto 0;
  width: 340px;
  height: 40px;

  & input {
    padding: 10px 39px 10px 10px;
  }

  & div {
    position: absolute;
    right: 10px;
    top: 7px;
  }
`;

Search.propTypes = {
  searchPhrase: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};
