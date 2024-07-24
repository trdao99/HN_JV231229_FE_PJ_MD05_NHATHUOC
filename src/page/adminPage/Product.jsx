import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Spin, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatusProduct, findAllProducts } from '../../services/ProductService';
import PaginationComponent from '../../components/base/page/PaginationComponent';
import { changePage } from '../../redux/slice/ProductSlice';
import axios from 'axios';
import AddProductForm from '../../components/product/formAddProduct';
import UpdateProductForm from '../../components/product/formUpdateProduct';

export default function Product() {
  const product = useSelector((state) => state.product.data);
  const number = useSelector((state) => state.product.number);
  const total = useSelector((state) => state.product.total);
  const size = useSelector((state) => state.product.size);
  const sortBy = useSelector((state) => state.product.sortBy);
  const sortDir = useSelector((state) => state.product.sortDir);
  const isLoading = useSelector((state) => state.product.loading === "pending");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleChangePage = (page, pageSize) => {
    dispatch(changePage({ page: page - 1, size: pageSize, sortBy: sortBy, sortDir: sortDir }));
    dispatch(findAllProducts({ page: page - 1, size: pageSize, sortBy: sortBy, sortDir: sortDir }));
  };

  useEffect(() => {
    dispatch(findAllProducts({ page: number, size, sortBy, sortDir }));
  }, [number, size, sortBy, sortDir, dispatch]);

  useEffect(() => {
    const findCategoriesAndBrands = async () => {
      try {
        const [categoryRes, brandRes] = await Promise.all([
          axios.get("http://localhost:8080/api/v1/admin/categories", {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
          }),
          axios.get("http://localhost:8080/api/v1/admin/brands", {
            headers: {
              'Authorization': 'Bearer' + localStorage.getItem('token')
            },
          }),
        ]);
        setCategories(Array.isArray(categoryRes.data.data) ? categoryRes.data.data : []);
        setBrands(Array.isArray(brandRes.data.data) ? brandRes.data.data : []);
      } catch (error) {
        console.log(error);
      }
    };
    findCategoriesAndBrands();
  }, []);

  const handleEdit = (record) => {
    setEditProduct(record);
    form.setFieldsValue(record);
    setModalVisible(true);
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch(changeStatusProduct(id)).then(() => {
      dispatch(findAllProducts({ page: number, size, sortBy, sortDir }));
    });
  };

  const handleDetail = (id) => {
    dispatch(findProductDetailByProductId(id));
    setDetailModalVisible(true);
  };

  const handleModalCancel = async () => {
    setModalVisible(false);
    form.resetFields();
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status) => status ? 'Đang bán' : 'Đã ngưng bán',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
    },
    {
      title: "SKU",
      dataIndex: 'sku',
      key: 'sku',
    },
    {
      title: "Hình ảnh",
      dataIndex: 'image',
      key: 'image',
      render: (image) => (image ? <img src={image} alt="Image product" style={{ width: 70, height: 50 }} /> : "No Image"),
    },
    {
      title: "Brand",
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: "Danh mục",
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: "Tùy chọn",
      key: 'option',
      render: (record) => (
        <div>
          {/* <Button onClick={() => handleDetail(record.id)}> Chi tiết </Button> */}
          <Button type="primary" onClick={() => handleEdit(record)}>Sửa</Button>
          <Button danger onClick={() => handleDelete(record.id)}>Đổi trạng thái</Button>
        </div>
      )
    }
  ];

  const data = product?.map((item) => ({
    key: item.id,
    id: item.id,
    productName: item.productName,
    description: item.description,
    status: item.status,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    sku: item.sku,
    brand: brands.find((brand) => brand.brandId === item.brandId)?.brandName || "N/A",
    category: categories.find((category) => category.categoryId === item.categoryId)?.categoryName || "N/A",
    image: item.image,
  }));

  return (
    <>
      {
        isLoading ? (
          <Spin />
        ) : (
          <div>
            <Button type='primary' onClick={() => setAddModalVisible(true)} style={{ marginBottom: 16 }}>
              Thêm mới Sản phẩm
            </Button>
            <Table columns={columns} dataSource={data} pagination={false} />
          </div>
        )
      }
      <PaginationComponent
        current={number + 1}
        total={total}
        pageSize={size}
        onChange={handleChangePage}
      />
      <Modal
        title="Chỉnh sửa sản phẩm"
        visible={modalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <UpdateProductForm visible={modalVisible} onCancel={() => setModalVisible(false)} editProduct={editProduct}/>
      </Modal>

      <Modal
        title="Thêm mới sản phẩm"
        visible={addModalVisible}
        onCancel={() => setAddModalVisible(false)}
        footer={null}
      >
        <AddProductForm visible={addModalVisible} onCancel={() => setAddModalVisible(false)} />
      </Modal>
    </>
  );
}