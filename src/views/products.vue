<template>
    <main class="wrapper">
        <h1>Products</h1>

        <div class="card-container">
            <product-card
          v-for="(product, index) in inventory"
          :key="product.id" class="card"
          :index="index"
          :product="product"
          :addToCart="addToCart"
          />
        </div>
    </main>
</template>

<script>
import productCard from '@/components/productCard.vue'

export default {
  props: ['inventory', 'addToCart'],
  components: {
    productCard
  }
}
</script>
