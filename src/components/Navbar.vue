<template>
      <div class="side-nav">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <div class="collapse-menu-icon-container">
            <a href="javascript:void(0)"  @click="myFunction()"><i class="fa fa-bars icon-style" style="  " aria-hidden="true"></i></a>
          </div>
          <!-- <b-navbar-brand href="#" style="margin-top:10px; font-size:24px;" class="title">Website</b-navbar-brand> -->
            <router-link to="/"  style="text-decoration:none; font-size:28px; "> <a href=" " style="text-decoration:none; color:white;" class="website">Website</a></router-link>
            <div class="collapse-menu">
            </div>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>  

          <b-collapse id="nav-collapse" style="font-size:20px;"  is-nav>
            <b-nav-form>
              <b-form-input size="xl" class="mr-md-2" placeholder="Search"></b-form-input>
              <b-button size="md" class="my-8 my-sm-8  form-style" type="submit">Search</b-button>
            </b-nav-form>
           

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto ">
         
            <!-- <i class="fa fa-plus-square" aria-hidden="true"></i> -->
            <!-- <b-nav-item-dropdown text="Lang " right>
              <b-dropdown-item href="#"  style="font-size:15px;">EN</b-dropdown-item>
              <b-dropdown-item href="#"  style="font-size:15px;">ES</b-dropdown-item>
              <b-dropdown-item href="#"  style="font-size:15px;">RU</b-dropdown-item>
              <b-dropdown-item href="#"  style="font-size:15px;">FA</b-dropdown-item>
            </b-nav-item-dropdown> -->
            <!-- <b-dropdown id="dropdown-right" right text="" style="backgroung-color:white; border: 1px solid white;" variant="default" class="m-2" >
              <b-dropdown-item href="#" style="font-size:15px;">Action</b-dropdown-item>
              <b-dropdown-item href="#" style="font-size:15px;">Another action</b-dropdown-item>
              <b-dropdown-item href="#" style="font-size:15px;">Something else here</b-dropdown-item>
            </b-dropdown> -->

            <b-nav-item-dropdown right class="mainside-image" di>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <!-- <em>User</em> --> 
                <img :src="image" class="side-image" alt="">
              </template>
              <router-link to="/setting" style="text-decoration:none;">
               <b-dropdown-item href="#" style="font-size:15px;">Setting</b-dropdown-item>
              </router-link>
              <router-link to="/setting" style="text-decoration:none;">
                <b-dropdown-item href="#" style="font-size:15px;">Sign Out</b-dropdown-item>  
              </router-link>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>
<script>
import image from "../assets/alex.jpg";
export default {
  components: {
    
  },
  data() {
    return {
      image: image
    }
  },
  methods: {
    myFunction() {
      let showhide = document.getElementById('mySidenav');
      
      if(showhide.style.left === "-250px"){
          showhide.style.left = "0px";
      } else {
          showhide.style.left = "-250px";
      }
    }
  }
}
</script>

 <style >
 .icon-style {
   display: none;
   color:#cee5e9;
   background-color: #17a2b8;
   width: 35px;
   border: 1px solid rgb(184, 184, 219);
   height: 27px;
   font-size: 19px;
 }
 .side-nav {
   z-index: 10;
   position: fixed;
   top: 0;
   width: 100%;
 }
 .side-image{
    border-radius: 3px;
    width: 40px;
    margin-top: -13px;
    height: 40px;
    margin-bottom: -10px;
 }
 .action-list {
    float: right;
    list-style: none;
    margin: 0;
}
.action-list .dropdown-group {
    background-color: #ffffff;
}
 .dropdown-group .dropdown-container.align-right {
    right: 0;
    left: auto;
}  

@media screen and (max-width: 786px) {
    .form-style {
      margin-left: 199px;
      margin-top: 10px;
    }
    .title {
      /* margin-right: 277px; */
      display: none;
    }
    .icon-style {
      display: block;
      margin-right: 130px;
    }
    .website {
      display: none;
    }

}


@media screen and (max-width: 568px) {
  .form-style {
    /* margin-left: 115px; */
    display: none;
  }
}
 </style>