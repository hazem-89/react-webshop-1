import React, { Fragment, useState } from 'react'

import styled from 'styled-components';


const Select = styled.select`
 }
`;
const FilterContainer = styled.div`
    display: flex;
    max-height: 1rem;

`;
const Filter = styled.div`
    max-height: 1rem;
`;

const Option = styled.option``;

const FilterComponent = () => {
  const [size, setSize] = useState({})
  return (
    <FilterContainer>
      <Filter>
        <Select onChange={setSize}>
          <Option selected>
            Size
          </Option>
          <Option value="37">37</Option>
          <Option value="38">38</Option>
          <Option value="29">39</Option>
          <Option value="40">40</Option>
          <Option value="41">41</Option>
          <Option value="42">42</Option>
          <Option value="43">43</Option>
          <Option value="44">44</Option>
        </Select>
      </Filter>
    </FilterContainer>
  )
}

export default FilterComponent

function callback(value: string): void {
  throw new Error('Function not implemented.');
}
