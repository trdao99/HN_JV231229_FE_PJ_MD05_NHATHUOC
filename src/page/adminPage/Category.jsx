 import { Button, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategory, findAllCategory } from '../../services/categoryService';
 
 export default function Category() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.category);
  // const mystate = useSelector((state) => state.category);
  const [idDelete, setIdDelete] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(()=>{
    dispatch(findAllCategory());
  },[]);

   const handleShowModalDelete = (id) => {
     setIsShowModal(true);
     setIdDelete(id);
   };

   const handleCloseModal = () => {
     setIsShowModal(false);
     setIdDelete(null);
   };

   const handleShowForm = () => {
     setShowForm(true);
   };

   const handleDelete = () => {
    dispatch(deleteCategory(idDelete));
    setIsShowModal(false);
   };

   const handleCloseForm = () => {
     setShowForm(false);
   }

   return (
     <>
     {
      <Modal
      okText="Xác nhận"
      cancelText="Hủy"
      title="Xác nhận"
      open={isShowModal}
      onCancel={handleCloseModal}
      centered={true}
      onOk={handleDelete}
      maskClosable={false}
      >
        Bạn có chắc muốn xóa danh mục này?
      </Modal>
     }
     <div className=''>
       <div className='text-4xl mb-5'>Category Page</div>
       <Button type='primary' onClick={()=>handleShowForm()}>Thêm danh mục</Button>
       <table border={1} className='w-full border text-center'>
        <thead className='bg-[#D1D5DB]'>
          <tr>
            <th>#</th>
            <th>Tên danh mục</th>
            <th>Ngày thêm</th>
            <th>Mô tả</th>
            <th>Hình ảnh</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {loading === "pending" ? (
          <>
           <tr><td colSpan='7'>Loading...</td></tr>
          </>
          ) : (
            <></>
          )}
          {data?.map((category,index) => {
            return (
          <tr key={category.id}>
            <td>{index+1}</td>
            <td>{category.categoryName}</td>
            <td>{category.createdAt}</td>
            <td>{category.description}</td>
            <td>{category.image}</td>
            <td>{category.status ? "Hoạt động" : "Ngưng hoạt động"}</td>
            <td>
              <Button type='primary'>Sửa</Button>
              <Button type='danger' onClick={()=>handleDelete(category.id)}>Xóa</Button>
            </td>
          </tr>
            )
          })}
        </tbody>
       </table>
      </div>
     </>
   )
 }
 