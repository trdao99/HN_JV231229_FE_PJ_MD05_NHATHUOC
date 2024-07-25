import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Upload, Button, InputNumber, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, findAllProducts } from '../../services/ProductService';
import axios from 'axios';

const AddProductForm = ({ visible, onCancel }) => {
  const [file, setFile] = useState(null);
  const [detail, setDetail] = useState(null);
  const [fileArray, setFileArray] = useState([]);
  const [imageFileListPreview, setImageFileListPreview] = useState([]);
  const [addForm] = Form.useForm();
  const dispatch = useDispatch();
  const number = useSelector((state) => state.product.number);
  const size = useSelector((state) => state.product.size);
  const sortBy = useSelector((state) => state.product.sortBy);
  const sortDir = useSelector((state) => state.product.sortDir);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

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

  const handleAddNewProduct = async () => {
    try {
      const values = addForm.getFieldsValue();
      const formData = new FormData();

    // Kiểm tra từng trường và thêm vào formData nếu hợp lệ
    if (!values.productName) {
        message.error("Vui lòng nhập tên sản phẩm");
        return;
    } else {
        formData.append("productName", values.productName);
    }

    if (!values.description) {
        message.error("Vui lòng nhập mô tả sản phẩm");
        return;
    } else {
        formData.append("description", values.description);
    }

    if (!values.status) {
        message.error("Vui lòng chọn trạng thái");
        return;
    } else {
        formData.append("status", values.status);
    }

    if (!values.categoryId) {
        message.error("Vui lòng chọn danh mục");
        return;
    } else {
        formData.append("categoryId", values.categoryId);
    }

    if (!values.brandId) {
        message.error("Vui lòng chọn thương hiệu");
        return;
    } else {
        formData.append("brandId", values.brandId);
    }

    if (!file) {
        message.error("Vui lòng chọn hình ảnh sản phẩm");
        return;
    } else {
        formData.append("image", file);
    }

    if (!detail) {
        message.error("Vui lòng chọn hình ảnh chi tiết sản phẩm");
        return;
    } else {
        formData.append("productDetailImage", detail);
    }

    if (!values.productDetailName) {
        message.error("Vui lòng nhập tên chi tiết sản phẩm");
        return;
    } else {
        formData.append("productDetailName", values.productDetailName);
    }

    if (!values.productDetailStatus) {
        message.error("Vui lòng chọn trạng thái chi tiết sản phẩm");
        return;
    } else {
        formData.append("productDetailStatus", values.productDetailStatus);
    }

    if (!values.productDetailStock) {
        message.error("Vui lòng nhập số lượng chi tiết sản phẩm");
        return;
    } else {
        formData.append("productDetailStock", values.productDetailStock);
    }

    if (!values.productDetailUnitPrice) {
        message.error("Vui lòng nhập giá chi tiết sản phẩm");
        return;
    } else {
        formData.append("productDetailUnitPrice", values.productDetailUnitPrice);
    }

    if (!values.unitName) {
        message.error("Vui lòng nhập tên đơn vị");
        return;
    } else {
        formData.append("unitName", values.unitName);
    }

    if (!values.unitPrice) {
        message.error("Vui lòng nhập giá đơn vị");
        return;
    } else {
        formData.append("unitPrice", values.unitPrice);
    }

    if (!values.unitStatus) {
        message.error("Vui lòng chọn trạng thái đơn vị");
        return;
    } else {
        formData.append("unitStatus", values.unitStatus);
    }

    if(!fileArray){
        message.error("Vui lòng chọn chuỗi hình ảnh");
        return;
    }else {
        fileArray.forEach(item => {
          formData.append("imageSrc", item);
        })
    }

    formData.append("createdAt", new Date());

    dispatch(addProduct(formData)).then(() => {
      dispatch(findAllProducts({ page: number, size, sortBy, sortDir }))
      onCancel();
      setFile(null);
      setDetail(null);
      setFileArray([]);
      setImageFileListPreview([]);
      addForm.resetFields();
    });
     
    } catch (error) {
      message.error("Error adding product");
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    setFileArray(files);

    const previews = files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    });

    Promise.all(previews).then((images) => {
      setImageFileListPreview(images);
    });
  };

  return (
    <Form
      form={addForm}
      layout='vertical'
      scrollToFirstError
    >
      <Form.Item
        name="productName"
        label="Tên sản phẩm"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập tên sản phẩm!'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Mô tả"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập mô tả!'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="status"
        label="Trạng thái"
        rules={[
          {
            required: true,
            message: 'Vui lòng chọn trạng thái!'
          }
        ]}
      >
        <Select>
          <Select.Option value={true}>Đang bán</Select.Option>
          <Select.Option value={false}>Đã ngưng bán</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="categoryId"
        label="Danh mục"
        rules={[
          {
            required: true,
            message: 'Vui lòng chọn danh mục!'
          }
        ]}
      >
        <Select>
          {categories?.map((category) => (
            <Select.Option key={category.id} value={category.id}>{category.categoryName}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="brandId"
        label="Brand"
        rules={[
          {
            required: true,
            message: 'Vui lòng chọn brand!'
          }
        ]}
      >
        <Select>
          {brands?.map((brand) => (
            <Select.Option key={brand.id} value={brand.id}>{brand.brandName}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Hình ảnh sản phẩm">
        <Upload
          beforeUpload={(file) => {
            setFile(file);
            return false;
          }}
          showUploadList={false}
        >
          <Button icon={<UploadOutlined />}>Chọn hình ảnh</Button>
        </Upload>
        {file && <p>{file.name}</p>}
      </Form.Item>
      <Form.Item
        name="productDetailName"
        label="Tên chi tiết sản phẩm"
        rules={[
          { required: true, message: 'Vui lòng nhập tên chi tiết sản phẩm!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="productDetailStatus"
        label="Trạng thái chi tiết sản phẩm"
        rules={[
          { required: true, message: 'Vui lòng chọn trạng thái chi tiết sản phẩm!' }
        ]}
      >
        <Select>
          <Select.Option value={true}>Có sẵn</Select.Option>
          <Select.Option value={false}>Không có sẵn</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="productDetailStock"
        label="Tồn kho chi tiết sản phẩm"
        rules={[
          { required: true, message: 'Vui lòng nhập tồn kho chi tiết sản phẩm!' }
        ]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        name="productDetailUnitPrice"
        label="Giá đơn vị chi tiết sản phẩm"
        rules={[
          { required: true, message: 'Vui lòng nhập giá đơn vị chi tiết sản phẩm!' }
        ]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        name="unitName"
        label="Tên đơn vị"
        rules={[
          { required: true, message: 'Vui lòng nhập tên đơn vị!' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="unitPrice"
        label="Giá đơn vị"
        rules={[
          { required: true, message: 'Vui lòng nhập giá đơn vị!' }
        ]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        name="unitStatus"
        label="Trạng thái đơn vị"
        rules={[
          { required: true, message: 'Vui lòng chọn trạng thái đơn vị!' }
        ]}
      >
        <Select>
          <Select.Option value={true}>Có sẵn</Select.Option>
          <Select.Option value={false}>Không có sẵn</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Hình ảnh chi tiết sản phẩm">
        <Upload
          beforeUpload={(file) => {
            setDetail(file);
            return false;
          }}
          showUploadList={false}
        >
          <Button icon={<UploadOutlined />}>Chọn hình ảnh chi tiết</Button>
        </Upload>
        {detail && <p>{detail.name}</p>}
      </Form.Item>
      <Form.Item label="Toàn bộ hình ảnh của sản phâm">
        <label
          htmlFor="file-upload"
          className="cursor-pointer inline-block px-4 py-2 font-sans rounded-lg shadow-md hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Chọn hình ảnh
        </label>
        <input
          id="file-upload"
          type="file"
          multiple
          onChange={handleChange}
          className="hidden"
        />
        <div className="mt-2 grid grid-cols-3 gap-2">
          {imageFileListPreview.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Preview ${index}`}
              className="h-20 w-20 object-cover"
            />
          ))}
        </div>
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleAddNewProduct}>
          Thêm mới sản phẩm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProductForm;