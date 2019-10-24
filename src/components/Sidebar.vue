 <template>
  <div>
    <div id="mySidenav" class="sidebar">
      <div class="profile">
        <img :src="image1"  class="alex-pro"> 
      </div>
        <a href="" style="font-size:20px; color:black; text-decoration:none;">Alex Coasta<i class="fa fa-check-circle" style="color:rgb(41, 146, 231);" aria-hidden="true"></i></a> 
        <hr>
        <div class="services">
          <ul class="">
            <router-link to="/" style="text-decoration:none;color:black;">
            <li class="menu-items "><i class="fa fa-dashboard icons icons-1"></i><a href="" style="text-decoration:none; color:black; ">Dashboard</a></li>
            </router-link>
            <router-link to="/profile" style="text-decoration:none;color:black; ">
             <li class="menu-items"><i class="fa fa-user-circle icons"></i><a href="" style="text-decoration:none;color:black; ">Profile</a></li>
            </router-link>
             <router-link to="/gallery" style="text-decoration:none; color:black;">
              <li class="menu-items"><i class="fa fa-picture-o icons"></i><a href="" style="text-decoration:none; color:black;">Gallery</a></li>
            </router-link> 
            <router-link to="/aboutus"  style="color:black; text-decoration:none;"> 
              <li class="menu-items"><i class="fa fa-linode icons"></i><a href="" style="text-decoration:none; color:black;">About Us</a></li>
            </router-link>
             <router-link to="/forms"  style="text-decoration:none;color:black; "> 
               <li class="menu-items"><i class="fa fa-rocket icons" ></i><a href="" style="text-decoration:none; color:black;">Form</a></li>
            </router-link>

             <router-link to="/setting"  style="text-decoration:none; color:black;"> 
              <li class="menu-items"><i class="fa fa-cog icons" ></i><a href="" style="text-decoration:none; color:black;">Setting</a></li>
             </router-link>

            <router-link to="/report"  style="text-decoration:none; color:black;"> 
              <li class="menu-items"><i class="fa fa-signal icons" ></i><a href="" style="text-decoration:none; color:black;">Report</a></li>
             </router-link>
         </ul>
        </div>
        <router-link to="upgradepro" style="text-decoration:none;"> 
         <button class="btn btn-primary" style="font-size:15px;">Upgrade to pro</button>
        </router-link>
    </div>
  </div>
</template>

 <script>
//  import Vue from "Vue";
 import image1 from "../assets/alex.jpg";
 export default{
     data() {
       return{
         image1: image1,
          
       }
     }
   }
 </script>

 <style >
  .sidebar { 
    margin-top:61px;
    z-index: 1;
    height: 1000px;  
    width: 241px;
    position: fixed;
    background-color: rgb(255, 255, 255);
    text-decoration: none;
    /* z-index: 10; */
  }
  .profile {
    margin-top: 20px;
  }
  .alex-pro {
    border-radius: 50px;
    width: 100px;
    height: 100px;
  }
  .menu-items {
    width: 100%;
    list-style: none;
    margin: 26px;
    text-align: left;
    padding: 5px 20px;
    text-decoration: none;
    margin-left: -55px;
    font-size: 16px;
  }
  .menu-items:hover {
    background: rgb(240, 237, 237);
    width:127%;
  }
  
  .icons {
    padding: 0 28px;
    text-decoration: none;
  }
  /* .icons1 {
    margin-top: auto;
    margin-left: -77px;
  } */
  @media screen and (max-width: 786px) {
    .sidebar{
      margin-top: 50px;
    }
  }
 </style>