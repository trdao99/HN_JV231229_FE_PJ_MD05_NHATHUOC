import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-full bg-neutral-200 pb-24 md:pb-6">
        <div className="container mb-4 grid gap-4 lg:flex">
          <div className="w-full lg:w-[60%]">
            <div className="flex gap-4 pt-4 text-sm">
              <div className="w-[50%] sm:w-[40%]">
                <h4 className="text-[14px] leading-[20px] mb-4 font-bold">
                  Về Pharmacity
                </h4>
                <ul>
                  <li className="grid grid-flow-col items-center justify-start gap-1 pb-2">
                    <a target="_self" href="/gioi-thieu">
                      Giới thiệu
                    </a>
                  </li>
                  <li className="grid grid-flow-col items-center justify-start gap-1 pb-2">
                    <a target="_self" href="/he-thong-cua-hang">
                      Hệ thống cửa hàng
                    </a>
                  </li>
                  <li className="grid grid-flow-col items-center justify-start gap-1 pb-2">
                    <a target="_self" href="/giay-phep-kinh-doanh">
                      Giấy phép kinh doanh
                    </a>
                  </li>
                  <li className="grid grid-flow-col items-center justify-start gap-1 pb-2">
                    <a target="_self" href="/page/quy-che-hoat-dong">
                      Quy chế hoạt động
                    </a>
                  </li>
                  <li className="grid grid-flow-col items-center justify-start gap-1 pb-2">
                    <a target="_self" href="/page/chinh-sach-doi-tra">
                      Chính sách đổi trả
                    </a>
                  </li>
                  <li className="grid grid-flow-col items-center justify-start gap-1 pb-2">
                    <a target="_self" href="/page/chinh-sach-giao-hang">
                      Chính sách giao hàng
                    </a>
                  </li>
                  <li className="grid grid-flow-col items-center justify-start gap-1 pb-2">
                    <a target="_self" href="/page/chinh-sach-bao-mat">
                      Chính sách bảo mật
                    </a>
                  </li>
                  <li className="grid grid-flow-col items-center justify-start gap-1 pb-2">
                    <a target="_self" href="/page/phuong-thuc-thanh-toan">
                      Chính sách thanh toán
                    </a>
                  </li>
                  <li className="grid grid-flow-col items-center justify-start gap-1 pb-2">
                    <a
                      target="_self"
                      href="/page/the-le-chuong-trinh-the-thanh-vien"
                    >
                      Thể lệ chương trình thẻ thành viên
                    </a>
                  </li>
                  <li className="grid grid-flow-col items-center justify-start gap-1 pb-2">
                    <a target="_self" href="/cau-hoi-thuong-gap.htm">
                      Câu hỏi thường gặp
                    </a>
                  </li>
                  <li className="grid grid-flow-col items-center justify-start gap-1 pb-2">
                    <a target="_self" href="">
                      Sitemap
                    </a>
                  </li>
                  <li className="grid grid-flow-col items-center justify-start gap-1 pb-2">
                    <a target="_self" href="/goc-suc-khoe/benh-vien">
                      Bệnh viện
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid w-[50%] sm:flex sm:w-[60%]">
                <div className="w-full sm:w-[50%]">
                  <h4 className="text-[14px] leading-[20px] mb-4 font-bold">
                    Danh mục
                  </h4>
                  <ul>
                    <li className="pb-2">
                      <a target="" href="/duoc-pham">
                        Thuốc
                      </a>
                    </li>
                    <li className="pb-2">
                      <a target="" href="/benh">
                        Tra cứu bệnh
                      </a>
                    </li>
                    <li className="pb-2">
                      <a target="" href="/thuc-pham-chuc-nang">
                        Thực phẩm chức năng
                      </a>
                    </li>
                    <li className="pb-2">
                      <a target="" href="/cham-soc-ca-nhan">
                        Chăm sóc cá nhân
                      </a>
                    </li>
                    <li className="pb-2">
                      <a target="" href="/me-va-be">
                        Mẹ và Bé
                      </a>
                    </li>
                    <li className="pb-2">
                      <a target="" href="/cham-soc-sac-dep">
                        Chăm sóc sắc đẹp
                      </a>
                    </li>
                    <li className="pb-2">
                      <a target="" href="/thiet-bi-y-te-2">
                        Thiết bị y tế
                      </a>
                    </li>
                    <li className="pb-2">
                      <a target="" href="/san-pham-tien-loi">
                        Sản phẩm tiện lợi
                      </a>
                    </li>
                    <li className="pb-2">
                      <a target="" href="/cham-soc-suc-khoe">
                        Chăm sóc sức khỏe
                      </a>
                    </li>
                    <li className="pb-2">
                      <a target="" href="/shop/pharmacity">
                        Nhãn hàng Pharmacity
                      </a>
                    </li>
                    <li className="pb-2">
                      <a target="" href="/cam-nang-mua-sam">
                        Khuyến mãi HOT
                      </a>
                    </li>
                    <li className="pb-2">
                      <a target="" href="/goc-suc-khoe">
                        Góc sức khỏe
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 w-full sm:mt-0 sm:w-[50%]">
                  <h4 className="text-[14px] leading-[20px] mb-4 font-bold">
                    Tổng đài CSKH
                  </h4>
                  <p>
                    Hỗ trợ đặt hàng <br />{" "}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="tel:18006821"
                    >
                      <span className="font-bold text-primary-500">
                        1800 6821
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full place-content-between gap-4 lg:grid lg:w-[40%]">
            <div className="flex w-full py-4 text-sm">
              <div className="w-[50%] sm:w-[40%] lg:flex-1">
                <h4 className="text-[14px] leading-[20px] mb-4 font-bold">
                  Theo dõi chúng tôi trên
                </h4>
                <ul>
                  <li className="pb-4">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex"
                      href=""
                    >
                      <img
                        className="mr-2 w-6"
                        src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706163158-0-facebook.svg"
                        alt="facebook logo"
                        loading="lazy"
                        width={500}
                        height={500}
                      />
                      Facebook
                    </a>
                  </li>
                  <li className="pb-4">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex"
                      href=""
                    >
                      <img
                        className="mr-2 w-6"
                        src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706163159-0-youtube.svg"
                        alt="youtube logo"
                        loading="lazy"
                        width={500}
                        height={500}
                      />
                      Youtube
                    </a>
                  </li>
                  <li className="pb-4">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex"
                      href=""
                    >
                      <img
                        className="mr-2 w-6"
                        src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706163159-0-zalo.svg"
                        alt="zalo logo"
                        loading="lazy"
                        width={500}
                        height={500}
                      />
                      Zalo
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-[50%] sm:w-[250px]">
                <h4 className="text-[14px] leading-[20px] mb-4 font-bold">
                  Tải ứng dụng Pharmacity ngay thôi
                </h4>
                <div className="flex">
                  <div className="w-[85px]">
                    <img
                      className=""
                      src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706154633-0-qr-code.png"
                      alt="QR code"
                      loading="lazy"
                      width={500}
                      height={500}
                    />
                    <p className="hidden py-2 sm:block">
                      Quét mã để tải ứng dụng
                    </p>
                  </div>
                  <span className="px-1 py-2 sm:py-[18px] md:px-5">Hoặc</span>
                  <div className="w-[85px] space-y-1 md:space-y-2">
                    <a
                      rel="noopener noreferrer"
                      className="block"
                      target="_blank"
                      href=""
                    >
                      <img
                        className="object-contain"
                        src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706154633-0-app-store.png"
                        alt="Apple store"
                        loading="lazy"
                        width={500}
                        height={500}
                      />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      className="block"
                      target="_blank"
                      href=""
                    >
                      <img
                        className="object-contain"
                        src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706154633-0-google-play.png"
                        alt="Google play"
                        loading="lazy"
                        width={500}
                        height={500}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2 w-full">
              <div className="flex max-w-[500px] gap-4 sm:gap-6">
                <div className="flex-1">
                  <h4 className="text-[14px] leading-[20px] mb-4 font-bold">
                    Hỗ trợ thanh toán
                  </h4>
                  <div className="grid grid-cols-6 gap-2 sm:gap-4">
                    <div>
                      <img
                        className=""
                        src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706162440-0-COD.png"
                        alt="COD"
                        loading="lazy"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div>
                      <img
                        className=""
                        src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706162441-0-Visa.png"
                        alt="Visa"
                        loading="lazy"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div>
                      <img
                        className=""
                        src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706162441-0-MasterCard.png"
                        alt="MasterCard"
                        loading="lazy"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div>
                      <img
                        className=""
                        src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706162441-0-JCB.png"
                        alt="JCB"
                        loading="lazy"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div>
                      <img
                        className=""
                        src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706162441-0-Momo.png"
                        alt="Momo"
                        loading="lazy"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div>
                      <img
                        className=""
                        src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706162729-0-ZaloPay.png"
                        alt="ZaloPay"
                        loading="lazy"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-[85px] flex-col items-end space-y-2">
                  <a
                    rel="noopener noreferrer"
                    className="block"
                    target="_blank"
                    href=""
                  >
                    <img
                      className=""
                      src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706162441-0-BCT.png"
                      alt="BCT"
                      loading="lazy"
                      width={84}
                      height={26}
                    />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    className="block"
                    target="_blank"
                    href=""
                  >
                    <img
                      className=""
                      src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706162441-0-DMCA.png"
                      alt="DMCA"
                      loading="lazy"
                      width={84}
                      height={26}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="w-full border-t-[1px] border-neutral-300 pt-6 text-xs">
            <h4 className="text-[14px] leading-[20px] font-semibold">
              Công Ty Cổ Phần Dược Phẩm Pharmacity
            </h4>
            <div className="lg:flex">
              <div className="[&_a:not(.ignore-css_a)]:text-hyperLink mt-1 lg:w-[45%]">
                <p>
                  Trụ sở: 248A Nơ Trang Long, P.12, Q.Bình Thạnh, TP.Hồ Chí Minh
                </p>
                <p>Điện thoại: 1800 6821 - Email: cskh@pharmacity.vn</p>
              </div>
              <div />
              <div className="[&_a:not(.ignore-css_a)]:text-hyperLink mt-1 text-left lg:w-[55%] lg:text-end">
                <p>
                  GCNDKDN: 0311770883 do sở KH &amp; ĐT TP.HCM cấp lần đầu ngày
                  05/05/2012.
                </p>
                <p>
                  GCNDDKKDD: 6782/DDKKDDD-ĐNai ngày cấp 26/4/2022 Sở Y Tế Tỉnh
                  Đồng Nai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
