<template>
  <div>

   <button @click="listen">爸爸听电话</button><br>
   <subVue></subVue>
  </div>
</template>
<script>
import connector from "./connect.js";

export default{
	data(){
		return {
			a:"今天星期二"
		}
	},
	methods:{
       listen(){
       	connector.$on("phone",function(msg){
       		console.log(msg);
       	})
       }
	}
}
</script>
<style>
</style>