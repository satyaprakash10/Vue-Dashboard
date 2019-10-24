<template>
<div>
   <div class="container-fluid header">
      <!-- <li class="bread-crumb"> -->
        <h1 class="dashboard-p">Gallery</h1>
        <ol class="breadcrumb" style="background-color: rgb(255, 251, 251); ">
          <li class="breadcrumb-item"><a href="" style="color:grey; text-decoration:none;">Home</a></li>
          <li class="breadcrumb-item"><a href="" style="color:grey; text-decoration:none;" >Gallery</a></li>
          <li class="breadcrumb-item" style="color:grey; text-decoration:none;"> Structure</li>     
        </ol>
        <!-- </div> -->         
    </div>
      <div class="picture">
      <div class="card">
        <div class="card-header">
          <h1 class="title-g" >Gallery Images. <small>Pictures.</small></h1>
        </div>
        <div class="card-body">
                <div class="row picture" style="padding-left:45px;">
            <div class="col-sm-3 picture" >
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                <a href=""> <img class="card-img-top" :src="image" width="200" height="150"  ></a>
                </div>
            </div>
            </div>
            <div class="col-sm-3 picture">
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <a href=""> <img class="card-img-top" :src="image2" width="300" height="150"  ></a>
                </div>
              </div>
            </div>
            <div class="col-sm-3 picture">
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                <a href=""> <img class="card-img-top" :src="image3" width="200" height="150"  ></a>
                </div>
              </div>
            </div>
            <div class="col-sm-3 picture">
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <a href=""> <img class="card-img-top" :src="image4" width="200" height="150"  ></a>
                </div>
              </div>
          </div>
          <div class="col-sm-3 picture">
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <a href=""> <img class="card-img-top" :src="image5" width="200" height="150"  ></a>
                </div>
              </div>
          </div>
          <div class="col-sm-3 picture">
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <a href=""> <img class="card-img-top" :src="image6" width="200" height="150"  ></a>
                </div>
              </div>
          </div>
          <div class="col-sm-3 picture">
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <a href=""> <img class="card-img-top" :src="image7" width="200" height="150"  ></a>
                </div>
              </div>
          </div>
          <div class="col-sm-3 picture">
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <a href=""> <img class="card-img-top" :src="image8" width="200" height="150"  ></a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>     
  </div>
</div>
 
</template>
<script>
import image from '../assets/galler1.jpg';
import image2 from '../assets/galler2.jpg';
import image3 from '../assets/galler3.jpg';
import image4 from '../assets/galler4.jpg';
import image5 from '../assets/galler5.jpg';
import image6 from '../assets/galler6.jpg';
import image7 from '../assets/galler7.jpg';
import image8 from '../assets/galler8.jpg';
export default {
    data: function() {
      return {
        image:  image,
        image2: image2,
        image3: image3,  
        image4: image4,
        image5: image5,
        image6: image6,
        image7: image7,
        image8: image8,
      }
    }
}
</script>
<style >
    .picture {
      margin-top: 40px;
    }
    .title-g {
      text-align: left;
      margin-left: 40px;
    }
   .dashboard-g {
     margin-top: 20px;
    /* margin-right: 1121px; */
    margin-left: 40px;
    text-align: left;
  }
  .a-style{
    margin-left: 40px;
    font-size: 15px;
    color: grey;
    text-decoration: none;
  }
   @media screen and (max-width:786px) {
    .dashboard-g {
      margin-left: 160px;
    }
    .a-style {
      margin-left: 10px;
    }
    .title-g{
      margin-right:250px;
    }
    
  }
</style>