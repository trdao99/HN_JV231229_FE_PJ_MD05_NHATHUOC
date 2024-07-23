import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { storage } from '../../uploads/firebase.config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { formAxios } from '../../api';

export default function FormAdd({ onClose }) {
    const dispatch = useDispatch();
    const [category, setCategory] = useState({
        categoryName:"",
        createdAt:undefined,
        description:"",
        image:"",
        status:null
    });

    const [filePrev,setFilePrev] = useState("");
    const [file,setFile] = useState("");
    const [uploadProcess,setUploadProcess] = useState(0);
    const [downloadURL, setDownloadURL] = useState("");

    const [nameError,setNameError] = useState("");
    const [descriptionError,setDescriptionError] = useState("");
    const [imageError, setImageError] = useState("");
    const [statusError, setStatusError] = useState("");
    const [createdAtError, setCreatedAtError] = useState("");

    const validateData = (name , value) => {
      let isValid
    }


    const handleChangeFile = (e)=>{
     const selectedFile = e.target.files[0]; //lấy dữ liệu từ input

     const urlPrev = URL.createObjectURL(selectedFile);

     //cập nhật lại đường dẫn prev cho hình ảnh
     setFilePrev(urlPrev);

     //cập nhật lại dữ liệu từ input cho file
     setFile(selectedFile);
    }

    const handleUpload = (e)=>{
      if(!file){
        return;
      }

      //lưu trữ dữ liệu lên firebase

      //xác định vị trí cần lưu trên firebase
      const storageRef = ref(storage, file.name);

      //taọ tiến trình cho mỗi hành động upload
      const uploadTask = uploadBytesResumable(storageRef,file);

      uploadTask.on(
        "state_changed",
        (snapshort)=>{
          const process = 
          (snapshort.bytesTransferred / snapshort.totalBytes) *100;
          setUploadProcess(process);
        },
        (error)=>{
          console.log("đã có lỗi : ",error);
        },
        ()=>{
          //lấy url về
          getDownloadURL(uploadTask.snapshot.ref)
          .then((response) => setDownloadURL(response))
          .catch((error) => console.log("lỗi khi lấy url : ", error));
        }
      )

    }
    
  return (
    <div className='flex justify-center items-center h-screen absolute '>
      <form onSubmit={handleAddCategory} className='flex flex-col gap-4 w-[400px]'>
        <div>
          <label>Tên danh mục:</label>
          <input type="text" value={category.categoryName} onChange={(e) => setCategory({...category, categoryName: e.target.value })} />
        </div>
        <div>
          <label htmlFor="">Hình ảnh</label><br />
          {filePrev && <img height={100} width={150} src={filePrev} alt="" />}
          <input type="file" name="" id="" onChange={handleChangeFile} />
          <button onClick={handleUpload}>Upload Ảnh</button>
        </div>

        
      </form>
    </div>
  )
}
