<template>
  <div class="btm-nav flex sm:hidden">
    <button
      v-for="{ icon, to, label } in drawer.routes"
      :key="to"
      :class="
        to === route.path ? 'active bg-primary border-gray-300' : 'bg-base-200'
      "
      class="relative"
      @click="router.push(to)"
    >
      <component :is="icon" class="w-5 h-5"></component>
      <span class="text-xs">{{ label }}</span>
    </button>
  </div>
</template>
<script setup lang="ts">
import { useDrawer } from "@/store/drawer";

const router = useRouter();
const route = useRoute();
const drawer = useDrawer();
</script>
