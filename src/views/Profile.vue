<template>
  <div>
     <div class="container-fluid header">
      <!-- <li class="bread-crumb"> -->
        <h1 class="dashboard-p">Profile</h1>
        <ol class="breadcrumb" style="background-color: rgb(255, 251, 251); ">
          <li class="breadcrumb-item"><a href="" style="color:grey; text-decoration:none;">Home</a></li>
          <li class="breadcrumb-item"><a href="" style="color:grey; text-decoration:none;" >Profile</a></li>
          <li class="breadcrumb-item" style="color:grey; text-decoration:none;"> Structure</li>     
        </ol>
        <div class="profile-btn">
          <i class=""></i><button class="btn btn-primary" style="font-size:16px; width:120px;">
      
            <i class="fa fa-plus"></i> Create New</button>
        </div>
        <!-- </div> -->         
    </div>
      <div class="main-content1 container-fluid ">
      <!-- <div class="container"> -->
        <div class="row profile-box"  >
          <div class="col-md-3 profile-box-1">
            <div class="card" style="width: 24rem; ">
              <img class="card-img-top" :src="image" alt="Card image cap">
                <div class="card-body">
                <h1>Alex Costa</h1>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button>Read more</button>
              </div>
            </div> 
          </div> 
          <div class="col-md-3" style="margin-bottom:30px;">
            <div class="card" style="width: 24rem;  ">
              <img class="card-img-top" :src="image" alt="Card image cap">
                <div class="card-body">
                <h1>Alex Costa</h1>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button>Read more</button>
              </div>
            </div> 
          </div>     
          <div class="col-md-3">
            <div class="card" style="width: 24rem; ">
              <img class="card-img-top" :src="image" alt="Card image cap">
                <div class="card-body">
                <h1>Alex Costa</h1>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button>Read more</button>
              </div>
            </div> 
          </div>     
          <div class="col-md-3">
            <div class="card" style="width: 24rem;  ">
              <img class="card-img-top" :src="image" alt="Card image cap">
                <div class="card-body">
                <h1>Alex Costa</h1>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button>Read more</button>
              </div>
            </div> 
          </div>     
          <div class="col-md-3">
            <div class="card" style="width: 24rem;  ">
              <img class="card-img-top" :src="image" alt="Card image cap">
                <div class="card-body">
                <h1>Alex Costa</h1>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button>Read more</button>
              </div>
            </div> 
          </div>     
          <div class="col-md-3">
            <div class="card" style="width: 24rem;  ">
              <img class="card-img-top" :src="image" alt="Card image cap">
                <div class="card-body">
                <h1>Alex Costa</h1>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button>Read more</button>
              </div>
            </div> 
          </div>     
          <div class="col-md-3">
            <div class="card" style="width: 24rem;  ">
              <img class="card-img-top" :src="image" alt="Card image cap">
                <div class="card-body">
                <h1>Alex Costa</h1>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button>Read more</button>
              </div>
            </div> 
          </div>          
          <div class="col-md-3">
            <div class="card" style="width: 24rem;  ">
              <img class="card-img-top" :src="image" alt="Card image cap">
                <div class="card-body">
                <h1>Alex Costa</h1>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button>Read more</button>
              </div>
            </div> 
          </div>     

      </div>
    </div>
  </div>
  
</template>



<script>
import image from "../assets/alex.jpg";
 
export default {
 components: {
    },
     data()
 	 {
    return{
      
		 image: image,
    }
  }
}
</script>

<style >
	.main-content1{
    margin-top: 30px;
	}
  /* .form-content{
    margin-left: 280px;
  } */
   .dashboard-p {
    margin-top: 42px;
    /* margin-right: 1121px; */
    margin-left: 10px;
    text-align: left;
  }
  .a-style{
    margin-left: 40px;
    text-align: left;
    font-size: 15px;
    color: grey;
    text-decoration: none;
  }
  .profile-box{
    padding-left: 40px;
  }
  .profile-btn {
    margin-left: 91%;
    margin-top: -68px;
  }
   @media screen and (max-width:786px) {
    .dashboard-p {
      margin-left: 160px;
    }
    .prof-col{
      margin-bottom: 40px;
    }
    .a-style {
      margin-left: 160px;
    }
    .profile-box{
      padding-left: 100px;
      margin-bottom: 30px;
    }
    .profile-box-1 {
      margin-bottom: 30px;
    }
  }
</style>