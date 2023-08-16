<template>
  <div class="py-4 px-6 border rounded flex flex-col items-center mb-2">
    <img :src="productData.image" alt="" class="w-1/6 mb-3">
    <h2 class="mb-2 text-md text-center">{{productData.title}}</h2>
    <p>Price: <span class="font-bold">${{productData.price}}</span></p>
    <button
        class="mt-5 mx-auto bg-blue-200 border py-2 px-4 rounded mb-2"
        :class="[product ? 'bg-red-300' : 'bg-blue-200']"
        @click="product = !product"
    >
      {{ product ? 'Hide' : 'Show' }}
    </button>
    <p v-if="product">{{productData.description}}</p>
    <p>Rate: <span class="font-bold">{{productData.rating.rate}}</span></p>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
defineProps({
  productData: []
})

let product = ref(false)

let details = false
</script>

<style scoped>

</style>