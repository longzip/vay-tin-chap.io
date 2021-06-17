<template>
  <footer class="relative bg-gray-300 pt-8 pb-6">
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
          class="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">HỖ TRỢ VAY VỐN TIÊU DÙNG</h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-700">
            Tìm chúng tôi trên mạng xã hội, chúng tôi sẽ trả lời bạn 1-2 ngày
            làm việc.
          </h5>
          <div class="mt-6">
            <button
              class="
                bg-white
                text-blue-400
                shadow-lg
                font-normal
                h-10
                w-10
                items-center
                justify-center
                align-center
                rounded-full
                outline-none
                focus:outline-none
                mr-2
                p-3
              "
              type="button"
            >
              <i class="flex fab fa-twitter"></i></button
            ><button
              class="
                bg-white
                text-blue-600
                shadow-lg
                font-normal
                h-10
                w-10
                items-center
                justify-center
                align-center
                rounded-full
                outline-none
                focus:outline-none
                mr-2
                p-3
              "
              type="button"
            >
              <i class="flex fab fa-facebook-square"></i></button
            ><button
              class="
                bg-white
                text-pink-400
                shadow-lg
                font-normal
                h-10
                w-10
                items-center
                justify-center
                align-center
                rounded-full
                outline-none
                focus:outline-none
                mr-2
                p-3
              "
              type="button"
            >
              <i class="flex fab fa-dribbble"></i></button
            ><button
              class="
                bg-white
                text-gray-900
                shadow-lg
                font-normal
                h-10
                w-10
                items-center
                justify-center
                align-center
                rounded-full
                outline-none
                focus:outline-none
                mr-2
                p-3
              "
              type="button"
            >
              <i class="flex fab fa-github"></i>
            </button>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                >Liên kết</span
              >
              <ul class="list-unstyled">
                <li>
                  <a
                    class="
                      text-gray-700
                      hover:text-gray-900
                      font-semibold
                      block
                      pb-2
                      text-sm
                    "
                    href="#"
                    >Lãi suất vay tín chấp tpbank</a
                  >
                </li>
                <li>
                  <a
                    class="
                      text-gray-700
                      hover:text-gray-900
                      font-semibold
                      block
                      pb-2
                      text-sm
                    "
                    href="#"
                    >Blog</a
                  >
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                >Tài nguyên khác</span
              >
              <ul class="list-unstyled">
                <li>
                  <a
                    class="
                      text-gray-700
                      hover:text-gray-900
                      font-semibold
                      block
                      pb-2
                      text-sm
                    "
                    href="#"
                    >MIT License</a
                  >
                </li>
                <li>
                  <a
                    class="
                      text-gray-700
                      hover:text-gray-900
                      font-semibold
                      block
                      pb-2
                      text-sm
                    "
                    href="#"
                    >Terms &amp; Conditions</a
                  >
                </li>
                <li>
                  <a
                    class="
                      text-gray-700
                      hover:text-gray-900
                      font-semibold
                      block
                      pb-2
                      text-sm
                    "
                    href="#"
                    >Privacy Policy</a
                  >
                </li>
                <li>
                  <a
                    class="
                      text-gray-700
                      hover:text-gray-900
                      font-semibold
                      block
                      pb-2
                      text-sm
                    "
                    href="tel:0977 201 351"
                    >Gọi điện</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Copyright © {{ date }} vay tín chấp Tpbank by
            <a
              href="https://www.lovanlong.ga"
              class="text-gray-600 hover:text-gray-900"
              >Thiết kế website tại Vĩnh Phúc</a
            >.
          </div>
        </div>
      </div>
    </div>
    <script id="mcjs">
      !(function (c, h, i, m, p) {
        ;(m = c.createElement(h)),
          (p = c.getElementsByTagName(h)[0]),
          (m.async = 1),
          (m.src = i),
          p.parentNode.insertBefore(m, p)
      })(
        document,
        'script',
        'https://chimpstatic.com/mcjs-connected/js/users/51b89f0bb923255c56045a3ca/1349ca9b1b580c6939649bcad.js'
      )
    </script>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    }
  },
}
</script>
