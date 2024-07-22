import React, { useState } from "react";
import AuthModal from "../../../components/base/modal/AuthModal";
import { Cookies } from "react-cookie";

function Header() {
  const [rotate, setRotate] = useState(false);
  const [auth, setAuth] = useState(false);
  const handleCategories = () => {
    setRotate((prevRotate) => !prevRotate);
  };
  const handleAuth = () => {
    setAuth((preAuth) => !preAuth);
  };
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    const cookie = new Cookies();
    cookie.remove("token");
    localStorage.removeItem("userLogin");
    window.location.href = "/";
  };
  const handleUserDetails = null;
  return (
    <>
      <div className="top-0 hidden md:inline">
        <div className="hidden md:block">
          <div
            data-topbanner="true"
            className="top-banner peer relative z-10  h-[47px] bg-white data-[topbanner='true']:block data-[topbanner='false']:hidden md:h-[50px]"
            style={{ backgroundColor: "rgb(102, 207, 253)" }}
          >
            <a href="">
              <picture>
                <source
                  media="(min-width:768px)"
                  srcSet="https://prod-cdn.pharmacity.io/e-com/images/banners/20240708102340-0-Top%20banner_%20Desktop_Freeship.png"
                />
                <source
                  media="(max-width:767px)"
                  srcSet="https://data-service.pharmacity.io/pmc-ecm-webapp-config-api/production/banner/Mobile size_ 375x80-1711532026259.png"
                />
                <img
                  className="absolute left-[50%] h-full w-auto -translate-x-[50%]"
                  src="https://prod-cdn.pharmacity.io/e-com/images/banners/20240708102340-0-Top%20banner_%20Desktop_Freeship.png"
                  alt="Freeship Ahamove - Top banner"
                  loading="lazy"
                  width={500}
                  height={500}
                  quality={100}
                />
              </picture>
            </a>
          </div>
        </div>
        <nav className="relative aspect-[39/10] w-full md:aspect-auto md:bg-primary-500 md:!bg-none">
          <div className="hidden bg-primary-50 md:flex bg-slate-200">
            <div className="container relative flex items-center justify-between space-x-6 py-1  mx-auto">
              <div>
                <div data-state="closed" className="focus-visible:outline-none">
                  <div className="flex items-center whitespace-nowrap text-xs">
                    <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full w-5 h-5 mr-2 p-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          fill="currentColor"
                          d="M.667 3.792V1.318c0-.36.29-.651.65-.651h2.475a.651.651 0 110 1.302H1.969v1.823a.651.651 0 11-1.302 0zM16.682.667h-2.474a.651.651 0 100 1.302h1.823v1.823a.651.651 0 101.302 0V1.318a.651.651 0 00-.65-.651zM3.792 16.032H1.968v-1.823a.651.651 0 10-1.302 0v2.474c0 .36.29.65.65.65h2.475a.651.651 0 100-1.301zm12.89-2.474a.651.651 0 00-.65.65v1.824h-1.824a.651.651 0 100 1.302h2.474c.36 0 .651-.292.651-.651v-2.474a.651.651 0 00-.65-.651zM8.43 3.873V7.78c0 .36-.291.65-.65.65H3.872a.651.651 0 01-.651-.65V3.873c0-.36.291-.65.65-.65H7.78c.36 0 .651.29.651.65zm-1.302.651H4.524V7.13h2.604V4.524zm7.324 3.907h-3.906a.651.651 0 01-.651-.651V3.873c0-.36.292-.65.651-.65h3.906c.36 0 .651.29.651.65V7.78c0 .36-.291.65-.65.65zm-.65-3.907h-2.605V7.13h2.604V4.524zM8.43 10.546v3.907c0 .36-.291.65-.65.65H3.872a.651.651 0 01-.651-.65v-3.906c0-.36.291-.651.65-.651H7.78c.36 0 .651.291.651.65zm-1.302.652H4.524v2.604h2.604v-2.604zm6.486 3.068h-2.23a.651.651 0 01-.65-.651v-2.23c0-.36.29-.651.65-.651h2.23c.36 0 .651.291.651.65v2.23a.65.65 0 01-.65.652zm-.65-2.23h-.929v.928h.928v-.928z"
                        />
                      </svg>
                    </span>
                    <span>Tải ứng dụng</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-flow-col gap-6 text-xs">
                <span className="shrink-0 whitespace-nowrap">
                  Hotline
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="tel:18006821"
                  >
                    <span className="ml-2 font-bold text-primary-500">
                      1800 6821
                    </span>
                  </a>
                </span>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="grid grid-flow-col items-center justify-start gap-1"
                  href="/danh-cho-khach-hang-doanh-nghiep.lp"
                >
                  <p title="Khách hàng doanh nghiệp" className="truncate">
                    Khách hàng doanh nghiệp
                  </p>
                  <div className="relative h-4 w-8">
                    <img
                      className="object-cover"
                      src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/20240520103330-0-20240403091737-0-new-bagde.png"
                      alt="20240520103330-0-20240403091737-0-new-bagde.png"
                      loading="lazy"
                      sizes="(max-width: 768px) 6rem, 6rem"
                    />
                  </div>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="grid grid-flow-col items-center justify-start gap-1"
                  href="/cam-nang-mua-sam"
                >
                  <p title="Deal hot tháng 7 🔥" className="truncate">
                    Deal hot tháng 7 🔥
                  </p>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="grid grid-flow-col items-center justify-start gap-1"
                  href="/goc-suc-khoe"
                >
                  <p title="Góc sức khỏe" className="truncate">
                    Góc sức khỏe
                  </p>
                  <div className="relative h-4 w-8">
                    <img
                      className="object-cover"
                      src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/20240206034536-0-Frame%2024020%20%281%29.png"
                      alt="20240206034536-0-Frame%2024020%20%281%29.png"
                      loading="lazy"
                      sizes="(max-width: 768px) 6rem, 6rem"
                    />
                  </div>
                </a>
                <a
                  target="_self"
                  className="grid grid-flow-col items-center justify-start gap-1"
                  href="/ngay-hoi-online.lp"
                >
                  <p title="Ngày hội Online" className="truncate">
                    Ngày hội Online
                  </p>
                </a>
                <a
                  target="_self"
                  className="grid grid-flow-col items-center justify-start gap-1"
                  href="/giao-nhanh-2h.lp"
                >
                  <p title="Giao nhanh 2h" className="truncate">
                    Giao nhanh 2h
                  </p>
                </a>
                <a
                  target="_self"
                  className="grid grid-flow-col items-center justify-start gap-1"
                  href="/he-thong-cua-hang"
                >
                  <p title="Hệ thống nhà thuốc" className="truncate">
                    Hệ thống nhà thuốc
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-blue-800">
            <div className="container z-20 mx-auto w-full pb-3 pt-4 ">
              <div className="flex items-center md:mb-4">
                <div className="flex w-full flex-col-reverse items-center md:flex-row">
                  <div className="hidden flex-shrink-0 md:flex md:w-[187px] md:justify-center">
                    <a href="/">
                      <img
                        className="h-auto w-[149px] cursor-pointer"
                        src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706161420-0-logo-white-text.svg"
                        alt="Pharmacity Logo"
                      />
                    </a>
                  </div>
                  <div className="grid w-full grid-cols-1">
                    <div className="absolute bottom-[-30px] left-0  w-full px-4 drop-shadow md:relative md:bottom-0 md:mt-[-3px]">
                      <div className="mx-auto w-full">
                        <div
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:r2jc:"
                          data-state="closed"
                        >
                          <div className="relative text-neutral-600">
                            <button
                              data-size="sm"
                              type="button"
                              className="flex justify-center outline-none font-semibold focus:ring-primary-300 text-sm bg-transparent data-[size=sm]:text-sm border-0 hover:bg-0 hover:text-primary-500 focus:text-primary-500 absolute left-0 top-0 z-10 h-10 px-2 py-[10px] text-neutral-900"
                            >
                              <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full w-6 h-6">
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.5 15.4366C15.7936 15.143 16.2697 15.143 16.5634 15.4366L21.7798 20.7163C22.0734 21.01 22.0734 21.4861 21.7798 21.7797C21.4861 22.0734 21.01 22.0734 20.7164 21.7797L15.5 16.5C15.2064 16.2064 15.2064 15.7303 15.5 15.4366Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.5 3.57732C6.67671 3.57732 3.57732 6.67671 3.57732 10.5C3.57732 14.3233 6.67671 17.4227 10.5 17.4227C14.3233 17.4227 17.4227 14.3233 17.4227 10.5C17.4227 6.67671 14.3233 3.57732 10.5 3.57732ZM2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5C19 15.1944 15.1944 19 10.5 19C5.80558 19 2 15.1944 2 10.5Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>

                            <input
                              type="text"
                              placeholder="Tên thuốc, triệu chứng, vitamin và thực phẩm chức năng"
                              className=" w-full border-neutral-500 placeholder:text-neutral-400 focus:ring-neutral-500 focus:border-neutral-700 outline-none p-3.5 search-input flex h-10 items-center justify-start rounded-sm border-0 bg-white py-1 pl-10 text-start text-sm font-medium text-neutral-700"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fixed top-0 z-10 flex w-full min-w-[340px] flex-1 flex-row-reverse gap-3 px-4 py-3 text-right md:static md:-mt-5 md:min-w-[286px] md:flex-row md:pl-1.5 md:pr-0">
                    <div className="grid w-[132px]  grid-cols-3 justify-items-end gap-2 md:w-[88px] md:grid-cols-2">
                      <div className="relative flex h-9 w-9 items-center justify-center rounded-full border-0 bg-white p-2 md:!h-10 md:!w-10  md:bg-transparent md:text-white hover:md:bg-transparent hover:md:text-white focus:md:text-white">
                        <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full w-6 h-6">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.95393 3.1172C8.30955 1.76158 10.1482 1 12.0653 1C13.9824 1 15.8211 1.76158 17.1767 3.1172C18.5323 4.47282 19.2939 6.31144 19.2939 8.22857V12.8155C19.3203 14.9394 19.9145 17.0177 21.0149 18.8345C21.1645 19.0816 21.1694 19.3901 21.0276 19.6417C20.8858 19.8933 20.6194 20.049 20.3306 20.049H3.8C3.51119 20.049 3.2448 19.8933 3.10303 19.6417C2.96125 19.3901 2.9661 19.0816 3.11572 18.8345C4.21611 17.0176 4.81032 14.9394 4.83673 12.8155V8.22857C4.83673 6.31144 5.59831 4.47282 6.95393 3.1172ZM12.0653 2.6C10.5725 2.6 9.14087 3.19301 8.0853 4.24857C7.02974 5.30413 6.43673 6.73578 6.43673 8.22857V12.83C6.41325 14.7801 5.96779 16.6963 5.1375 18.449H18.9931C18.1628 16.6963 17.7174 14.7801 17.6939 12.83L17.6938 12.8204L17.6939 8.22857C17.6939 6.73578 17.1009 5.30413 16.0453 4.24857C14.9897 3.19301 13.5581 2.6 12.0653 2.6Z"
                              fill="currentColor"
                            />
                            <path
                              d="M9.46999 21.0857C9.66082 21.6213 10.0127 22.0848 10.4774 22.4125C10.942 22.7402 11.4967 22.9161 12.0653 22.9161C12.6339 22.9161 13.1886 22.7402 13.6532 22.4125C14.1179 22.0848 14.4698 21.6213 14.6606 21.0857H9.46999Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="absolute bottom-0 left-0 right-0 top-0">
                          <div data-state="closed">
                            <button
                              data-size="sm"
                              type="button"
                              className="flex justify-center outline-none font-semibold border-neutral-200 hover:bg-bg-white hover:text-primary-500 focus:text-primary-500 text-sm px-4 py-2 h-9 rounded-full data-[size=xs]:w-8 data-[size=xs]:h-8 data-[size=xs]:p-1.5 data-[size=sm]:w-9 data-[size=sm]:h-9 data-[size=sm]:p-2 data-[size=md]:w-12 data-[size=md]:h-12 data-[size=md]:p-2.5 data-[size=lg]:w-13.5 data-[size=lg]:h-13.5 data-[size=lg]:p-2.5 relative border-0 bg-transparent"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="relative flex h-9 w-9 items-center justify-center rounded-full border-0 bg-white p-2 md:!h-10 md:!w-10  md:bg-transparent md:text-white hover:md:bg-transparent hover:md:text-white focus:md:text-white">
                        <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full w-6 h-6">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.27236 19.3721C6.27946 19.3721 5.47455 20.1837 5.47455 21.1849C5.47455 22.1861 6.27946 22.9977 7.27236 22.9977C8.26526 22.9977 9.07017 22.1861 9.07017 21.1849C9.07017 20.1837 8.26526 19.3721 7.27236 19.3721ZM19.5774 19.3722C18.5845 19.3722 17.7796 20.1838 17.7796 21.185C17.7796 22.1862 18.5845 22.9978 19.5774 22.9978C20.5703 22.9978 21.3752 22.1862 21.3752 21.185C21.3752 20.1838 20.5703 19.3722 19.5774 19.3722Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1 1.0022H5.44999L6.08938 5.83638H22.9978L21.1882 14.9619C20.9305 16.2613 19.7991 17.1967 18.4853 17.1967H8.31206C6.9311 17.1967 5.76222 16.1657 5.58004 14.7841L3.98096 2.69416H1V1.0022ZM6.31317 7.52835L7.24327 14.5605C7.31441 15.1007 7.77167 15.5047 8.31206 15.5047H18.4853C18.999 15.5047 19.4419 15.1388 19.5428 14.6302C19.5428 14.6302 19.5428 14.6302 19.5428 14.6302L20.9511 7.52835H6.31317Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="absolute bottom-0 left-0 right-0 top-0">
                          <button
                            data-size="sm"
                            type="button"
                            className="flex justify-center outline-none font-semibold border-neutral-200 hover:bg-bg-white hover:text-primary-500 focus:text-primary-500 text-sm px-4 py-2 h-9 rounded-full data-[size=xs]:w-8 data-[size=xs]:h-8 data-[size=xs]:p-1.5 data-[size=sm]:w-9 data-[size=sm]:h-9 data-[size=sm]:p-2 data-[size=md]:w-12 data-[size=md]:h-12 data-[size=md]:p-2.5 data-[size=lg]:w-13.5 data-[size=lg]:h-13.5 data-[size=lg]:p-2.5 relative border-0 bg-transparent"
                          />
                        </div>
                      </div>
                    </div>
                    {userLogin ? (
                      <>
                        <div className="relative flex-1 md:flex md:justify-end">
                          <button
                            data-size="sm"
                            type="button"
                            className="relative justify-center outline-none font-semibold bg-white border border-neutral-200 hover:bg-bg-white hover:text-primary-500 focus:text-primary-500 text-sm px-4 py-2 h-9 items-center rounded-full flex"
                            onClick={toggleDropdown}
                          >
                            <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full m-[-1] mr-1 h-6 w-6 px-0">
                              <svg
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20.0711 4.92895C18.1823 3.0402 15.6711 2 13 2C10.3289 2 7.8177 3.0402 5.92891 4.92895C4.0402 6.8177 3 9.32891 3 12C3 14.6711 4.0402 17.1823 5.92891 19.0711C7.8177 20.9598 10.3289 22 13 22C15.6711 22 18.1823 20.9598 20.0711 19.0711C21.9598 17.1823 23 14.6711 23 12C23 9.32891 21.9598 6.8177 20.0711 4.92895ZM13 20.8281C10.3879 20.8281 8.03762 19.6874 6.41984 17.8785C7.42277 15.2196 9.99016 13.3281 13 13.3281C11.0584 13.3281 9.48438 11.7541 9.48438 9.8125C9.48438 7.87086 11.0584 6.29688 13 6.29688C14.9416 6.29688 16.5156 7.87086 16.5156 9.8125C16.5156 11.7541 14.9416 13.3281 13 13.3281C16.0098 13.3281 18.5772 15.2196 19.5802 17.8785C17.9624 19.6874 15.6121 20.8281 13 20.8281Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            <span className="text-[13px]">
                              {userLogin.username}
                            </span>
                          </button>
                          {isDropdownOpen && (
                            <div className="absolute top-9 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                              <button
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={handleUserDetails}
                              >
                                Thông tin cá nhân
                              </button>
                              <button
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={null}
                              >
                                Lịch sử đơn hàng
                              </button>
                              <button
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={null}
                              >
                                Mã giảm giá
                              </button>
                              <button
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={null}
                              >
                                Địa chỉ nhận hàng
                              </button>
                              <hr></hr>
                              <button
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={handleLogout}
                              >
                                Đăng xuất
                              </button>
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className=" relative flex-1 md:flex md:justify-end ">
                          {/* <span className="border-color-white absolute bottom-[6px] left-0 top-[6px] hidden border-l-[1px] md:inline-block " /> */}
                          <button
                            data-size="sm"
                            type="button"
                            className="relative justify-center outline-none font-semibold bg-white border border-neutral-200 hover:bg-bg-white hover:text-primary-500 focus:text-primary-500 text-sm px-4 py-2 h-9 items-center rounded-full flex "
                            onClick={handleAuth}
                          >
                            <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full m-[-1] mr-1 h-6 w-6 px-0">
                              <svg
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20.0711 4.92895C18.1823 3.0402 15.6711 2 13 2C10.3289 2 7.8177 3.0402 5.92891 4.92895C4.0402 6.8177 3 9.32891 3 12C3 14.6711 4.0402 17.1823 5.92891 19.0711C7.8177 20.9598 10.3289 22 13 22C15.6711 22 18.1823 20.9598 20.0711 19.0711C21.9598 17.1823 23 14.6711 23 12C23 9.32891 21.9598 6.8177 20.0711 4.92895ZM13 20.8281C10.3879 20.8281 8.03762 19.6874 6.41984 17.8785C7.42277 15.2196 9.99016 13.3281 13 13.3281C11.0584 13.3281 9.48438 11.7541 9.48438 9.8125C9.48438 7.87086 11.0584 6.29688 13 6.29688C14.9416 6.29688 16.5156 7.87086 16.5156 9.8125C16.5156 11.7541 14.9416 13.3281 13 13.3281C16.0098 13.3281 18.5772 15.2196 19.5802 17.8785C17.9624 19.6874 15.6121 20.8281 13 20.8281Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            <span className="text-[13px]">
                              Đăng nhập/ Đăng ký
                            </span>
                          </button>
                          {auth && <AuthModal onClose={handleAuth} />}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="hidden grid-cols-[187px_1fr] items-center md:grid md:gap-4 lg:gap-4">
                <div>
                  <div className="category">
                    <div
                      className="group"
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r2je:"
                      data-state="closed"
                    >
                      <button
                        data-size="sm"
                        type="button"
                        className="relative outline-none font-semibold bg-white border border-neutral-200 hover:bg-bg-white hover:text-primary-500 focus:text-primary-500 py-2 h-9 flex w-[187px] items-center justify-start rounded-sm px-4 text-sm"
                      >
                        <span className="flex w-full items-center">
                          <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full w-5 h-5">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.2188 11.2222H2.78125C2.34977 11.2222 2 11.5704 2 11.9999C2 12.4295 2.34977 12.7777 2.78125 12.7777H21.2188C21.6502 12.7777 22 12.4295 22 11.9999C22 11.5704 21.6502 11.2222 21.2188 11.2222Z"
                                fill="currentColor"
                              />
                              <path
                                d="M21.2188 5H2.78125C2.34977 5 2 5.34821 2 5.77777C2 6.20733 2.34977 6.55554 2.78125 6.55554H21.2188C21.6502 6.55554 22 6.20733 22 5.77777C22 5.34821 21.6502 5 21.2188 5Z"
                                fill="currentColor"
                              />
                              <path
                                d="M21.2188 17.4446H2.78125C2.34977 17.4446 2 17.7928 2 18.2223C2 18.6519 2.34977 19.0001 2.78125 19.0001H21.2188C21.6502 19.0001 22 18.6519 22 18.2223C22 17.7928 21.6502 17.4446 21.2188 17.4446Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          <span className="ml-2 select-none text-base">
                            Danh mục
                          </span>
                        </span>
                        <span
                          className={`p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full h-[calc(14rem/16)] w-[calc(14rem/16)] transition duration-200 ${
                            rotate ? "rotate-180" : "rotate-0"
                          }`}
                          onClick={handleCategories}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.7138 16.7077L21.7048 7.71374C22.0984 7.31909 22.0984 6.6797 21.7048 6.28406C21.3111 5.88941 20.6717 5.88941 20.2781 6.28406L12.0005 14.5646L3.72293 6.28505C3.32928 5.89041 2.68989 5.89041 2.29524 6.28505C1.90159 6.6797 1.90159 7.32009 2.29524 7.71474L11.2861 16.7087C11.6757 17.0973 12.3251 17.0973 12.7138 16.7077Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative text-sm text-while">
                  {/* <div className="swiper swiper-initialized swiper-horizontal swiper-free-mode category-playlist w-full swiper-backface-hidden">
                    <div
                      className="swiper-wrapper"
                      style={{
                        transform: "translate3d(-705.036px, 0px, 0px)",
                        transitionDuration: "0ms",
                        transitionDelay: "0ms",
                      }}
                    >
                      <div className="swiper-slide !w-fit md:mr-3 lg:mr-5">
                        <a className="flex items-center" href="">
                          <span className="text-base font-medium">Thuốc</span>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-button-prev" />
                    <div className="swiper-button-next swiper-button-disabled" />
                  </div>
                  <button
                    data-size="sm"
                    type="button"
                    className="outline-none font-semibold focus:ring-primary-300 text-sm data-[size=sm]:text-sm border-0 hover:bg-0 absolute top-1/2 -translate-y-1/2 z-[1] hidden h-5 py-[2px] px-0 w-10 bg-transparent md:flex text-white hover:text-white focus:text-white left-0 justify-start bg-gradient-to-r from-primary-500 via-primary-500/90 to-transparent"
                  >
                    <span className="p-icon inline-flex align-[-0.125em] max-h-full max-w-full w-6 h-6 rotate-180 justify-end">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.2137 11.2862L8.21971 2.29524C7.82506 1.90159 7.18567 1.90159 6.79002 2.29524C6.39537 2.68889 6.39537 3.32829 6.79002 3.72194L15.0706 11.9995L6.79102 20.2771C6.39637 20.6707 6.39637 21.3101 6.79102 21.7048C7.18567 22.0984 7.82606 22.0984 8.22071 21.7048L17.2147 12.7139C17.6032 12.3243 17.6032 11.6749 17.2137 11.2862Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
