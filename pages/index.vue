<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <div
        class="
          relative
          pt-16
          pb-32
          flex
          content-center
          items-center
          justify-center
        "
        style="min-height: 75vh"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="background-image: url('/vay-tin-chap.io/images/tpbank-vay-tin-chap.jpg');"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-tpbank"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-secondary font-semibold text-5xl">
                  HỖ TRỢ VAY VỐN TIÊU DÙNG
                </h1>
                <p class="mt-4 text-lg text-white">
                  Đối tượng được vay: Mọi công dân VN trên 18 tuổi và được vay
                  theo những điều kiện sau đây.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            top-auto
            bottom-0
            left-0
            right-0
            w-full
            absolute
            pointer-events-none
            overflow-hidden
          "
          style="height: 70px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center">
              <div
                class="
                  relative
                  flex flex-col
                  min-w-0
                  break-words
                  bg-white
                  w-full
                  mb-8
                  shadow-lg
                  rounded-lg
                "
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="
                      text-white
                      p-3
                      text-center
                      inline-flex
                      items-center
                      justify-center
                      w-12
                      h-12
                      mb-5
                      shadow-lg
                      rounded-full
                      bg-primary
                    "
                  >
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Vay theo hóa đơn</h6>
                  <p class="mt-2 mb-4 text-white-100">
                    Số tiền vay được nên đến 30 lần tổng thu nhập hàng tháng.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-3/12 px-4 text-center">
              <div
                class="
                  relative
                  flex flex-col
                  min-w-0
                  break-words
                  bg-white
                  w-full
                  mb-8
                  shadow-lg
                  rounded-lg
                "
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="
                      text-white
                      p-3
                      text-center
                      inline-flex
                      items-center
                      justify-center
                      w-12
                      h-12
                      mb-5
                      shadow-lg
                      rounded-full
                      bg-tpbank
                    "
                  >
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Vay theo SIM trả sau</h6>
                  <p class="mt-2 mb-4 text-white-100">
                    Điều kiện vay: đã từng mua/vay trả góp tại các TCTD khác.hệ
                    số vay: Tối đa lên tới 100 triệu.
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-3/12 px-4 text-center">
              <div
                class="
                  relative
                  flex flex-col
                  min-w-0
                  break-words
                  bg-white
                  w-full
                  mb-8
                  shadow-lg
                  rounded-lg
                "
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="
                      text-white
                      p-3
                      text-center
                      inline-flex
                      items-center
                      justify-center
                      w-12
                      h-12
                      mb-5
                      shadow-lg
                      rounded-full
                      bg-secondary
                    "
                  >
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Vay theo Lương</h6>
                  <p class="mt-2 mb-4 text-white-100">
                    Khoản vay từ 6 đến 100 triệu đồng. Hồ sơ thủ tục nhanh gọn,
                    giải ngân trong vòng 24h
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-3/12 px-4 text-center">
              <div
                class="
                  relative
                  flex flex-col
                  min-w-0
                  break-words
                  bg-white
                  w-full
                  mb-8
                  shadow-lg
                  rounded-lg
                "
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="
                      text-white
                      p-3
                      text-center
                      inline-flex
                      items-center
                      justify-center
                      w-12
                      h-12
                      mb-5
                      shadow-lg
                      rounded-full
                      bg-tpbank
                    "
                  >
                    <i class="fas fa-file-contract"></i>
                  </div>
                  <h6 class="text-xl font-semibold">
                    Vay theo Bảo hiểm nhân thọ
                  </h6>
                  <p class="mt-2 mb-4 text-white-100">
                    Khoản vay từ 10 đến 100 triệu đồng. Hồ sơ thủ tục nhanh gọn,
                    giải ngân trong vòng 24h.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="
                  text-white-100
                  p-3
                  text-center
                  inline-flex
                  items-center
                  justify-center
                  w-16
                  h-16
                  mb-6
                  shadow-lg
                  rounded-full
                  bg-gray-100
                "
              >
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                👉 CHO VAY TÍN CHẤP
              </h3>
              <p
                class="
                  text-lg
                  font-light
                  leading-relaxed
                  mt-4
                  mb-4
                  text-gray-700
                "
              >
                🔰 Hồ sơ đơn giản, thủ tục nhanh chóng.
              </p>
              <p
                class="
                  text-lg
                  font-light
                  leading-relaxed
                  mt-0
                  mb-4
                  text-gray-700
                "
              >
                🔰 Khoản vay từ 6 triệu đến 70 triệu.
              </p>
              <p
                class="
                  text-lg
                  font-light
                  leading-relaxed
                  mt-0
                  mb-4
                  text-gray-700
                "
              >
                🔰 Không cần bảo lãnh khoản vay.
              </p>
              <p
                class="
                  text-lg
                  font-light
                  leading-relaxed
                  mt-0
                  mb-4
                  text-gray-700
                "
              >
                🔰 Không cần xác nhận tạm trú.
              </p>
              <p
                class="
                  text-lg
                  font-light
                  leading-relaxed
                  mt-0
                  mb-4
                  text-gray-700
                "
              >
                🔰 Không mất phí làm hồ sơ.
              </p>
              <p
                class="
                  text-lg
                  font-light
                  leading-relaxed
                  mt-0
                  mb-4
                  text-gray-700
                "
              >
                🔰 Lãi suất thấp.
              </p>
              <p
                class="
                  text-lg
                  font-light
                  leading-relaxed
                  mt-0
                  mb-4
                  text-gray-700
                "
              >
                🔰Thủ tục nhanh gọn chỉ sau 48h đã được giải ngân.
              </p>
              <a href="tel:0977201351" class="font-bold text-gray-800 mt-8"
                >☎️ Hotline: 0977 201 351</a
              >
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="
                  relative
                  flex flex-col
                  min-w-0
                  break-words
                  w-full
                  mb-6
                  shadow-lg
                  rounded-lg
                  bg-tpbank
                "
              >
                <img
                  alt="..."
                  src="~/assets/img/tpbank-denq.jpg"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-tpbank fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Được giải ngân vào tài khoản thẻ của TPBank
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    Điều đặc biệt khi khách hàng vay sẽ được giải ngân vào tài
                    khoản thẻ của TPBank và rút ở bất kỳ cây ATM nào cũng k mất
                    phí, khi trả khoản vay có thể thanh toán qua
                    internetbanking.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative py-20">
        <div
          class="
            bottom-auto
            top-0
            left-0
            right-0
            w-full
            absolute
            pointer-events-none
            overflow-hidden
            -mt-20
          "
          style="height: 80px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="~/assets/img/tpbank.jpg"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="
                    text-primary
                    p-3
                    text-center
                    inline-flex
                    items-center
                    justify-center
                    w-16
                    h-16
                    mb-6
                    shadow-lg
                    rounded-full
                    bg-tpbank
                  "
                >
                  <i class="fas fa-rocket text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">
                  Thủ tục chỉ cần kèm theo:
                </h3>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="
                            text-xs
                            font-semibold
                            inline-block
                            py-1
                            px-2
                            uppercase
                            rounded-full
                            text-primary
                            bg-tpbank
                            mr-3
                          "
                          ><i class="fab fa-html5"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-white-100">Chứng minh thư nhân dân.</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="
                            text-xs
                            font-semibold
                            inline-block
                            py-1
                            px-2
                            uppercase
                            rounded-full
                            text-primary
                            bg-tpbank
                            mr-3
                          "
                          ><i class="far fa-paper-plane"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-white-100">Có sổ hộ khẩu</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Vì sao chọn chúng tôi</h2>
              <p class="text-lg leading-relaxed m-4 text-white-100">
                Lãi suất thấp - Thủ tục đơn giản - Giải ngân nhanh chóng
              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="~/assets/img/dac-diem.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Chi phí minh bạch</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Mọi chi phí hiển thị rõ ràng trước khi vay`
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="~/assets/img/dac-diem.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Thủ tục đơn giản</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Tối giản hồ sơ, chỉ cần CMTND để đăng ký
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="~/assets/img/dac-diem.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Cực kỳ nhanh chóng</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Nhận tiền thuận lợi qua tài khoản ngân hàng cá nhân của quý
                    khách, hoặc các điểm giao dịch của các đối tác
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="~/assets/img/dac-diem.jpg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">
                    Có mặt bên bạn mọi lúc mọi nơi
                  </h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Dễ dàng yêu cầu khoản vay mà không cần phải đến chi nhánh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-20 relative block bg-tpbank">
        <div
          class="
            bottom-auto
            top-0
            left-0
            right-0
            w-full
            absolute
            pointer-events-none
            overflow-hidden
            -mt-20
          "
          style="height: 80px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-tpbank fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">
                CHO VAY TÍN CHẤP
              </h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-white">
                Khu vực hỗ trợ: Tỉnh Thái Nguyên. Tuyên Quang. Phú thọ. Vĩnh
                Phúc. Lạng Sơn....
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="relative block py-24 lg:pt-0 bg-tpbank">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <form-component />
          </div>
        </div>
      </section>
    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
import NavbarComponent from '@/components/Navbar.vue'
import FormComponent from '@/components/DangKy.vue'
import FooterComponent from '@/components/Footer.vue'
export default {
  name: 'LandingPage',
  components: {
    NavbarComponent,
    FormComponent,
    FooterComponent,
  },
}
</script>
