import { Pagination, Select, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { homePageProducts, homePageProductsbyCategory } from '../../services/ProductService';
import CardProduct from '../../components/product/CardProduct';
import { changePage } from '../../redux/slice/ProductSlice';
import axios from 'axios';

function ListProduct() {
    const dispatch = useDispatch();
    const { data, loading, number, size, sortBy, sortDir, total } = useSelector((state) => state.product);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    console.log(data, loading, number, size, sortBy, sortDir, total);


    useEffect(() => {
      if(selectedCategory) {
        dispatch(homePageProductsbyCategory({categoryId: selectedCategory, page : number, size : size , sort : sortBy , direction : sortDir}))
      }else{
        dispatch(homePageProducts({ searchPro: '', page: number, size :size, sort :sortBy, direction :sortDir}));
      }
  }, [dispatch, selectedCategory, number, size, sortBy, sortDir]);

  const handlePageChange = (page, pageSize) => {
      dispatch(changePage({ searchPro: '', page: page - 1, size: pageSize, sortBy : sortBy, sortDir :sortDir }));
  };
  useEffect(() => {
    const findCategories = async () => {
      try {
        const [categoryRes] = await Promise.all([
          axios.get("http://localhost:8080/api/v1/products/categories", {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
          }),
        ]);
        setCategories(Array.isArray(categoryRes.data.data) ? categoryRes.data.data : []);
      } catch (error) {
        console.log(error);
      }
    };
    findCategories();
  }, []);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    if (value){
      dispatch(homePageProductsbyCategory({categoryId : selectedCategory, page : number, size : size, sort: sortBy,direction: sortDir}))
    }else{
      dispatch(homePageProducts({ searchPro: '', page: number, size, sort: sortBy, direction: sortDir }));
    }
  }
    return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="ml-20 mr-20">
        <div className="panel-heading">
          <h1 className='text-3xl text-blue-500 '>Danh sách sản phẩm tại Pharmacity</h1>
        </div>
        <div id="list-product">
        <Select
            placeholder="Filter by Category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            style={{ width: 200, marginBottom: 16 }}
            >
            <Option value={null}>All Categories</Option>
            {categories.map((category) => (
              <Option key={category.id}>
                {category.categoryName}
              </Option>
            ))}
        </Select>
          {loading === 'PENDING' ? (
              <Spin />
            ) : (
            <>
            <div className="grid grid-cols-3 mb-3">
              {data.map((item) => (
              <CardProduct key={item.id} item={item} />
              ))}
            </div>
              <Pagination
              className='mb-3'
              current={number + 1}
              pageSize={size}
              total={total}
              onChange={handlePageChange}
              />
            </>
            )}
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
