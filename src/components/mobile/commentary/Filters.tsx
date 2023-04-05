import React, { useState } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
type Props = {
  list: string[];
  value: string;
};

const Filters = ({ list, value }: Props) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(value);
  return (
    <StyledSelectbox>
      {' '}
      <StyledSelectedLabel value={selected} onClick={() => setActive(!active)}>
        {' '}
        {selected}
        {!active ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
      </StyledSelectedLabel>
      {active && (
        <StyledOptionList active={active}>
          {' '}
          {list
            .filter((element) => element !== selected)
            .map((element) => (
              <StyledOptionItem
                key={element}
                onClick={() => {
                  setActive(false);
                  setSelected(element);
                }}
              >
                {' '}
                {element}
              </StyledOptionItem>
            ))}
        </StyledOptionList>
      )}
    </StyledSelectbox>
  );
};

const activeExist1 = ({ active = true }) => {
  return `display: ${active ? 'block' : '0'}`;
};
const StyledOptionItem = styled.li`
  font-size: 14px;
  box-sizing: border-box;
`;
const StyledOptionList = styled.ul`
  box-sizing: border-box;
  position: absolute;
  top: 27px;
  list-style-type: none;
  width: 100%;
  border-radius: 10px;
  background: #ffffff;
  ${activeExist1}
  transition: 0.2s ease-in-out;
  overflow-y: scroll;
`;
const StyledSelectedLabel = styled.button<{ value: String }>`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid #888888;
  color: #888888;
  border-radius: 10px;
  box-sizing: border-box;
  width: inherit;
  height: inherit;
  font-size: 14px;
  cursor: pointer;
`;
const StyledSelectbox = styled.div`
  position: relative;
  width: 88px;
  height: 27px;
  border-radius: 10px;
  background: #ffffff;
  color: #8b8b8b;
  cursor: pointer;
  z-index: 0;
`;
export default Filters;
