import React from "react";
import { NavLink } from "react-router-dom";

function SideBarUser({ userLogin }) {
  return (
    <>
      <div className="grid w-[288px] gap-4 rounded-md bg-white ml-9 h-full">
        <div className="px-4 pt-4 ">
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <img
                className="rounded-full w-12 h-12 object-cover"
                src="https://prod-cdn.pharmacity.io/e-com/images/customer-avatar/200x200/20240717090549-0-%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2023-08-11_110646-removebg-preview.png"
                alt="avatar"
                loading="lazy"
                width={500}
                height={500}
              />
              <div className="flex-1 text-sm font-medium">
                <div className="text-neutral-900 text-base font-bold capitalize">
                  {userLogin.username}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <div className="mt-1 flex w-fit items-center gap-1 rounded-full bg-gold-100 px-2 py-1 text-sm font-semibold">
                    <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full w-6 h-6">
                      <svg
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1175_4984)">
                          <path
                            d="M12.5 22C17.7855 22 22.0703 17.5228 22.0703 12C22.0703 6.47715 17.7855 2 12.5 2C7.21446 2 2.92969 6.47715 2.92969 12C2.92969 17.5228 7.21446 22 12.5 22Z"
                            fill="#E88102"
                          />
                          <path
                            d="M12.5 20.9453C17.7316 20.9453 21.9727 16.7043 21.9727 11.4727C21.9727 6.24105 17.7316 2 12.5 2C7.2684 2 3.02734 6.24105 3.02734 11.4727C3.02734 16.7043 7.2684 20.9453 12.5 20.9453Z"
                            fill="#FFE571"
                          />
                          <path
                            opacity="0.5"
                            d="M16.2812 2.78516L3.8125 15.25C3.39453 14.293 3.13281 13.2539 3.05469 12.1641L13.1914 2.02344C14.2812 2.10547 15.3203 2.36719 16.2812 2.78516Z"
                            fill="white"
                          />
                          <path
                            opacity="0.5"
                            d="M20.7539 6.82422L7.85156 19.7266C7.04688 19.2734 6.32031 18.707 5.68359 18.0469L19.0781 4.65625C19.7344 5.28906 20.3008 6.01953 20.7539 6.82422Z"
                            fill="white"
                          />
                          <path
                            opacity="0.5"
                            d="M18.6914 4.30078L5.33203 17.6602C5.125 17.418 4.92578 17.1641 4.74219 16.9023L17.9336 3.71094C18.1953 3.89453 18.4492 4.09375 18.6914 4.30078Z"
                            fill="white"
                          />
                          <path
                            opacity="0.5"
                            d="M21.6758 9.10938L10.1367 20.6484C9.78906 20.5586 9.44922 20.4492 9.11719 20.3242L21.3516 8.08984C21.4766 8.42188 21.5859 8.76172 21.6758 9.10938Z"
                            fill="white"
                          />
                          <path
                            opacity="0.5"
                            d="M21.9727 11.4727C21.9727 11.5391 21.9727 11.6016 21.9688 11.668C21.8672 6.52734 17.668 2.39062 12.5 2.39062C7.33203 2.39062 3.13281 6.52734 3.03125 11.668C3.03125 11.6016 3.02734 11.5391 3.02734 11.4727C3.02734 6.24219 7.26953 2 12.5 2C17.7305 2 21.9727 6.24219 21.9727 11.4727Z"
                            fill="white"
                          />
                          <path
                            opacity="0.5"
                            d="M20.1953 11.8828C20.1953 15.9805 16.8711 19.3047 12.7734 19.3047C10.4727 19.3047 8.41406 18.2539 7.05078 16.6094C8.40625 18.0742 10.3438 18.9922 12.5 18.9922C16.5977 18.9922 19.9219 15.668 19.9219 11.5703C19.9219 9.77344 19.2852 8.12891 18.2227 6.84375C19.4453 8.16797 20.1953 9.9375 20.1953 11.8828Z"
                            fill="white"
                          />
                          <path
                            d="M12.5 18.9922C16.599 18.9922 19.9219 15.6693 19.9219 11.5703C19.9219 7.47132 16.599 4.14844 12.5 4.14844C8.40101 4.14844 5.07812 7.47132 5.07812 11.5703C5.07812 15.6693 8.40101 18.9922 12.5 18.9922Z"
                            fill="#F39E09"
                          />
                          <path
                            d="M18.125 6.72656C16.8242 5.60547 15.1328 4.92969 13.2812 4.92969C9.18359 4.92969 5.85938 8.25391 5.85938 12.3516C5.85938 14.2031 6.53516 15.8945 7.65625 17.1953C6.07812 15.832 5.07812 13.8203 5.07812 11.5703C5.07812 7.47266 8.40234 4.14844 12.5 4.14844C14.7461 4.14844 16.7617 5.14844 18.125 6.72656Z"
                            fill="#E88102"
                          />
                          <path
                            opacity="0.25"
                            d="M18.6914 7.47266C13.8867 9.16016 10.0273 12.8672 8.13672 17.5742C7.97266 17.4531 7.8125 17.3281 7.65625 17.1914C6.53516 15.8906 5.85938 14.1992 5.85938 12.3516C5.85938 8.25391 9.18359 4.92969 13.2812 4.92969C15.1328 4.92969 16.8242 5.60547 18.1211 6.72656C18.3281 6.96484 18.5156 7.21484 18.6914 7.47266Z"
                            fill="white"
                          />
                          <path
                            d="M10.2318 16.375C9.59574 16.375 9.16675 16.0094 9.16675 15.3957V7.914C9.16675 7.39171 9.62533 7 10.2318 7H13.1756C14.9804 7 16.6667 8.12291 16.6667 10.0162C16.6667 11.9878 15.3058 13.1891 13.1904 13.1891H11.2969V15.3957C11.2969 16.0094 10.8827 16.375 10.2318 16.375ZM11.2969 11.5178H12.7614C13.7525 11.5178 14.4626 10.891 14.4626 10.1076C14.4626 9.21971 13.7673 8.67131 12.7614 8.67131H11.2969V11.5178Z"
                            fill="#FFE571"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1175_4984">
                            <rect
                              width={20}
                              height={20}
                              fill="white"
                              transform="translate(2.5 2)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="font-medium text-neutral-900">
                      0 P-Xu Vàng
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl bg-cover px-2 py-4"
              style={{
                backgroundImage:
                  'url("https://prod-cdn.pharmacity.io/e-com/images/ecommerce/20240311101121-0-BGBanner.png")',
              }}
            >
              <div className="mb-9 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                  <img
                    className="h-8 w-8 object-cover"
                    src="https://data-service.pharmacity.io/pmc-upload-media/production/media/app-config/app-loyalty-star.png"
                    alt="icon"
                    loading="lazy"
                    width={500}
                    height={500}
                  />
                </div>
                <span className="text-xl font-bold uppercase text-white">
                  VÀNG
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative min-w-[30px] overflow-hidden rounded-xl px-2 py-[2px] text-center text-[10px] font-semibold h-2 w-[100%] bg-white">
                  <div
                    className="absolute left-0 top-0 z-[1] h-full rounded-xl bg-white"
                    style={{
                      width: "0%",
                      backgroundColor: "rgb(255, 209, 72)",
                    }}
                  />
                </div>
                <div className="flex w-4 items-center justify-center rounded-full bg-white">
                  <img
                    className=""
                    src="https://data-service.pharmacity.io/pmc-upload-media/production/media/app-config/app-diamond-green-loyalty-ico-mini.png"
                    alt="icon-mini"
                    loading="lazy"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="mt-1 flex items-center gap-1">
                <span className="text-xs font-normal text-white">
                  Chi tiêu thêm 4.000.000&nbsp;₫ để thăng hạng
                </span>
                <div className="[&>[data-radix-popper-content-wrapper]]:!z-[10]">
                  <div data-state="closed">
                    <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full w-4 h-4 text-white hover:cursor-pointer">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1230_1226)">
                          <path
                            d="M19.0717 4.92881C15.1664 1.02395 8.83455 1.02351 4.92881 4.92881C1.02351 8.83412 1.02395 15.166 4.92881 19.0717C8.83412 22.9762 15.166 22.9766 19.0717 19.0717C22.9766 15.166 22.9762 8.83455 19.0717 4.92881ZM13.3042 16.3482C13.3042 17.0686 12.7203 17.6526 11.9998 17.6526C11.2794 17.6526 10.6955 17.0686 10.6955 16.3482V11.1307C10.6955 10.4102 11.2794 9.82631 11.9998 9.82631C12.7203 9.82631 13.3042 10.4102 13.3042 11.1307V16.3482ZM11.9768 8.90107C11.2255 8.90107 10.7246 8.36889 10.7402 7.71192C10.7246 7.02321 11.2255 6.50711 11.992 6.50711C12.759 6.50711 13.2442 7.02364 13.2603 7.71192C13.2599 8.36889 12.7594 8.90107 11.9768 8.90107Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1230_1226">
                            <rect
                              width={20}
                              height={20}
                              fill="white"
                              transform="translate(2 2)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-divider h-[1px]" />
        <div className="text-black">
          <ul className="space-y-2 text-sm font-normal">
            <li>
              <NavLink
                to="/userdetail"
                className="mb-2 group flex items-center px-4 py-3 font-semibold  dark:text-white dark:hover:bg-neutral-500 bg-primary-50 "
              >
                <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full w-6 h-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 7.09923C10.5053 7.09923 9.29339 8.31114 9.29339 9.80584V11.5001C9.29339 12.9948 10.5053 14.2067 12 14.2067C13.4947 14.2067 14.7066 12.9948 14.7066 11.5001V9.80584C14.7066 8.31114 13.4947 7.09923 12 7.09923ZM7.92976 9.80584C7.92976 7.55803 9.75219 5.7356 12 5.7356C14.2478 5.7356 16.0703 7.55803 16.0703 9.80584V11.5001C16.0703 13.7479 14.2478 15.5703 12 15.5703C9.75219 15.5703 7.92976 13.7479 7.92976 11.5001V9.80584Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.31036 18.8101C7.36688 17.5511 8.95451 16.7478 10.7293 16.7478H13.2707C15.0372 16.7478 16.6369 17.5756 17.6885 18.8127L16.6496 19.6959C15.8375 18.7406 14.6079 18.1114 13.2707 18.1114H10.7293C9.37494 18.1114 8.16373 18.7228 7.35492 19.6866L6.31036 18.8101Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2.86364C7.23027 2.86364 3.36364 6.73027 3.36364 11.5C3.36364 16.2697 7.23027 20.1364 12 20.1364C16.7697 20.1364 20.6364 16.2697 20.6364 11.5C20.6364 6.73027 16.7697 2.86364 12 2.86364ZM2 11.5C2 5.97715 6.47715 1.5 12 1.5C17.5228 1.5 22 5.97715 22 11.5C22 17.0228 17.5228 21.5 12 21.5C6.47715 21.5 2 17.0228 2 11.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="ml-3 text-base text-black">
                  Thông tin cá nhân
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                className="group flex items-center px-4 py-3 font-semibold   dark:text-white dark:hover:bg-neutral-500"
                href="/account/address"
              >
                <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={37}
                    height={36}
                    fill="none"
                    viewBox="0 0 37 36"
                    className="text-black"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M10.46 22.622c.49.284.688.975.443 1.543L8.092 30.7h20.316l-2.812-6.534c-.244-.568-.046-1.26.443-1.543.49-.284 1.084-.054 1.328.514l3.528 8.2c.154.356.137.78-.043 1.118-.18.34-.499.546-.842.546H6.49c-.343 0-.662-.206-.842-.546a1.314 1.314 0 01-.043-1.119l3.528-8.199c.244-.568.839-.798 1.328-.514z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M18.25 5.14c-3.733 0-7.657 2.89-7.657 7.83 0 1.116.454 2.523 1.243 4.084.778 1.538 1.828 3.12 2.896 4.558a57.136 57.136 0 003.518 4.266 57.136 57.136 0 003.518-4.266c1.068-1.438 2.118-3.02 2.896-4.558.79-1.56 1.243-2.968 1.243-4.085 0-4.939-3.924-7.829-7.657-7.829zm0 22.29l-.743.753-.003-.002-.005-.006-.02-.021-.077-.08-.285-.303a59.33 59.33 0 01-4.053-4.865c-1.107-1.49-2.233-3.18-3.087-4.869C9.134 16.372 8.5 14.598 8.5 12.97 8.5 6.645 13.57 3 18.25 3S28 6.644 28 12.97c0 1.628-.634 3.402-1.477 5.067-.854 1.688-1.98 3.378-3.088 4.87a59.33 59.33 0 01-4.337 5.167l-.076.08-.02.021-.006.006-.002.002-.744-.753zm0 0l.744.753a1.038 1.038 0 01-.744.317c-.279 0-.547-.114-.743-.317l.743-.753z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M18.25 11.222a1.528 1.528 0 100 3.056 1.528 1.528 0 000-3.056zM14.5 12.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="ml-3 text-base text-black">
                  Sổ địa chỉ nhận hàng
                </span>
              </NavLink>
            </li>
            <li>
              <a
                className="mb-2 group flex items-center px-4 py-3 font-semibold   dark:text-white dark:hover:bg-neutral-500"
                href="/account/order-history"
              >
                <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full w-6 h-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 11H17V12.5H7V11Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 15H17V16.5H7V15Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 4H6.03464V5.37182H4.37182V20.6282H19.6282V5.37182H17.9654V4H21V22H3V4Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 2H17V8H13.0086V7.35294C13.0086 6.84364 12.5574 6.43137 12 6.43137C11.4426 6.43137 10.9914 6.84364 10.9914 7.35294V8H7V2ZM8.41631 3.29412V6.70588H9.68007C9.98292 5.79769 10.9068 5.13725 12 5.13725C13.0932 5.13725 14.0171 5.79769 14.3199 6.70588H15.5837V3.29412H8.41631Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="ml-3 text-base text-black">
                  Lịch sử đơn hàng
                </span>
              </a>
            </li>
            <li>
              <a
                className="mb-2 group flex items-center px-4 py-3 font-semibold   dark:text-white dark:hover:bg-neutral-500"
                href=""
              >
                <span className="p-icon inline-flex align-[-0.125em] justify-center max-h-full max-w-full w-6 h-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 5.54541C2 5.1312 2.33579 4.79541 2.75 4.79541H21.25C21.6642 4.79541 22 5.1312 22 5.54541V9.74996C22 10.1642 21.6642 10.5 21.25 10.5C20.2347 10.5 19.4773 11.2574 19.4773 12.2727C19.4773 13.288 20.2347 14.0454 21.25 14.0454C21.6642 14.0454 22 14.3812 22 14.7954V19C22 19.4142 21.6642 19.75 21.25 19.75H2.75C2.33579 19.75 2 19.4142 2 19V14.7954C2 14.3812 2.33579 14.0454 2.75 14.0454C3.76533 14.0454 4.52273 13.288 4.52273 12.2727C4.52273 11.2574 3.76533 10.5 2.75 10.5C2.33579 10.5 2 10.1642 2 9.74996V5.54541ZM3.5 6.29541V9.08182C4.9672 9.40982 6.02273 10.6881 6.02273 12.2727C6.02273 13.8573 4.9672 15.1355 3.5 15.4635V18.25H20.5V15.4635C19.0328 15.1355 17.9773 13.8573 17.9773 12.2727C17.9773 10.6881 19.0328 9.40982 20.5 9.08182V6.29541H3.5Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.053 9.21967C15.3459 9.51256 15.3459 9.98744 15.053 10.2803L10.0076 15.3258C9.71467 15.6187 9.2398 15.6187 8.9469 15.3258C8.65401 15.0329 8.65401 14.558 8.9469 14.2651L13.9924 9.21967C14.2853 8.92678 14.7601 8.92678 15.053 9.21967Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.89772 10.5908C10.5943 10.5908 11.1591 10.0261 11.1591 9.32948C11.1591 8.63285 10.5943 8.06812 9.89772 8.06812C9.20108 8.06812 8.63635 8.63285 8.63635 9.32948C8.63635 10.0261 9.20108 10.5908 9.89772 10.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14.1023 16.4771C14.7989 16.4771 15.3637 15.9123 15.3637 15.2157C15.3637 14.5191 14.7989 13.9543 14.1023 13.9543C13.4057 13.9543 12.8409 14.5191 12.8409 15.2157C12.8409 15.9123 13.4057 16.4771 14.1023 16.4771Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="ml-3 text-base text-black">Mã giảm giá</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBarUser;
