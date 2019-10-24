<template>
  <div>
     <navbar />
     <sidebar />
      <div class="main-content"> 
        <router-view />  
      </div>   
  </div>
</template>
<script>
import navbar from "../components/Navbar";
import sidebar from "../components/Sidebar";
export default {
    components:{
        navbar,
        sidebar
    }
}
</script>

<style >
  .main-content {
    padding-left: 240px;
    position: absolute;
    width: 100%;
    overflow-x: hidden;
    background: rgb(235, 245, 250);
    margin-top: 61px;
  }

  @media screen and (max-width:786px) {
     .main-content{
       padding-left: 0px;
       /* width: 0px; */
       margin-top: 50px;
     }
  }
</style>