import { defineStore } from "pinia"
import axios from "axios";

interface Products {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export const useProducts = defineStore({
    id: "Products",
    state:()  => ({
        products: [] as Products
    }),
    getters: {},
    actions: {
        async getAll(): Products[] {
            try {
                const data = await axios.get('https://fakestoreapi.com/products')
                this.products = data.data
                console.log(data.data)
            } catch (e) {
                console.log(e)
            }
        }
    }
})