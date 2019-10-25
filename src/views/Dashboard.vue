<template>
  <div>
     <div class="container-fluid header">
      <!-- <li class="bread-crumb"> -->
        <h1 class="dashboard-d">Dashboard</h1>
        <ol class="breadcrumb" style="background-color: rgb(255, 251, 251); ">
          <li class="breadcrumb-item"><a href="" style="color:grey; text-decoration:none;">Home</a></li>
          <li class="breadcrumb-item"><a href="" style="color:grey; text-decoration:none;" >Dashboard</a></li>
          <li class="breadcrumb-item" style="color:grey; text-decoration:none;"> Structure</li>     
        </ol>
        <div class="rating">
          <i class=""></i><button class="btn btn-success" style="font-size:16px; width:150px;">Update dashboard</button>
        </div>
        <!-- </div> -->         
    </div>
      
     <div class="row content" style="margin-left:10px; margin-top:30px;">
        <div class="col-md-9 box-1">
          <div class="card-header bg-white" >
            <h1 style="text-align:left; margin-top:10px;">Sales OverView..
              <a href="" style=" font-size:12px;  text-decoration:none;">Apple admin vs Pixel admin.</a>
              <div class="form-group1" style="  " >
                <select v-model="selected" style="font-size:20px;">
                  <!-- <option disabled value="">Please select one</option> -->
                  <option>This Year</option>
                  <option>Previous Year</option>
                  <option>Current</option>
                </select>
                <span> {{ selected }}</span>
              </div>
            </h1>
          </div>
          <div class="card-body bg-white">
          <LineChart
              :labels="[
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Satuerday'
              ]"
              :values="[50, 100, 150, 200, 250, 300]"
            />
          </div>
        </div>
    
        <div class="col-md-3 box-2">
          <div class="card-header bg-white">
            <h1 style="text-align:left; margin-top:10px;">Our Visitor
               <a href="" style="font-size:10px; text-decoration:none;">Different Devices used to visit.</a>
            </h1>
             
          </div>
          <div class="card-body bg-white">
            <DoughnutChart
              :labels="['January', 'February', 'March', 'April', 'May']"
              :values="[80, 70, 40, 20, 50]"
            />
            <!-- <div class="card-footer"> -->
              <div class="card-footer">
                <ul class="lists-1" style="font-size:14px;">
                  <li>Apple</li>
                  <li>Samsung</li>
                </ul>
                <ul  class="lists-2" style="font-size:14px;">
                  <li>GooglePixel</li>
                </ul>
              </div>
            <!-- </div> -->
          </div>
        </div>
    </div> 
     <div class="container-fluid sub-content " style=" ">
       <div class="row row-style ">
         <div class="col-md-3" style="padding-bottom: 30px;">
           <div class="card">
             <div class="card-header ">
               <h3 style="text-align:left;">Sales <small>Overview</small></h3>
             </div>
             <div class="card-body">
               <table class="table">
                 <thead>
                   <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Test</th>
                     <th>Marks</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td>1</td>
                     <td>sp</td>
                     <td>Hindi</td>
                     <td>0</td>
                   </tr>
                    <tr>
                     <td>1</td>
                     <td>sp</td>
                     <td>Hindi</td>
                     <td>0</td>
                   </tr>
                    <tr>
                     <td>1</td>
                     <td>sp</td>
                     <td>Hindi</td>
                     <td>0</td>
                   </tr>
                    <tr>
                     <td>1</td>
                     <td>sp</td>
                     <td>Hindi</td>
                     <td>0</td>
                   </tr>
                    <tr>
                     <td>1</td>
                     <td>sp</td>
                     <td>Hindi</td>
                     <td>0</td>
                   </tr>
                 </tbody>
               </table>
             </div>
            <div class="card-footer" style="text-align:left;">
               Sales price details
             </div>
           </div>
         </div>
         <div class="col-md-9" >
           <div class="card">
             <div class="card-header">
               <h3 style="text-align:left;">Annual Income <small>Overview</small></h3>
               <!-- <a href="" style="   justify-content: space-around; text-decoration:none; color: grey; border:1px solid;">Details</a> -->
             </div>
             <div class="card-body">
               <table class="table">
                 <thead>
                   <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Test</th>
                     <th>Marks</th>
                     <th>Price</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td>1</td>
                     <td>sp</td>
                     <td>Hindi</td>
                     <td>0</td>
                     <td>$50</td>
                   </tr>
                    <tr>
                     <td>1</td>
                     <td>sp</td>
                     <td>Hindi</td>
                     <td>0</td>
                    <td>$50</td>
                   </tr>
                    <tr>
                     <td>1</td>
                     <td>sp</td>
                     <td>Hindi</td>
                     <td>0</td>
                      <td>$50</td>
                   </tr>
                    <tr>
                     <td>1</td>
                     <td>sp</td>
                     <td>Hindi</td>
                     <td>0</td>
                    <td>$50</td>
                   </tr>
                    <tr>
                     <td>1</td>
                     <td>sp</td>
                     <td>Hindi</td>
                     <td>0</td>
                    <td>$50</td>
                   </tr>
                 </tbody>
               </table>
             </div>
             <div class="card-footer" style="text-align:left;">
               Sales price details
             </div>

           </div>
         </div>
         
       </div>
     </div>
      
  </div>
</template>

<script>
  import DoughnutChart from "../components/DoughnutChart.vue";
  import LineChart from "../components/LineChart.vue";
export default {
   components: {
        DoughnutChart,
        LineChart
    },
    data() {
      selected: ''
      return {
        
      }
    },
}
</script>

<style >
  .header {
    height: 132px;
    margin-top: -20px;
    background: rgb(255, 251, 251);
  }
  .dashboard-d {
    margin-top: 42px;
    /* margin-right: 1121px; */
    margin-left: 10px;
    /* height:10px; */
    text-align: left;
 
  }
  .d-style{
    /* margin-right: 449px; */
    text-align: left;
    margin-left: 20px;
    font-size: 15px;
    color: rgb(252, 249, 249);
    text-decoration: none;
  }
  .rating {
    margin-left: 86%;
    margin-top: -68px;
  }
  .row-style {
    font-size:20px;
    padding-left: 15px;
    overflow-x:hidden;
  }
  .sub-content {
    /* font-size: 20px; */
    margin-top:30px;
    /* overflow-x: hidden; */
  }
  .form-group1{
    margin-left: 80%; margin-top:-18px; 
  }
  @media screen and (max-width:786px) {
    .dashboard-d {
      margin-left: 10px;
    }
    .d-style {
      margin-left: 160px;
    }
    .rating {
      margin-left: 290px;
      /* margin-top: 5px; */
      /* font-size: 10px; */
    }
    .header {
      height: 132px;
    }

    .row-style {
      width: fit-content;
      padding-left: 10px;
      overflow: hidden;
      /* z-index: 100  */
    }
    .box-2 {
      margin-top:26px;
    }
    .form-group1{
      margin-left: 2px;
      margin-top: 0;
    }
    
  }
</style>