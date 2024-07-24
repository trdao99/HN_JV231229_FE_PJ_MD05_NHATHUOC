import { useEffect, useState } from "react";
import {
  Form,
  Input,
  Select,
  Upload,
  Button,
  message,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { findAllProducts, updateProduct } from "../../services/ProductService";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const UpdateProductForm = ({ visible, onCancel, editProduct }) => {
  const [file, setFile] = useState(null);
  const [updateForm] = Form.useForm();
  const dispatch = useDispatch();
  const number = useSelector((state) => state.product.number);
  const size = useSelector((state) => state.product.size);
  const sortBy = useSelector((state) => state.product.sortBy);
  const sortDir = useSelector((state) => state.product.sortDir);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  console.log(editProduct);

  useEffect(() => {
    const findCategoriesAndBrands = async () => {
      try {
        const [categoryRes, brandRes] = await Promise.all([
          axios.get("http://localhost:8080/api/v1/admin/categories", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }),
          axios.get("http://localhost:8080/api/v1/admin/brands", {
            headers: {
              Authorization: "Bearer" + localStorage.getItem("token"),
            },
          }),
        ]);
        setCategories(
          Array.isArray(categoryRes.data.data) ? categoryRes.data.data : []
        );
        setBrands(Array.isArray(brandRes.data.data) ? brandRes.data.data : []);
      } catch (error) {
        console.log(error);
      }
    };
    findCategoriesAndBrands();
  }, []);

  const handleUpdateProduct = async () => {
    try {
      const values = updateForm.getFieldsValue();
      const formData = new FormData();

      // Kiểm tra file và detail
      if (!file) {
        message.error("Vui lòng chọn hình ảnh sản phẩm");
        return;
      }

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

    if (file) {
        formData.append("image", file);
    }else{
        message.error("Vui lòng chọn hình ảnh sản phẩm");
        return;
    }
    formData.append("updateAt", new Date());

    dispatch(updateProduct({ formData, id: editProduct.id })).then(() => {
            dispatch(findAllProducts({ page: number, size, sortBy, sortDir }));
        onCancel();
        setFile(null);
        updateForm.resetFields();
    });
    } catch (error) {
      message.error("Error update product");
      console.error(error);
    }
  };

  return (
    <Form form={updateForm} layout="vertical" scrollToFirstError>
      <Form.Item
        label="Tên sản phẩm"
        name="productName"
        rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mô tả"
        name="description"
        rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Trạng thái"
        name="status"
        rules={[{ required: true, message: "Vui lòng nhập trạng thái!" }]}
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
            message: "Vui lòng chọn danh mục!",
          },
        ]}
      >
        <Select>
          {categories?.map((category) => (
            <Select.Option key={category.id} value={category.id}>
              {category.categoryName}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="brandId"
        label="Brand"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn brand!",
          },
        ]}
      >
        <Select>
          {brands?.map((brand) => (
            <Select.Option key={brand.id} value={brand.id}>
              {brand.brandName}
            </Select.Option>
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
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleUpdateProduct}>
          Sửa sản phẩm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateProductForm;
