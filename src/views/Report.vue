<template>
  <div>
    <div class="container-fluid header">
    <!-- <li class="bread-crumb"> -->
      <h1 class="dashboard-d">Report</h1>
      <ol class="breadcrumb" style="background-color: rgb(255, 251, 251); ">
        <li class="breadcrumb-item"><a href="" style="color:grey; text-decoration:none;">Home</a></li>
        <li class="breadcrumb-item"><a href="" style="color:grey; text-decoration:none;" >Report</a></li>
        <!-- <li class="breadcrumb-item" style="color:grey; text-decoration:none;"> Structure</li>      -->
      </ol>
      <div class="rating">
        <i class=""></i><button class="btn btn-primary download-btn" style="font-size:16px; width:140px;"><i class="fa fa-download"></i> Download Pdf</button>
      </div>
      <!-- </div> -->         
     </div> 
     <div class="col-sm-6" style="margin-top:30px;">
     <div class="card" >
       <div class="card-header" style="text-align:left; ">
         <h6  style="font-size:15px; ">Customer Info</h6>
       </div>
       <div class="card-body disabled">
         <form action="" style="font-size:15px; text-align:left;"> 
           <label for="">To</label>
           <input type="text" name="" class="form-control-1">
         </form>
         <form action="" style="font-size:15px; text-align:left;"> 
           <label for="">Subject</label>
           <input type="text" name="" class="form-control">
         </form>
         <form action="" style="font-size:15px; text-align:left;"> 
           <label for="">Message</label>
           <input type="text" name="" class="form-control">
         </form>
        <!-- <b-dropdown id=" "  text="Offset Dropdown"  >
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>   -->
         
         <div class="update-btn">
          <button class="btn btn-default " style="margin-top:10px; width:140px; font-size:18px;  background-color: skyblue;">
            <!-- <i class=" icon-fa fa fa-save" style=""></i> -->
            Update Report
          </button>
         </div>
       </div>
     </div>
    </div> 
     
  </div>
</template>

<style >
  .download-btn {
    margin-left: -21%;
    /* margin-top: -68px; */
  }
  .update-btn{
    text-align:left;
   
  }
</style>