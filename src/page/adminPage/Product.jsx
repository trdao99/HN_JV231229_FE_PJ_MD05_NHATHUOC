import { Button, Form, message, Spin, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, findAllProducts } from '../../services/ProductService';
import PaginationComponent from '../../components/base/page/PaginationComponent';
import { changePage } from '../../redux/slice/ProductSlice';

export default function Product() {
    const product = useSelector((stata) => stata.product.data);
    const number = useSelector((state) => state.product.number);
    const total = useSelector((state) => state.product.total);
    const size =  useSelector((state) => state.product.size);
    const sortBy = useSelector((state) => state.product.sortBy);
    const sortDir = useSelector((state) => state.product.sortDir);
    const isLoading = useSelector((state) => state.product.loading == "pending");

    const dispatch = useDispatch();
    const [editProduct, setEditProduct] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [detailModalVisible, setDetailModalVisible] = useState(false);
    const [file, setFile] = useState(null);
    const [detail, setDetail] = useState(null);
    const [fileArray,setFileArray] = useState([]);
    const [form] = Form.useForm();
    const [addForm] = Form.useForm();

    const handleChangePage = (page, pageSize) => {
      dispatch(changePage({ page: page - 1, size: pageSize, sortBy : sortBy, sortDir : sortDir}));
      dispatch(findAllProducts({ page: page - 1, size: pageSize, sortBy : sortBy, sortDir : sortDir}));
    };

    useEffect(() => {
      dispatch(findAllProducts({page: number, size, sortBy, sortDir}));
    }, [number,size,sortBy,sortDir, dispatch]);

    const handleEdit = (record) => {
      setEditProduct(record);
      form.setFieldsValue(record);
      setModalVisible(true);
    };

    const handleDelete = (id) => {
      dispatch(deleteProduct(id));
      dispatch(findAllProducts({page: number, size, sortBy, sortDir}));
    };

    const handleDetail = (id) => {
      dispatch(findProductDetailByProductId(id));
      setDetailModalVisible(true);
    }

    const handleModalOk = async () => {
      console.log("ok");
    }

    const handleModalCancel = async () => {
      setModalVisible(false);
      setFile(null);
      form.resetFields();
    };

    const handleAddNewProduct = async () => {
      try {
        const values = addForm.getFieldsValue();
        const formData = new FormData();
        formData.append("productName", values.productName);
        formData.append("description", values.description);
        formData.append("status", values.status);
        formData.append("createdAt", new Date());
        formData.append("categoryId", values.categoryId);
        formData.append("brandId", values.brandId);
        if (file) {
          formData.append("image", file);
        };
        if (detail) {
          formData.append("productDetailImage", detail);
        };
        formData.append("productDetailName",values.productDetailName);
        formData.append("productDetailStatus",values.productDetailStatus);
        formData.append("productDetailStock",values.productDetailStock);
        formData.append("productDetailUnitPrice",values.productDetailUnitPrice);
        formData.append("unitName",values.unitName);
        formData.append("unitPrice",values.unitPrice);
        formData.append("unitStatus",values.unitStatus);
        formData.append("imageSrc", values.fileArray);

        dispatch(addProduct(formData)).then(() => dispatch(findAllProducts({page: number, size, sortBy, sortDir})));
        message.success("Product added successfully");
        setAddModalVisible(false);
        setFile(null);
        setDetail(null);
        setFileArray([]);

      }catch (error) {
        message.error("Error adding product");
        console.error(error);
      }
    };

    const handleAddModalCancel = () => {
      setAddModalVisible(false);
      setFile(null);
      setDetail(null);
      setFileArray([]);
      addForm.resetFields();
    }

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
        dataIndex:'status',
        key:'status',
        render: (status) => status? 'Đang bán' : 'Đã ngưng bán',
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
        key:'sku',
      },
      {
        title: "Hình ảnh",
        dataIndex: 'image',
        key: 'image',
        render: (image) => (image ? <img src={image} alt="Image product" style={{width: 70, height: 50}}/> : "No Image"),
      },
      {
        title: "Brand",
        dataIndex: 'brand',
        key:'brand',
      },
      {
        title: "Danh mục",
        dataIndex: 'category',
        key:'category',
      },
      {
        title: "Tùy chọn",
        key: 'option',
        render: (record) => (
          <div>
            <Button onClick={() => handleDetail(record.id)}> Chi tiết </Button>
            <Button type="primary" onClick={() => handleEdit(record)}>Sửa</Button>
            <Button danger onClick={() => handleDelete(record.id)}>Xóa</Button>
          </div>
        )
      }
    ];

    const data =  product?.map((item) => ({
      key: item.id,
      id: item.id,
      productName: item.productName,
      description: item.description,
      status: item.status,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      sku: item.sku,
      brand: item.brand.brandName,
      category: item.category.categoryName,
      image: item.image,
      // brandId: item.brandId,
      // categoryId: item.categoryId,
      // productDetailImage: item.productDetailImage,
      // productDetailName: item.productDetailName,
      // productDetailStatus: item.productDetailStatus,
      // productDetailStock: item.productDetailStock,
      // productDetailUnitPrice: item.productDetailUnitPrice,
      // unitName: item.unitName,
      // unitPrice: item.unitPrice,
      // unitStatus: item.unitStatus,
      // imageSrc: item.imageSrc.split(','),
    }));

    console.log(product);

  return (
    <>
    {
      isLoading ? (
        <Spin/>
      ) : (
        <div>
          <Button type='primary' onClick={() => setAddModalVisible(true)} style={{marginBottom: 16}}>
            Thêm mới Sản phẩm
          </Button>
          <Table columns={columns} dataSource={data} pagination={ false } />
        </div>
      )
    }
    <PaginationComponent
      current={number + 1}
      total={total}
      pageSize={size}
      onChange={handleChangePage}
    />
    
    </>
  )
}
