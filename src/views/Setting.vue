 <template>
   <div>
    <div class="container-fluid header">
      <!-- <li class="bread-crumb"> -->
        <h1 class="dashboard-s">Settings<i class="fa fa-cog icons" style="color:grey;"></i></h1>
        <ol class="breadcrumb" style="background-color: rgb(255, 251, 251); ">
          <li class="breadcrumb-item"><a href="" style="color:grey; text-decoration:none;">Home</a></li>
          <li class="breadcrumb-item"><a href="" style="color:grey; text-decoration:none;" >Settings</a></li>
          <li class="breadcrumb-item" style="color:grey; text-decoration:none;"> Structure</li>     
        </ol>
        <!-- </div> -->  
        <!-- <button class="btn btn-success" style="font-size:15px;"> Settings</button>        -->
    </div>
    <div class="container-fluid" style="margin-top:40px;">
      <div class="row">
        <div class="col-sm-8">
          <div class="card">
           <div class="card-header" style="text-align:left;">
             <h2>Example Social Setting.</h2>
              <input type="text" name="" id="">
            </div>
             <div class="card-body">
               <div class="form">
                 <div class="form-body">
                   <div class="form-group row">
                     <label class="col-md-2 form-control-label" style="text-align:left; font-size:15px;">Facebook Page Url</label>
                     <div class="col-md-10">
                       <div class="input-icon">
                         <i class="icon-fa  fa fa-facebook"></i>
                         <input type="text" name="facebook" id="" value="https://facebook.com/teamcpbd13337">
                       </div>
                     </div>
                   </div>
                    <div class="form-group row">
                     <label class="col-md-2 form-control-label"  style="text-align:left; font-size:15px;">Google Plus Url</label>
                     <div class="col-sm-10">
                       <div class="input-icon">
                         <i class="icon-fa   fa fa-google-plus"></i>
                         <input type="text" name="facebook" id="" value="https://plus.gogle.com/u/0/117458883611785198963">
                       </div>
                     </div>
                   </div>
                    <div class="form-group row">
                     <label class="col-md-2 form-control-label " style="text-align:left; font-size:15px;"> Twitter Url</label>
                     <div class="col-md-10">
                       <div class="input-icon">
                         <i class="icon-fa fa fa-twitter"></i>
                         <input type="text" name="twitter" id="" value="https://facebook.com/teamcpbd13337">
                       </div>
                     </div>
                   <button class="btn btn-primary submit-style" type="submit" style="font-size:15px; margin-top:10px; margin-left:20px;">Save</button>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>  
    </div>
    <div class="container-fluid" style="margin-top:40px;">
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-header" style="text-align:left; ">
              <h6 style="font-size:15px;">Set Mail Driver</h6>
            </div>
            <div class="card-body">
              <form action="">
                <div class="form-group" style="text-align:left; ">
                  <label for="" style="font-size:15px;">Mail Driver</label>
                  <select name="mailer" id="" style="font-size:15px;" class="ls-select custom-select">
                    <option value="mailgun">Mailgun</option>
                    <option value="sendgrid">Sendgrid</option>
                    <option value="sparkpost">SparkPost</option>
                    <option value="smtp">SMTP</option>
                  </select>
                </div>
                <div class="form-group" style="text-align:left;font-size:15px; ">
                  <label for="">SendGrid Host</label>
                  <input type="text" name="mail_sendgrid_username" value="lk.hlbj" id=""  style="font-size:15px;" class="form-control">
                </div>
                 <div class="form-group" style="text-align:left; ">
                  <label for="">SendGrid Username</label>
                  <input type="text" name="mail_sendgrid_username" value="lk.hlbj" style="font-size:15px;"  id="" class="form-control">
                </div>
                 <div class="form-group" style="text-align:left; font-size:15px;">
                  <label for="">SendGrid Password</label>
                  <input type="text" name="mail_sendgrid_username" value="lk.hlbj" style="font-size:15px;"  id="" class="form-control">
                </div>
                 <div class="form-group" style="text-align:left;font-size:15px; ">
                  <label for="">From Name</label>
                  <input type="text" name="mail_sendgrid_username" value="lk.hlbj" style="font-size:15px;"  id="" class="form-control">
                </div>
                 <div class="form-group" style="text-align:left; font-size:15px;">
                  <label for="">From Email Address</label>
                  <input type="text" name="mail_sendgrid_username" value="lk.hlbj" id="" style="font-size:15px;"  class="form-control">
                   <button class="btn btn-primary btn-large" style="font-size:15px; margin-top:10px;" >Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6" style="margin-top:30px;">
     <div class="card" >
       <div class="card-header" style="text-align:left; ">
         <h6  style="font-size:15px; ">Sent Test Email</h6>
       </div>
       <div class="card-body disabled">
         <form action="" style="font-size:15px; text-align:left;"> 
           <label for="">To</label>
           <input type="text" name="" class="form-control">
         </form>
         <form action="" style="font-size:15px; text-align:left;"> 
           <label for="">Subject</label>
           <input type="text" name="" class="form-control">
         </form>
         <form action="" style="font-size:15px; text-align:left;"> 
           <label for="">Message</label>
           <input type="text" name="" class="form-control">
         </form>
         <button class="btn btn-primary" style="margin-top:10px; font-size:12px;">
           <i class=" icon-fa fa fa-save" style="">Send</i>
         </button>
       </div>
     </div>
    </div>
   </div>
 </template>


<style> 
  
  .breadcrumb-item{
    /* margin-top: -90px; */
    /* padding-left:32px; */
    color:grey;
    font-size: 15px;
    /* background-color: rgb(230, 215, 215); */
  }
   .dashboard-s{
     margin-left: 10px;
     text-align: left;
     margin-top: 42px;
   }
   .submit-style{
    font-size: 25px;
    padding-left: 200px;
   }
 .input-icon i {
    position: absolute;
    left: 0;
    margin: 11px 2px 4px 10px;
    z-index: 3;
    width: 16px;
  } 
  .input-icon:hover{
    border: 1px solid black;
  }
  @media screen and(max-width:786px) {
  
  }
</style>