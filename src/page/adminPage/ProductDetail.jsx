import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Spin, Descriptions, message, InputNumber, Button } from 'antd';
import { changeStockProduct, findProductDetailbyProduct } from '../../services/ProductDetailService';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.productDetail);
    const [newStock, setNewStock] =useState(0);
    useEffect(() => {
        setNewStock(data?.stock);
    }, [data]);

    useEffect(() => {
        if(id){
            dispatch(findProductDetailbyProduct(id));
        }
    }, [dispatch, id]);

    if (loading === 'PENDING') {
        return <Spin />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleUpdateStock = () => {
        dispatch(changeStockProduct({ productId:data.product.id, newStock })).then(() => {
            // Handle success
            dispatch(findProductDetailbyProduct(id));
            message.success("Stock updated successfully");
        }).catch((error) => {
            // Handle error
            message.error("Error updating stock");
        });
    };
    

    return (
        <div>
            <Descriptions title="Product Detail" bordered>
                <Descriptions.Item label="ID">{data && data.id}</Descriptions.Item>
                <Descriptions.Item label="Name">{data && data.productDetailName}</Descriptions.Item>
                <Descriptions.Item label="Status">{data && data.status ? 'Active' : 'Inactive'}</Descriptions.Item>
                <Descriptions.Item label="Stock">{data && data.stock}</Descriptions.Item>
                <Descriptions.Item label="Unit Price">{data && data.unitPrice}</Descriptions.Item>
                <Descriptions.Item label="Unit">{data && data.unit?.unitName || 'N/A'}</Descriptions.Item>
                <Descriptions.Item label="Product">{data && data.product?.productName || 'N/A'}</Descriptions.Item>
                <Descriptions.Item label="Image">
                    {data && data.image ? <img src={data.image} alt="Product Detail" style={{ maxWidth: '100px' }} /> : 'N/A'}
                </Descriptions.Item>
            </Descriptions>
            <div style={{ marginTop: '20px' }}>
                <InputNumber
                    min={0}
                    value={newStock}
                    onChange={value => setNewStock(value)}
                    style={{ marginRight: '10px' }}
                />
                <Button type="primary" onClick={handleUpdateStock}>
                    Update Stock
                </Button>
            </div>
        </div>
    );
};

export default ProductDetail;
