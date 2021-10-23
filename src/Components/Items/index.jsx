import React from 'react'

import styled from 'styled-components'

import Item from '../Item'
import ImageFilter from '../ImageFilter';

const Items = styled.div`
  margin: 2px;
  display: flex;
  padding: 10px;
  font-size: 12px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;
  box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
`;

export default (props) => {
  return (
    <Items>
      { ImageFilter(props.type) }
      <Item { ...props } />
      <span>{props.date}</span>
    </Items>
  );
}