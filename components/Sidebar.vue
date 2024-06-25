<template>
  <div class="shadow-xl w-80 bg-base-100 text-gray-300 hidden lg:block">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="w-80 bg-base-100 text-gray-300">
      <!-- Sidebar content here -->
      <!-- <div
          v-if="status === 'authenticated'"
          class="flex items-center justify-between my-3 pl-2 pr-1 font-medium"
        >
          <div class="flex items-center">
            <div class="avatar">
              <div class="w-8 mr-2 rounded-full">
                <nuxt-img :src="user?.image" />
              </div>
            </div>
            <li class="">Olá, {{ user?.name }}</li>
          </div>
          <div
            @click="
              signOut();
              drawer.toggleActive;
            "
            class="flex cursor-pointer"
          >
            <div>Sair</div>
            <arrow-right-on-rectangle-icon class="w-5 h-5 ml-1" />
          </div>
        </div> -->

      <div class="" v-for="({ to, label, icon }, i) in drawer.routes" :key="i">
        <li
          @click="router.push(to)"
          class="flex text-lg items-center py-3 pl-3 pr-1 cursor-pointer"
          :class="
            to === route.path
              ? 'bg-base-300 border-r-2 border-primary'
              : 'hover:bg-gray-600'
          "
        >
          <custom-icon
            v-if="typeof icon === 'string'"
            :url="icon"
            class="w-6 h-6 mr-3 fill-gray-300"
          ></custom-icon>
          <component
            v-else
            :is="icon"
            class="w-6 h-6 mr-3 fill-gray-300"
          ></component>

          <a>{{ label }}</a>
        </li>
      </div>
      <div class="">
        <li
          @click="() => {}"
          class="flex text-lg items-center py-3 pl-3 pr-1 cursor-pointer hover:bg-gray-600"
        >
          <ArrowLeftOnRectangleIcon
            class="w-6 h-6 mr-3 fill-gray-300"
          ></ArrowLeftOnRectangleIcon>

          <a>Sair</a>
        </li>
      </div>
      <li><a></a></li>
    </ul>
  </div>
</template>

<script setup>
import { useDrawer } from "@/store/drawer";
import { ArrowLeftOnRectangleIcon } from "@heroicons/vue/24/solid";
// import { useLoginStore } from "@/store/login";

// const loginStore = useLoginStore();
const router = useRouter();
const route = useRoute();
const drawer = useDrawer();
// function logout() {
//   loginStore.logout();
//   localStorage.removeItem("token");
//   router.push("/login");
// }
</script>
