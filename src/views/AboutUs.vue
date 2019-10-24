<template>
  <div>
     <div class="container-fluid header">
      <!-- <li class="bread-crumb"> -->
        <h1 class="dashboard-A">Settings</h1>
        <ol class="breadcrumb" style="background-color: rgb(255, 251, 251); ">
          <li class="breadcrumb-item"><a href="" style="color:grey; text-decoration:none;">Home</a></li>
          <li class="breadcrumb-item"><a href="" style="color:grey; text-decoration:none;" >Settings</a></li>
          <li class="breadcrumb-item" style="color:grey; text-decoration:none;"> Structure</li>     
        </ol>
        <!-- </div> -->         
    </div>
    <div class="container-fluid " style="margin-top:50px; padding-left:19px;">
      <div class="card">
        <div class="card-header">
         <h1> Overview About Us Based on Our Website layout and Content.</h1>
        </div>
        <div class="card-body" style="font-size:20px;">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cupiditate dolorum incidunt vitae. Voluptate voluptatum explicabo illo ipsam! Ex voluptate doloremque beatae, culpa repudiandae possimus maiores ut iste nisi consectetur?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt magnam voluptates vitae nam doloribus aliquam corporis impedit! Cupiditate amet, aut debitis dolore itaque velit temporibus est exercitationem. Commodi, possimus saepe?</p>
           <a >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum doloremque autem aut dolorem earum culpa ipsum non quaerat voluptatibus, neque rerum! Quibusdam est qui quidem laboriosam, ipsam impedit iusto.</a>
           <h4 style="margin-top:10px;">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At minima veniam sit cumque. Possimus quis amet totam accusamus cumque qui dignissimos quaerat numquam ad vel, repellendus alias corrupti neque rem!</h4>
           <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sequi modi exercitationem molestiae perferendis laboriosam assumenda repellendus. Quasi a similique, mollitia fugit eveniet assumenda accusamus cumque amet qui libero reiciendis.</h5>
           <button class="btn btn-primary" style="font-size:15px;">Read More</button>
        </div>
        <div class="card-footer" style="height:150px; background-color:#f5f2f0;">
          <h3 style="margin-top:30px;"> Basic terms and finance report status of work and its content. <small><a href=""  style="text-decoration:none;">Click here</a></small></h3>
          <button class="btn btn-default contact" style=" font-size:15px;">Contact Us</button>
        </div> 
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style >
  .dashboard-A {
    margin-top: 42px;
    /* margin-right: 1121px; */
    margin-left: 10px;
    text-align: left;
 
  }
  .A-style{
    margin-left: 39px;
    text-align: left;
    font-size: 15px;
    color: grey;
    text-decoration: none;
  }
  .contact {
    margin-top:20px;
     font-size:18px;
  }

   @media screen and (max-width:786px) {
    .dashboard-A {
      margin-left: 160px;
    }
    .contact {
      margin-top:0px; 
      font-size:15px;
    }
    .A-style {
      margin-left: 160px;
    }
   }

</style>