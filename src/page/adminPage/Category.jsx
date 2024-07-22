import { Button, Form, Input, message, Modal, Spin, Switch, Table, Upload } from 'antd'
import React, { useEffect, useState } from 'react'
import PaginationComponent from '../../components/base/page/PaginationComponent'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../../redux/slice/categorySlice'
import { addCategory, deleteCategory, findAllCategory, updateCategory } from '../../services/categoryService'
import { UploadOutlined } from '@ant-design/icons'

export default function Category() {
  const category = useSelector((state) => state.category.data);
  const number = useSelector((state) => state.category.number);
  const total = useSelector((state) => state.category.total);
  const size =  useSelector((state) => state.category.size);
  const sortBy = useSelector((state) => state.category.sortBy);
  const sortDir = useSelector((state) => state.category.sortDir);
  const isLoading = useSelector((state) => state.category.loading == "pending");

  const dispatch = useDispatch();
  const [editCategory, setEditCategory] = useState(null);
  console.log(editCategory);
  const [modalVisible, setModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [file, setFile] = useState(null);
  const [form] = Form.useForm();
  const [addForm] = Form.useForm();

  const handleChangePage = (page, pageSize) => {
    dispatch(changePage({ page: page - 1, size: pageSize , sortBy : sortBy, sortDir : sortDir}));
    dispatch(findAllCategory({ page: page - 1, size: pageSize, sortBy : sortBy, sortDir : sortDir}));
  };

  useEffect(() => {
    dispatch(findAllCategory({page: number, size, sortBy, sortDir}));
  }, [number,size,sortBy,sortDir,dispatch]);

  const handleEdit = (record) => {
    setEditCategory(record);
    form.setFieldsValue(record);
    setModalVisible(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
    dispatch(findAllCategory({page: number, size , sortBy, sortDir}));
  }

  /**
   * 
   */
  const handleModalOk = async () => {
    try {
      const values = form.getFieldsValue();
      const formData = new FormData();
      formData.append("categoryName", values.categoryName);
      formData.append("description", values.description);
      formData.append("status", values.status);
      if (file) {
        formData.append("image", file);
      }

      dispatch(updateCategory({formData, id: editCategory.id})).then(() => dispatch(findAllCategory({page: number, size , sortBy, sortDir})));
      message.success("Category updated successfully")
      setModalVisible(false);
      setFile(null);
    }catch (error) {
      message.error("Update category failed")
      console.error(error);
    }
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    setFile(null);
    form.resetFields();
  };

  const handleAddNewCategory = async () => {
    try {
      const values = addForm.getFieldsValue();
      const formData = new FormData();
      formData.append("categoryName", values.categoryName);
      formData.append("description", values.description);
      formData.append("status", values.status);
      if (file) {
        formData.append("image", file);
      }

      dispatch(addCategory(formData)).then(() => dispatch(findAllCategory({page: number, size , sortBy, sortDir})));
      message.success("Category added successfully")
      setAddModalVisible(false);
      setFile(null);
      
    }catch (error) {
      message.error("Error adding category");
      console.error(error);
    }
  };

  const handleAddModalCancel = () => {
    setAddModalVisible(false);
    setFile(null);
    addForm.resetFields();
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên Danh Mục',
      dataIndex: 'categoryName',
      key: 'categoryName',
    },
    {
      title: 'Mô Tả',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Trạng Thái',
      dataIndex:'status',
      key:'status',
      render: status => status? "Hoạt động" : "Không hoạt động",
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (image) => (image ? <img src={image} alt="Image category" style={{width: 50, height: 50}}/> : "No Image"),
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <div>
          <Button type='primary' onClick={() => handleEdit(record)}>Edit</Button>
          <Button type='danger' onClick={() => handleDelete(record.id)}>Delete</Button>
        </div>
      ),
    }
  ];

  const data = category?.map((item) => ({
    key: item.id,
    id: item.id,
    categoryName: item.categoryName,
    description: item.description,
    status: item.status,
    image: item.image,
  }));

  return (
    <>
    {isLoading ? (
      <Spin />
    ) : (
      <div>
        <Button type='primary' onClick={()=> setAddModalVisible(true)} style={{marginBottom: 14}}>
          Thêm mới Danh mục
        </Button>
        <Table columns={columns} dataSource={data} pagination={false}/>
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
      title='Edit Category'
      visible={modalVisible}
      onOk={handleModalOk}
      onCancel={handleModalCancel}
    >
      <Form form={form} layout='vertical'>
        <Form.Item 
        name="categoryName" 
        label="Tên danh mục" 
        rules={[{required: true, message: "Tên danh mục không được để trống"}]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
        name="description" 
        label="Mô tả"
        rules={[{required: true, message: "Mô tả không được để trống"}]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="status" label="Trạng thái" valuePropName='checked'>
          <Switch checkedChildren="Active" unCheckedChildren="Inactive"/>
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <Upload 
            beforeUpload={(file)=>{
              setFile(file);
              return false;
            }}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined/>}>Chọn hình ảnh</Button>
          </Upload>
          {file && <p>{file.name}</p>}
        </Form.Item>
      </Form>
    </Modal>

    <Modal
      title='Add Category'
      visible={addModalVisible}
      onOk={handleAddNewCategory}
      onCancel={handleAddModalCancel}
    >
      <Form form={addForm} layout='vertical'>
        <Form.Item
        name="categoryName"
        label="Tên danh mục"
        rules={[{required: true, message: "Tên danh mục không được để trống"}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
        name="description"
        label="Mô tả"
        rules={[{required: true, message: "Mô tả không được để trống"}]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="status" label="Trạng thái" valuePropName='checked'>
          <Switch checkedChildren="Active" uncheckedChildren="Inactive"/>
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <Upload
            beforeUpload={(file)=>{
              setFile(file);
              return false;
            }}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined/>}>Chọn hình ảnh</Button>
          </Upload>
          {file && <p>{file.name}</p>}
        </Form.Item>
      </Form>
    </Modal>
    </>
  )
}
