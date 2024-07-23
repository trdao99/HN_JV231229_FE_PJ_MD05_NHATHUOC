import { Pagination } from 'antd'
import React from 'react'

const PaginationComponent = ({ current, total , pageSize , onChange}) =>(
    <Pagination
    current={current}
    total={total}
    pageSize={pageSize}
    onChange={onChange}
    />
);

export default PaginationComponent;