import React from "react";
import Header from "../../layouts/user/header/Header";
import Footer from "../../layouts/user/footer/Footer";

function ProductDetail() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 items-start md:gap-6 lg:grid-cols-2 xl:grid-cols-2 w-2/3 ml-10">
        <div> để ảnh sản phẩm </div>
        <div>
          <div className="flex flex-col">
            <div className="md:mb-2" />
            <div className="mb-4 block bg-primary-50 px-2 py-1.5 text-center text-xs font-medium text-primary-400 md:mb-0 md:hidden">
              Sản phẩm 100% chính hãng, mẫu mã có thể thay đổi theo lô hàng
            </div>
            <div className="flex flex-col px-4 md:px-0">
              <div className="grid grid-cols-[1fr,calc(24rem/16)] gap-4 md:grid-cols-1 mb-2">
                <h1
                  title="Viên uống Pharmacity Advanced Formula Mutivitamin & Minerals bổ sung vitamin, khoáng chất (60 viên)"
                  className="line-clamp-3 text-base font-semibold text-neutral-900 md:text-xl md:font-bold"
                >
                  Viên uống Pharmacity Advanced Formula Mutivitamin &amp;
                  Minerals bổ sung vitamin, khoáng chất (60 viên)
                </h1>
              </div>
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="flex content-start items-center space-x-1 py-[calc(2rem/16)]">
                  <p className="text-sm leading-5 text-neutral-600">P21967</p>
                  <span className="h-1 w-1 rounded-full bg-neutral-600" />
                  <a
                    className="text-sm leading-5 text-primary-500"
                    href="/thuong-hieu/pharmacity"
                  >
                    Thương hiệu: Pharmacity
                  </a>
                </div>
              </div>
              <div className="flex flex-col flex-wrap items-start justify-start animate-in md:flex-row md:items-center mb-1.5 md:mb-1">
                <h3 className="text-[28px] leading-[36px] order-2 shrink-0 whitespace-nowrap pt-1 font-bold text-primary-500 md:order-1 md:me-4 md:pt-0">
                  325.000&nbsp;₫/Chai
                </h3>
                <div className="order-1 flex items-center justify-start md:order-2" />
              </div>
              <p className="text-[12px] leading-[20px] font-normal text-neutral-700 md:text-sm mb-1.5 md:mb-1">
                Giá đã bao gồm thuế. Phí vận chuyển và các chi phí khác (nếu có)
                sẽ được thể hiện khi đặt hàng.
              </p>
              <div className="flex items-center justify-start space-x-1 md:space-x-2 mb-3 md:mb-1">
                <span className="text-xs font-semibold text-gold-500 md:text-sm">
                  Tích lũy từ 3.250 P-Xu vàng
                </span>
                <div className="[&>[data-radix-popper-content-wrapper]]:!z-[9]">
                  <div data-state="closed">
                    <button
                      data-size="sm"
                      type="button"
                      className="relative flex justify-center outline-none font-semibold focus:ring-primary-300 text-sm bg-transparent data-[size=sm]:text-sm text-inherit border-0 hover:bg-0 hover:text-primary-500 focus:text-primary-500 h-3 p-0 md:h-4"
                    >
                      <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full h-3 w-3 items-center text-neutral-700 md:h-4 md:w-4">
                        <svg
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5 2.5C7 2.5 2.5 7 2.5 12.5C2.5 18 7 22.5 12.5 22.5C18 22.5 22.5 18 22.5 12.5C22.5 7 18 2.5 12.5 2.5ZM12.5 18.75C11.81 18.75 11.25 18.19 11.25 17.5C11.25 16.81 11.81 16.25 12.5 16.25C13.19 16.25 13.75 16.81 13.75 17.5C13.75 18.19 13.19 18.75 12.5 18.75ZM14.5288 12.615C13.9075 13.1488 13.75 13.3287 13.75 13.75C13.75 14.4412 13.19 15 12.5 15C11.81 15 11.25 14.4412 11.25 13.75C11.25 12.1325 12.2437 11.28 12.9025 10.7162C13.5237 10.185 13.6812 10.0037 13.6812 9.58375C13.6812 9.355 13.6813 8.75 12.5013 8.75C11.9563 8.78 11.375 9.03 10.9288 9.45125C10.4275 9.92375 9.635 9.9 9.16125 9.4C8.6875 8.8975 8.71 8.10625 9.2125 7.6325C10.09 6.80625 11.2337 6.315 12.4362 6.2525H12.44C14.705 6.2525 16.1812 7.59125 16.1812 9.585C16.1812 11.2013 15.1875 12.0538 14.53 12.6163L14.5288 12.615Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex content-center justify-between mb-3 md:mb-4">
                <div className="flex items-center justify-start space-x-1 ">
                  <div className="flex items-center justify-start">
                    <div className="h-6 w-6 ">
                      <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full w-4 h-4 text-neutral-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={24}
                          fill="none"
                          viewBox="0 0 25 24"
                        >
                          <path
                            fill="currentColor"
                            d="M17.22 2a6.2 6.2 0 0 0-4.72 2.16A6.2 6.2 0 0 0 7.78 2a6.26 6.26 0 0 0-4.55 10.58l8.55 8.9a1 1 0 0 0 1.44 0l8.55-8.9h.01A6.26 6.26 0 0 0 17.22 2Z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex items-center justify-start space-x-1 text-sm">
                      <p className="text-neutral-900">25.0k</p>
                    </div>
                  </div>
                  <span className="h-[12px] w-[1px] bg-neutral-500" />
                  <p className="text-sm text-neutral-900">Đã bán 8.0k</p>
                </div>
              </div>
              <div className="bg-divider h-[1px] mb-3 hidden md:mb-4 md:flex" />
              <div className="mb-3 md:mb-4">
                <div className="space-y-3">
                  <label
                    className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-fit text-sm font-semibold text-neutral-900"
                    htmlFor=":r72:-form-item"
                  >
                    Phân loại sản phẩm
                  </label>
                  <div
                    className="flex flex-wrap gap-2"
                    id=":r72:-form-item"
                    aria-describedby=":r72:-form-item-description"
                    aria-invalid="false"
                  >
                    <button
                      data-size="sm"
                      type="button"
                      className="relative flex justify-center outline-none font-semibold bg-white border border-solid border-primary-500 text-primary-500 disabled:border-neutral-200 disabled:text-neutral-600 disabled:!bg-white text-sm px-4 py-2 items-center rounded-lg h-8 min-w-[82px] md:h-8 !bg-primary-50 hover:border-primary-500 hover:text-primary-500 md:hover:border-primary-200 md:hover:text-primary-200"
                    >
                      <span>Chai</span>
                    </button>
                  </div>
                </div>
              </div>
              <div />
              <div className="-mx-4 mb-4 grid gap-4 md:mx-0">
                <div className="grid gap-2">
                  <div className="grid grid-flow-col justify-between pb-2 pe-4 md:pe-0">
                    <h4 className="text-[16px] leading-[24px] relative whitespace-nowrap bg-secondary-500 px-4 font-semibold text-white">
                      Khuyến mãi
                      <span className="absolute right-0 top-0 block h-0 w-0 border-b-[12px] border-r-[8px] border-t-[12px] border-white border-b-transparent border-t-transparent" />
                    </h4>
                  </div>
                  <div className="grid gap-2 px-4 md:px-0">
                    <div className="grid grid-flow-col items-start justify-start gap-1.5">
                      <div className="relative h-6 w-6 shrink-0">
                        <img
                          className="object-cover"
                          src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/20240222060820-0-Group.png"
                          alt="Icon of Mua 1 tặng 1 -  01-31.07"
                          loading="lazy"
                          width={500}
                          height={500}
                          sizes="(max-width: 768px) 3rem, 3rem"
                        />
                      </div>
                      <p className="text-[12px] leading-[20px] first-letter:uppercase md:text-sm">
                        <span className="inline pe-1 font-semibold">
                          Mua 1 tặng 1 - 01-31.07
                        </span>
                      </p>
                    </div>
                    <div className="h-[1px] border-b bg-divider border-solid md:border-dashed" />
                    <div className="grid grid-flow-col items-start justify-start gap-1.5">
                      <div className="relative h-6 w-6 shrink-0">
                        <img
                          className="object-cover"
                          src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/20240222060820-0-Group.png"
                          alt="Icon of Tặng Tinh dầu xanh thảo mộc 24ml"
                          loading="lazy"
                          width={500}
                          height={500}
                          sizes="(max-width: 768px) 3rem, 3rem"
                        />
                      </div>
                      <p className="text-[12px] leading-[20px] first-letter:uppercase md:text-sm">
                        <span className="inline pe-1 font-semibold">
                          Tặng Tinh dầu xanh thảo mộc 24ml
                        </span>
                        khi mua các sản phẩm Pharmacity với hóa đơn từ 150k -
                        (17-31/7)
                      </p>
                    </div>
                    <div className="h-[1px] border-b bg-divider border-solid md:border-dashed" />
                    <div className="grid grid-flow-col items-start justify-start gap-1.5">
                      <div className="relative h-6 w-6 shrink-0">
                        <img
                          className="object-cover"
                          src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/20240703033132-0-Delivery%202H%202.png"
                          alt="Icon of Giao Nhanh 2H bởi Ahamove"
                          loading="lazy"
                          width={500}
                          height={500}
                          sizes="(max-width: 768px) 3rem, 3rem"
                        />
                      </div>
                      <p className="text-[12px] leading-[20px] first-letter:uppercase md:text-sm">
                        <span className="inline pe-1 font-semibold">
                          Giao Nhanh 2H bởi Ahamove
                        </span>
                        Giao hàng tích tắc trong vòng 2 tiếng cho sản phẩm này
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-3 md:gap-4 mb-3 grid md:mb-4">
                <div className="bg-divider h-[1px] -mx-4 md:mx-0" />
                <div className="grid gap-3 md:gap-2">
                  <div className="grid grid-cols-1 gap-1.5 md:grid-cols-[1fr,291px]">
                    <p className="text-[14px] leading-[20px] font-semibold md:text-base">
                      Danh mục
                    </p>
                    <div className="[&_a:not(.ignore-css_a)]:text-hyperLink md:text-base">
                      Vitamin tổng hợp
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-1.5 md:grid-cols-[1fr,291px]">
                    <p className="text-[14px] leading-[20px] font-semibold md:text-base">
                      Công dụng
                    </p>
                    <div className="[&_a:not(.ignore-css_a)]:text-hyperLink md:text-base">
                      <p>
                        Bổ sung vitamin thiết yếu; Hỗ trợ tăng cường sức đề
                        kháng; Hỗ trợ nâng cao sức khỏe, hỗ trợ tăng cường sức
                        đề kháng
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-1.5 md:grid-cols-[1fr,291px]">
                    <p className="text-[14px] leading-[20px] font-semibold md:text-base">
                      Quy cách
                    </p>
                    <div className="[&_a:not(.ignore-css_a)]:text-hyperLink md:text-base">
                      Chai 60 viên
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-1.5 md:grid-cols-[1fr,291px]">
                    <p className="text-[14px] leading-[20px] font-semibold md:text-base">
                      Lưu ý
                    </p>
                    <div className="[&_a:not(.ignore-css_a)]:text-hyperLink md:text-base">
                      Sản phẩm này không phải là thuốc, không có tác dụng thay
                      thế thuốc chữa bệnh. Đọc kỹ tờ hướng dẫn sử dụng trước khi
                      dùng.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetail;
