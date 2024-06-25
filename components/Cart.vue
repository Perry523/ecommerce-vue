<template>
  <div class="drawer drawer-end">
    <input
      id="my-drawer-2"
      type="checkbox"
      class="drawer-toggle"
      v-model="cart.isModalActive"
    />
    <div
      class="drawer-content bg-base-100 sm:h-full overflow-auto h-[calc(100%-50px)]"
    >
      <!-- Page content here -->
      <slot></slot>
    </div>
    <div class="drawer-side shadow-xl">
      <label for="my-drawer-2" class="drawer-overlay"></label>

      <div
        class="w-80 flex flex-col h-[calc(100%-50px)] sm:h-full bg-base-100 text-base-content overflow-auto"
      >
        <div class="flex flex-row justify-between mr-1 p-2 rounded">
          <span class="font-bold text-lg">Carrinho</span>
          <XMarkIcon class="w-6 cursor-pointer" @click="cart.toggleModal()" />
        </div>
        <hr />
        <div
          v-if="cart.products.length === 0"
          class="flex justify-center items-center h-full"
        >
          <div class="flex flex-col items-center">
            <ExclamationCircleIcon class="w-12 text-warning" />
            <p class="text-lg font-bold mt-4">Seu carrinho está vazio</p>
          </div>
        </div>
        <template v-else>
          <div class="overflow-y-auto space-y-2 mt-1">
            <!-- <div class="font-bold text-center">Produtos</div> -->
            <cart-card
              cart
              :item="item"
              class="mx-1"
              v-for="item in cart.products"
              :key="item.id"
              @delete="cart.deleteItem"
            />
          </div>

          <div
            class="p-5 px-3 shadow-md flex justify-between items-center mt-auto"
          >
            <div class="text-lg">
              Total: <b>{{ "total" }}</b>
            </div>
            <base-button
              type="submit"
              class=""
              :disabled="drawer.cart.length === 0"
              @click="
                () => {
                  router.push('/checkout');
                  drawer.toggleActive();
                }
              "
            >
              Finalizar pedido
            </base-button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lant="ts">
import { XMarkIcon } from "@heroicons/vue/24/solid";

import { useCart } from "@/store/cart";
import { ExclamationCircleIcon } from "@heroicons/vue/24/outline";
const router = useRouter();
const cart = useCart();
</script>
