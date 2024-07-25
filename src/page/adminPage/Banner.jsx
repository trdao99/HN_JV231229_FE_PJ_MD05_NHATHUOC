import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBanners,
  setBanners,
  uploadBanner,
} from "../../services/AdminService";

function Banner() {
  const dispatch = useDispatch();
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerName, setBannerName] = useState("");
  const [bannerDescription, setBannerDescription] = useState("");
  const { data, loading, error } = useSelector((state) => state.admin);

  const handleUploadBanner = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", bannerImage);
    formData.append("bannerName", bannerName);
    formData.append("description", bannerDescription);
    dispatch(uploadBanner(formData)).then(() => {
      dispatch(getBanners());
    });
  };

  const handleImageChange = (e) => {
    setBannerImage(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setBannerName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setBannerDescription(e.target.value);
  };

  useEffect(() => {
    dispatch(getBanners());
  }, []);

  const handleSetBanner = (id) => {
    dispatch(setBanners(id));
  };

  return (
    <div>
      <form
        className="mb-4 p-4 bg-white shadow-md rounded-lg"
        onSubmit={handleUploadBanner}
      >
        <div className="flex items-center mb-4">
          <label className="mr-4">Hình ảnh:</label>
          <input
            type="file"
            className="border px-4 py-2 rounded"
            onChange={handleImageChange}
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="mr-4">Tên Banner:</label>
          <input
            type="text"
            className="border px-4 py-2 rounded"
            value={bannerName}
            onChange={handleNameChange}
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="mr-4">Miêu tả:</label>
          <input
            type="text"
            className="border px-4 py-2 rounded"
            value={bannerDescription}
            onChange={handleDescriptionChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Banner
        </button>
      </form>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Hình ảnh</th>
            <th className="py-3 px-6 text-left">Tên Banner</th>
            <th className="py-3 px-6 text-left">Miêu tả</th>
            <th className="py-3 px-6 text-center">Chức năng</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((banner, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">
                <img
                  src={banner.image}
                  alt="Banner Image"
                  className="w-12 h-12 object-cover"
                />
              </td>
              <td className="py-3 px-6 text-left">
                <span>{banner.bannerName}</span>
              </td>
              <td className="py-3 px-6 text-left">
                <span>{banner.description}</span>
              </td>
              <td className="py-3 px-6 text-center">
                {banner.status ? (
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2"
                    onClick={() => handleSetBanner(banner.id)}
                  >
                    Turn Off
                  </button>
                ) : (
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2"
                    onClick={() => handleSetBanner(banner.id)}
                  >
                    Turn On
                  </button>
                )}
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Banner;
