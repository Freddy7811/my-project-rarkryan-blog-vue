<template>
    <!-- Navigation -->
    <div id="nav">
    <Navigation/>
  </div>
   <!-- Navigation -->  
  <router-view> </router-view>
  <Footer/>
</template>


<script>
    import Navigation from '@/components/Navigation.vue';
    import Footer from '@/components/Footer.vue';
    

export default {
    name: "App",
    components:{
        Navigation,
       Footer
    },
    props: {},
    data() {},
    methods:{},
    mounted() {}
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  --webkit-font-smoothing: antialiased;
  --moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav a {
    font-weight: bold;
    color: whitesmoke;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>