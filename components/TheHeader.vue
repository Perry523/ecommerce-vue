<template>
  <div class="navbar bg-base-200 shadow-xl">
    <div class="flex-none">
      <button
        @click="drawer.toggleActive()"
        class="btn btn-square btn-ghost hidden sm:flex"
      >
        <bars3-icon class="w-7 h-7" />
      </button>
    </div>

    <div class="flex-1 pl-10 md:pl-0">
      <app-logo class="w-24 md:w-40 md:my-2 mx-auto" />
    </div>
    <button class="btn btn-ghost relative hover:" @click="cart.toggleModal()">
      <ShoppingCartIcon class="w-8" />
      <span
        class="rounded-full bg-orange-600 text-white font-bold w-4 h-4 text-xs text-center absolute top-1 right-2"
        >{{ cart.products.length }}</span
      >
    </button>
  </div>
</template>
<script lang="ts" setup>
import {
  Bars3Icon,
  ShoppingCartIcon,
  ArrowsUpDownIcon,
} from "@heroicons/vue/24/solid";
import { useDrawer } from "@/store/drawer";
import { useCart } from "@/store/cart";
const cart = useCart();
const drawer = useDrawer();
</script>
