<template>
  <div class="xl:block divide-y menu xl:pl-8 lg:pl-8 menu">
    <div class="menu__mobile__header flex align-center">
        <button type="button" class="text-black-600/50 focus:ring-4 focus:outline-none font-medium text-sm p-2.5 ml-4 mr-2" @click="toggle()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>      
        </button>
        <span>Filter</span>
    </div>
    <div class="bg-white my-8 menu__body pl-8 menu__mobile">
      <h2 class="mb-2 pt-5 font-bold text-gray-900 dark:text-white text-left">Country</h2>
      <ul class="pb-2.5 w-48 text-sm font-medium text-gray-900 bg-white rounded-lg  dark:text-white">
          <li class="flex-1 rounded-t-lg" v-for="(item, index) in options" :key="index" >
              <div class="flex justify-start items-center">
                  <input :id="angular-checkbox+index" v-model="optionsSelected" type="radio" :value="item.id" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  <label for="angular-checkbox" class="py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{item.value}}</label>
              </div>
          </li>
      </ul>
    </div>
    <div class="bg-white my-8 menu__body pl-8 menu__desktop">
      <h2 class="mb-2 pt-5 font-bold text-gray-900 dark:text-white text-left">Country</h2>
      <ul class="pb-2.5 w-48 text-sm font-medium text-gray-900 bg-white rounded-lg  dark:text-white">
          <li class="flex-1 rounded-t-lg" v-for="(item, index) in options" :key="index" >
              <div class="flex justify-start items-center">
                  <input :id="angular-checkbox+index" v-model="optionsSelected" type="radio" :value="item.id" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" @click="search">
                  <label for="angular-checkbox" class="py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{item.value}}</label>
              </div>
          </li>
      </ul>
    </div>
    <div class="menu__mobile__footer pl-4 pb-4">
        <button type="button" class="text-blue-700 hover:text-white border border-indigo-800 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 ml-2 mr-6" @click="optionsSelected = null">Clear</button>
        <button type="button" class="text-white bg-indigo-800 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2" @click="search">Apply</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
		return {
            optionsSelected: [],
			options: [
                {
                    id: 'IT',
                    value: 'Italy'
                },
                {
                    id: 'PT',
                    value: 'Portugal'
                },
                {
                    id: 'ES',
                    value: 'Spain'
                }
            ]
		};
	},
    methods:{
        ...mapActions("template", ["openMenu"]),
        ...mapActions("main", ["fetchList"]),
        toggle(){
            this.openMenu(false);
        },
        async search(){
            await this.fetchList(this.optionsSelected);
            this.toggle();
        }
    }
}
</script>
    
<style lang="scss" scoped>
    .menu{
        @media screen and (max-width: 600px){
            width: 100%;
        }
        .menu__mobile__header{
            height: 50px;
            display: none;
            @media screen and (max-width: 600px){
                display: flex;
                align-items: center;
            }
        }

        .menu__mobile{
            display: none;
            @media screen and (max-width: 1024px){
                display: block;
                align-items: center;
            }
        }

        .menu__desktop{
            display: none;
            @media screen and (min-width: 1025px){
                display: block;
            }
        }

        .menu__body{
            @media screen and (max-width: 600px){
                height: calc(100vh - (50px + 50px));
                margin-top: 0;
                margin-bottom: 0;
            }
        }

        .menu__mobile__footer{
            height: 50px;
            display: none;
            @media screen and (max-width: 600px){
                display: block;
            }
        }
    }
</style>