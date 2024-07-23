import React from "react";

function Banner() {
  return (
    <div>
      <form className="mb-4 p-4 bg-white shadow-md rounded-lg">
        <div className="flex items-center mb-4">
          <label className="mr-4">Hình ảnh:</label>
          <input type="file" className="border px-4 py-2 rounded" />
        </div>
        <div className="flex items-center mb-4">
          <label className="mr-4">Tên Banner:</label>
          <input type="text" className="border px-4 py-2 rounded" />
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
            <th className="py-3 px-6 text-center">Chức năng</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left">
              <img
                src="https://via.placeholder.com/50"
                alt="Banner Image"
                className="w-12 h-12 object-cover"
              />
            </td>
            <td className="py-3 px-6 text-left">
              <span>Banner 1</span>
            </td>
            <td className="py-3 px-6 text-center">
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Delete
              </button>
            </td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left">
              <img
                src="https://via.placeholder.com/50"
                alt="Banner Image"
                className="w-12 h-12 object-cover"
              />
            </td>
            <td className="py-3 px-6 text-left">
              <span>Banner 2</span>
            </td>
            <td className="py-3 px-6 text-center">
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Banner;
