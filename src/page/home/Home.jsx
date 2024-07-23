import React from "react";
import Footer from "../../layouts/user/footer/Footer";
import Header from "../../layouts/user/header/Header";
import "./Home.css";
import { Carousel } from "antd";
function Home() {
  return (
    <>
      <Header />
      <body>
        <Carousel autoplay>
          <div>
            <img src="image1.jpg" alt="Image 1" />
          </div>
          <div>
            <img src="image2.jpg" alt="Image 2" />
          </div>
          <div>
            <img src="image3.jpg" alt="Image 3" />
          </div>
          <div>
            <img src="image4.jpg" alt="Image 4" />
          </div>
        </Carousel>
      </body>
      <Footer />
    </>
  );
}

export default Home;
