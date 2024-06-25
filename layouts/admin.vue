<template>
  <div class="bg-base-300">
    <TheHeader />
    <div class="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        class="drawer-toggle"
        v-model="drawer.active"
      />
      <div class="bg-base-200 drawer-content flex">
        <sidebar />
        <slot></slot>
      </div>
      <div class="drawer-side shadow-xl">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="w-80 bg-base-100 text-gray-300">
          <div
            class=""
            v-for="({ to, label, icon }, i) in drawer.routes"
            :key="i"
          >
            <li
              @click="
                router.push(to);
                drawer.toggleActive();
              "
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
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDrawer } from "@/store/drawer";
import { ArrowLeftOnRectangleIcon } from "@heroicons/vue/24/solid";
const router = useRouter();
const route = useRoute();
const drawer = useDrawer();
</script>
