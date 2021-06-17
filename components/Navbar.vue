<template>
  <nav
    class="
      top-0
      absolute
      z-50
      w-full
      flex flex-wrap
      items-center
      justify-between
      px-2
      py-3
    "
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="
          w-full
          relative
          flex
          justify-between
          lg:w-auto
          lg:static
          lg:block
          lg:justify-start
        "
      >
        <a
          class="
            text-sm
            font-bold
            leading-relaxed
            inline-block
            mr-4
            py-2
            whitespace-nowrap
            uppercase
            text-white
          "
          href="/"
          >Cho vay tín chấp</a
        ><button
          class="
            cursor-pointer
            text-xl
            leading-none
            px-3
            py-1
            border border-solid border-transparent
            rounded
            bg-transparent
            block
            lg:hidden
            outline-none
            focus:outline-none
          "
          type="button"
          @click="toggleNavbar()"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="
          lg:flex
          flex-grow
          items-center
          bg-white
          lg:bg-transparent
          lg:shadow-none
        "
        :class="{ hidden: !showMenu, block: showMenu }"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <a
              class="
                lg:text-white
                lg:hover:text-primary
                text-gray-800
                px-3
                py-4
                lg:py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
              "
              href="tel:0977201351"
              ><i
                class="
                  lg:text-primary
                  text-primary
                  far
                  fa-file-alt
                  text-lg
                  leading-lg
                  mr-2
                "
              ></i>
              Hotline: 0977 201 351</a
            >
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <a
              href="https://hotrovaytieudung.ngoclong.ga/wp-login.php?loginSocial=google"
              class="
                bg-white
                text-primary
                active:bg-secondary
                text-xs
                font-bold
                uppercase
                px-4
                py-2
                rounded
                shadow
                hover:shadow-md
                outline-none
                focus:outline-none
                lg:mr-1
                lg:mb-0
                ml-3
                mb-3
              "
              style="transition: all 0.15s ease 0s"
            >
              <i class="fas fa-arrow-alt-circle-down"></i> Đăng nhập
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
