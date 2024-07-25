import React, { useEffect } from "react";
import Footer from "../../layouts/user/footer/Footer";
import Header from "../../layouts/user/header/Header";
import "./Home.css";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../../services/AdminService";

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
        <Carousel autoplay style={{ height: "200px" }}>
          {data.map((item) => (
            <div key={item.id} style={{ textAlign: "center" }}>
              <img
                src={item.image}
                alt={item.bannerName}
                style={{
                  maxHeight: "200px",
                  width: "full",
                  display: "inline-block",
                }}
              />
            </div>
          ))}
        </Carousel>
      </body>
      <Footer />
    </>
  );
}

export default Home;
