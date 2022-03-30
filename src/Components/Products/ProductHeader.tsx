import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Fragment, useState } from 'react';
import Announcement from './Announcement';
import styled from 'styled-components';
import './ProductHeader.css'


const FilterContainer = styled.div`
    display: flex;
`;
const Filter = styled.div`
    display: flex;
`;
const FilterText = styled.span`
 }
`;

const Select = styled.select`
 }
`;
const Option = styled.option``;

const ProductHeader = () => {
    const [sortOpen, setSortOpen] = useState(false)

    const showSort = () => setSortOpen(!sortOpen);
    return (
        <Fragment>
            <Announcement />
            <div className='product-header-container'>
                <h2>Products</h2>
                <div className="sort-filter-container">
                    <div className="container sort">
                        <div className="container-header">
                            <FilterText >Sort by</FilterText>
                            <ArrowDropDownIcon onClick={showSort} style={{ fontSize: 35 }} />
                        </div>
                        <div className={sortOpen ? 'sort-choices active' : 'sort-choices'}>
                            <FilterContainer>
                                <Filter>
                                    <Select>
                                        <Option selected>Newest</Option>
                                        <Option value="Lowest">Lowest</Option>
                                        <Option value="Highest">Highest</Option>
                                    </Select>
                                </Filter>
                            </FilterContainer>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ProductHeader;