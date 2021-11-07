import React from 'react'
import { Select } from 'antd';
const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

const SortByParameterSelect = () => {
    return (
        <Select defaultValue="Select parameter" style={{ width: 220 }} onChange={handleChange}>
            <Option value='single-name'>Brand</Option>
            <Option value='single-price'>Power</Option>
            <Option value='total-price'>Price</Option>
        </Select>
    )
}

export default SortByParameterSelect

