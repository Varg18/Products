<template>
  <div class="max-w-2xl flex flex-col mb-5 mx-auto pt-5">
    <h1 class="font-bold text-3xl mb-2 text-center">Products Page</h1>
    <button
        class="mt-5 mx-auto bg-blue-200 border py-2 px-4 rounded mb-2"
        :class="[product ? 'bg-red-300' : 'bg-blue-200']"
        @click="product = !product"
    >
      {{ product ? 'Hide Products' : 'Show Products' }}
    </button>
    <div>
      <Products v-if="product" v-for="pr in store.products" :key="pr.id" :productData="pr"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Products from "@/pages/products/Products.vue";
import {onMounted, ref} from "vue";
import {useProducts} from "@/stores/useProducts";

let product = ref(false)
const store = useProducts()

onMounted(() => {
  store.getAll()
})
</script>

<style scoped>

</style>