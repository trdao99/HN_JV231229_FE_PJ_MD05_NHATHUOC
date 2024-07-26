import { Badge, Button, Card, Col, Descriptions, Image, InputNumber, message, Row } from 'antd';
import React, { useState } from 'react'

export default function CardProduct({item}) {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        // Logic thêm vào giỏ hàng
        message.success(`Đã thêm ${quantity} ${item.productName} vào giỏ hàng`);
    };
  return (
    <>
        <Col span={60}>
            <Card title="Chi tiết sản phẩm" style={{ margin: '10px' }}>
                <Image
                    width={100}
                    src={item.image}
                    alt={item.productName}
                />
                <Descriptions bordered size="small" column={1}>
                    <Descriptions.Item label="Tên sản phẩm">{item.productName}</Descriptions.Item>
                    <Descriptions.Item label="Mã sản phẩm">{item.sku}</Descriptions.Item>
                    <Descriptions.Item label="Trạng thái">
                        <Badge status={item.status ? 'success' : 'error'} text={item.status ? 'Đang bán' : 'Ngưng bán'} />
                    </Descriptions.Item>
                    <Descriptions.Item label="Mô tả">{item.description}</Descriptions.Item>
                    <Descriptions.Item label="Thương hiệu">
                        {item.brand.brandName}
                    </Descriptions.Item>
                    <Descriptions.Item label="Danh mục">
                        {item.category.categoryName}
                    </Descriptions.Item>
                    <Descriptions.Item label="Số lượng">
                        <InputNumber min={1} max={100} value={quantity} onChange={setQuantity} style={{marginRight:10}}/>
                        <Button type="primary" onClick={handleAddToCart}>Thêm vào giỏ hàng</Button>
                    </Descriptions.Item>
                </Descriptions>
            </Card>
        </Col>
    </>
  )
}
