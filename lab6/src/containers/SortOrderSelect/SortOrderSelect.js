import React from 'react'
import { Select } from 'antd';
const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

const SortOrderSelect = () => {
    return (
        <Select defaultValue="Choose sort order" style={{ width: 220 }} onChange={handleChange}>
            <Option value='asc'>Acsending order</Option>
            <Option value='desc'>Decsending order</Option>
        </Select>
    )
}

export default SortOrderSelect