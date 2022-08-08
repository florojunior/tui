<template>
<div class="flex w-full">
   <div class="bg-background-home flex w-full flex-row ">
        <Menu class="hidden lg:block xl:block"/>
        <div class="xl:w-4/5 lg:w-5/5 md:w-5/5 sm:w-5/5 px-6">
            <div class="xl:w-1/3 lg:w-1/3 md:w-5/5 sm:w-5/5">
                <div>
                    <h1 class="text-3xl font-semibold my-5 mb-1">{{hotelName}}</h1>
                    <p class="mb-8">{{getListFiltered.length}} results</p>
                </div>
            </div>
            <Cards 
                v-for="hotels in getListFiltered" :key="hotels" 
                :hotelName="hotels.hotelName" 
                :city="hotels.city.label"
                :region="hotels.region.label"
                :country="hotels.country.label"
                :hotelValue="hotels.displayPrice.amount"
                :currency="hotels.displayPrice.currency"
                :starRating="parseInt(hotels.starRating)"
            />
            <div class="flex justify-center" v-if="getListFiltered.length > 0">
                <button type="button" class="text-white bg-indigo-800 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="loadMoreOffers()">Load more offers</button>
            </div>
        </div>
   </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Cards from './Cards.vue';
import Menu from './Menu.vue';
export default {
    props:{
        hotelName: String
    },
    components:{Cards, Menu},
    name: "Body",
    data() {
		return {
			counterListPagination: 10
		};
	},
    async created() {
        await this.fetchList();
    },
    computed: {
        ...mapGetters("main", ["getList"]),
        getListFiltered(){
            const list = this.getList.data;
            if(list)
                return list.filter((item)=> item.hotelName.search(this.hotelName) >= 0)
            else 
                return []
        }
    },
    methods: {
        ...mapActions("main", ["fetchList", "increaseCounterPageValue"]),
        initialize() {
            this.hotels = [""];
        },
        async loadMoreOffers(){
            this.increaseCounterPageValue();
            await this.fetchList();
        }
    }
}
</script>