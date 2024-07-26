import React, { useEffect } from "react";
import Footer from "../../layouts/user/footer/Footer";
import Header from "../../layouts/user/header/Header";
import "./Home.css";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../../services/AdminService";
import ListProduct from "./ListProduct";

function Home() {
  const { data, loading, error } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  return (
    <>
      <Header />
      <body>
        <Carousel autoplay style={{marginTop:10, marginBottom:40 }}>
          {data.map((item) => (
            <div key={item.id} style={{ textAlign: "center" }}>
              <img
                src={item.image}
                alt={item.bannerName}
                style={{
                  height:"330px",
                  objectFit:"fill",
                  width: "80%",
                  marginLeft: "150px",
                  display: "inline-block",
                }}
              />
            </div>
          ))}
        </Carousel>
        <ListProduct/>
      </body>
      <Footer />
    </>
  );
}

export default Home;
