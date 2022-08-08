<template>
  <div class="sm:px-4 md:px-4">
      <div class="flex w-full bg-white-200 border-2 border-b-indigo-300 flex-row justify-between" >
        <div class="mt-5 mx-6 mb-5">
          <img src="../assets/home.svg" alt="home-tui">
        </div>
        <button data-drawer-dismiss="drawer-navigation" aria-controls="drawer-navigation" type="button" class="hidden xs:block xl:hidden lg:hidden text-blue-700 focus:ring-4 focus:outline-none font-medium text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white mx-4" @click="toggle()">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
          <span class="sr-only">Icon description</span>
        </button>
      </div>
      <div id="drawer-navigation" class="flex w-full justify-center bg-white-200 border-2 border-b-indigo-300" >
        <div class="mt-5 mb-5 mx-6 title ">
          <form>   
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Pesquisar</label>
              <div class="relative">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input 
                    type="search" 
                    id="default-search" 
                    class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Find a hotel"
                    v-model="hotelName" 
                    required
                  >
              </div>
              <div class="flex justify-center filter">
                <button type="button" class="h-min mt-4 text-gray-900 bg-white hover:bg-gray-100 border border-indigo-800 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2" @click="toggle()">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd" />
                  </svg>
                  Filtrar
                </button>
              </div>
          </form>
        </div>
      </div>
      <div>
        <Home :hotelName="hotelName"/>
      </div>
      <div class="fixed inset-0 flex z-40" v-if="getOpenMenu">
        <div
          class="absolute flex top-0 h-screen z-20"
          :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
        >
          <div
            class="transition-all duration-700 bg-white overflow-hidden flex items-center justify-center sidebar"
          >
            <Menu></Menu>
            <slot></slot>
          </div>
        </div>

        <transition name="fade">
          <!-- Dimmer -->
          <div
            v-if="getOpenMenu"
            @click="close()"
            class="flex-1 bg-gray-400 bg-opacity-75 active:outline-none z-10"
          />
        </transition>
      </div>
  </div>
</template>

<script>

import Home from './Home.vue';
import Menu from './Menu.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {Home, Menu},
  data() {
		return {
      hotelName: "",
			open: false,
			right: false
		};
	},
	methods: {
    ...mapActions("template", ["openMenu"]),
		toggle() {
      this.openMenu(true);
			this.open = !this.open;
		},
    close() {
      this.openMenu(false);
    }
	},
  computed:{
    ...mapGetters("template", ["getOpenMenu"]),

  }
}
      
</script>
<style lang="scss" scoped>
  .title{
    @media screen and (max-width: 600px){
      margin-left: 24px;
      width: 100%
    }

    @media screen and (max-width: 1200px){
      margin-left: 24px;
      width: 100%
    }

    @media screen and (min-width: 1024px){
      margin-left: 280px;
      margin-right: 10%;
      width: 100%
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease-out;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  .sidebar{
    width: 100vw;
    display: flex;
    justify-content: flex-start;
  }

  .filter{
    display: none;
    @media screen and (max-width: 1204px){
      display: flex;
      flex-direction: justify-center;
    }
    button{
      height: 30px;
    }
  }
</style>