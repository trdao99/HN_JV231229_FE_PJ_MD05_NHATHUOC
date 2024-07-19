// User Component
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { block, getUser, searchUser } from "../../service/AdminService";
import moment from "moment/moment";
import { Button, Pagination, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function User() {
  const dispatch = useDispatch();
  const { data, loading, error, total, pageSize } = useSelector(
    (state) => state.admin
  );
  const [sort, setSort] = useState("id");
  const [page, setPage] = useState(0);
  useEffect(() => {
    dispatch(getUser({ sort, page: page - 1 }));
  }, [dispatch, sort, page]);

  const handleBlockUnlock = (id) => {
    dispatch(block(id));
  };

  const handleChange = (value) => {
    console.log(value);
    setSort(value);
    // dispatch(getUser({ sort }));
  };

  const handleChangePagination = (page) => {
    setPage(page);
    // dispatch(getUser({ page , sort}));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchUser(e.target[0].value));
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <form className="m-5 " onSubmit={handleSearch}>
          <input
            type="text"
            className="size-80 h-8 rounded-lg bg-slate-400 mx-1 text-white placeholder:text-white text-center"
            placeholder="Nhập tên nhân viên muốn tìm kiếm"
          />
          {error ? <span>{error.code}</span> : ""}

          <Button
            htmlType="submit"
            icon={<SearchOutlined />}
            iconPosition="end"
          >
            Search
          </Button>
        </form>

        <div>
          <span className="mx-1">Sắp xếp theo :</span>
          <Select
            defaultValue="id"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "username",
                label: "Tên",
              },
              {
                value: "updatedAt ",
                label: "Ngày tạo",
              },
              {
                value: "id",
                label: "id",
              },
              {
                value: "point",
                label: "điểm tích lũy",
              },
            ]}
          />
        </div>
      </div>
      <table className="w-full table-auto ">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-center">ID</th>
            <th className="px-4 py-2 text-center">Avatar</th>
            <th className="px-4 py-2 text-center">Created At</th>
            <th className="px-4 py-2 text-center">Email</th>
            <th className="px-4 py-2 text-center">Is Deleted</th>
            <th className="px-4 py-2 text-center">Phone</th>
            <th className="px-4 py-2 text-center">Point</th>
            <th className="px-4 py-2 text-center">Status</th>
            <th className="px-4 py-2 text-center">Updated At</th>
            <th className="px-4 py-2 text-center">Username</th>
            <th className="px-4 py-2 text-center">Roles</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr
              key={user.id}
              className="border-b hover:bg-gray-100 transition-colors duration-300"
            >
              <td className="px-4 py-2 text-center">{user.id}</td>
              <td className="px-4 py-2 text-center">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="max-w-[50px] mx-auto rounded-full"
                  />
                ) : (
                  "N/A"
                )}
              </td>
              <td className="px-4 py-2 text-center">
                {user.createdAt ? moment(user.createdAt).format("LLLL") : "N/A"}
              </td>
              <td className="px-4 py-2 text-center">{user.email || "N/A"}</td>
              <td className="px-4 py-2 text-center">
                {user.isDeleted ? "Yes" : "No"}
              </td>
              <td className="px-4 py-2 text-center">{user.phone || "N/A"}</td>
              <td className="px-4 py-2 text-center">{user.point || "N/A"}</td>
              <td
                className={`px-4 py-2 text-center ${
                  user.status ? "text-blue-600" : "text-red-600"
                }`}
              >
                {user.status ? "Active" : "Inactive"}
              </td>
              <td className="px-4 py-2 text-center">
                {user.updatedAt ? moment(user.updatedAt).format("LLLL") : "N/A"}
              </td>
              <td className="px-4 py-2 text-center">
                {user.username || "N/A"}
              </td>
              <td className="px-4 py-2 text-center">
                <ul>
                  {user.roles.map((role) => (
                    <li key={role.id}>{role.name || "N/A"}</li>
                  ))}
                </ul>
              </td>
              <td className="px-4 py-2 text-center">
                <button
                  className={`px-2 py-1 m-2 rounded-md text-white ${
                    user.status ? "bg-red-400" : "bg-green-400"
                  }`}
                  onClick={() => handleBlockUnlock(user.id)}
                >
                  {user.status ? "Block" : "Unlock"}
                </button>
                <button
                  className="px-2 py-1 m-2 rounded-md bg-red-400 text-white ml-2"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        defaultCurrent={1}
        total={total}
        className="mx-auto w-1/2 my-10"
        onChange={handleChangePagination}
        pageSize={pageSize}
      />
    </>
  );
}

export default User;
