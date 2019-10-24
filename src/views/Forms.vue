<template>
  <div>
   <div class="container-fluid header" >
      <!-- <li class="bread-crumb"> -->
        <h1 class="dashboard-p" >Form Pattern</h1>
        <ol class="breadcrumb" style="background-color:rgb(255, 251, 251); ">
          <li class="breadcrumb-item"><a href="" style="color:grey; text-decoration:none;">Home</a></li>
          <li class="breadcrumb-item"><a href="" style="color:grey; text-decoration:none;" >Form Pattern</a></li>
          <li class="breadcrumb-item" style="color:grey; text-decoration:none;"> Structure</li>     
        </ol>
        <!-- </div> -->         
    </div>
    <div class="container-fluid" style="margin-top:20px;">     
      <div style="padding-left:40px;">
        <form-wizard @on-complete="onComplete">
            <tab-content title="Personal details"
                          icon="ti-user">
              <h1 style="font-size:30px;">Sign Up with an New Account.   <small > <a href="#home" style="text-decoration:none;">Vuelidate - Form</a> </small></h1>
                <div class="sub-section  ">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="card-header bg-white mt-4">
                        
                      </div> 
                        
                        <div class="card-body">
                          <form @submit.prevent="handleSubmit" style="margin-top:0;">
                            <div class="card bg-grey">
                              <div class="form-group">
                                <label for="firstName" style="font-size:20px;">First Name</label>
                                <input
                                  type="text"
                                  v-model="user.firstName"
                                  id="firstName"
                                  name="firstName"
                                  class="form-control"
                                  :class="{ 'is-invalid': submitted && $v.user.firstName.$error }"
                                />
                                <div
                                  v-if="submitted && !$v.user.firstName.required"
                                  class="invalid-feedback"
                                >First Name is required</div>
                              </div>
                              <div class="form-group">
                                <label for="lastName" style="font-size:20px;">Last Name</label>
                                <input
                                  type="text"
                                  v-model="user.lastName"
                                  id="lastName"
                                  name="lastName"
                                  class="form-control"
                                  :class="{ 'is-invalid': submitted && $v.user.lastName.$error }"
                                />
                                <div
                                  v-if="submitted && !$v.user.lastName.required"
                                  class="invalid-feedback"
                                >Last Name is required</div>
                              </div>
                              <div class="form-group">
                                <label for="email" style="font-size:20px;">Email</label>
                                <input
                                  type="email"
                                  v-model="user.email"
                                  id="email"
                                  name="email"
                                  class="form-control"
                                  :class="{ 'is-invalid': submitted && $v.user.email.$error }"
                                />
                                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                  <span v-if="!$v.user.email.required">Email is required</span>
                                  <span v-if="!$v.user.email.email">Email is invalid</span>
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="password" style="font-size:20px;">Password</label>
                                <input
                                  type="password"
                                  v-model="user.password"
                                  id="password"
                                  name="password"
                                  class="form-control"
                                  :class="{ 'is-invalid': submitted && $v.user.password.$error }"
                                />
                                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                  <span v-if="!$v.user.password.required">Password is required</span>
                                  <span
                                    v-if="!$v.user.password.minLength"
                                  >Password must be at least 6 characters</span>
                                </div>
                              </div>
                              <div class="form-group">
                                <label for="confirmPassword" style="font-size:20px;">Confirm Password</label>
                                <input
                                  type="password"
                                  v-model="user.confirmPassword"
                                  id="confirmPassword"
                                  name="confirmPassword"
                                  class="form-control"
                                  :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }"
                                />
                                <div
                                  v-if="submitted && $v.user.confirmPassword.$error"
                                  class="invalid-feedback"
                                >
                                  <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                                  <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
                                </div>
                              </div>
                              <div class="form-group">
                                <button class="btn btn-success" style="font-size:20px;" @click="createUser">SignUp</button>
                              </div>
                                <span style="font-size:20px;">or go back to <router-link to="/signin">login</router-link>.</span>
                            </div>
                          </form>
                        </div>
                      <!-- </div> -->
                    </div>
                  </div>
                </div>
              </div>
            
            </tab-content>
            <tab-content title="Additional Info"
                          icon="ti-settings">
              <h1>My second tab content</h1> 
              <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group" style="font-size:15px;">
                      <label for="">Address Line 1</label>
                      <input type="text" name="" class="form-control" id="">
                    </div>
                      <div class="form-group" style="font-size:15px;">
                      <label for="">Address Line 2</label>
                      <input type="text" name="" class="form-control" id="">
                    </div>
                      <div class="form-group" style="font-size:15px;">
                      <label for="">City</label>
                      <input type="text" name="" class="form-control" id="">
                    </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="form-group" style="font-size:15px;">
                      <label for="">State</label>
                      <input type="text" name="" class="form-control" id="">
                    </div>
                      <div class="form-group" style="font-size:15px;">  
                      <label for="">Pincode</label>
                      <input type="text" name="" class="form-control" id="">
                    </div>
                  </div>
                </div>      
            </tab-content>
            <tab-content title="Additional Info" icon="ti-settings">
              <h2>Third tab for the User details. <small>Location</small></h2>
                <div style="text-align:left;">
                  <div class="form-group" style="font-size:15px;">
                      <label for="">Facebook</label>
                      <input type="text" name="" class="form-control" id="">
                    </div>
                    <div class="form-group" style="font-size:15px;">
                      <label for="">Twitter</label>
                      <input type="text" name="" class="form-control" id="">
                    </div>
                    <div class="form-group" style="font-size:15px;">
                      <label for="">Google+</label>
                      <input type="text" name="" class="form-control" id="">
                    </div>
                </div>
                
            </tab-content>
            <tab-content title="Last step"
                          icon="ti-check">
              <h2>HOBIES ACTIVITY <small>Choice</small></h2>
              <div style="left;">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group" style="font-size:15px;">
                      <label for="">Games</label>
                      <input type="text" name="" class="form-control" id="">
                    </div>
                    <div class="form-group" style="font-size:15px;">
                      <label for="">Food</label>
                      <input type="text" name="" class="form-control" id="">
                    </div>
                    <div class="form-group" style="font-size:15px;">
                      <label for="">Movies</label>
                      <input type="text" name="" class="form-control" id="">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group" style="font-size:15px;">
                      <label for="">Music</label>
                      <input type="text" name="" class="form-control" id="">
                    </div>
                    <div class="form-group" style="font-size:15px;">
                      <label for="">Places</label>
                      <input type="text" name="" class="form-control" id="">
                    </div>
                    <div class="form-group" style="font-size:15px;">
                      <label for="">Destination</label>
                      <input type="text" name="" class="form-control" id="">
                    </div>
                    <div class="form-group" >
                      <select v-model="selected" style="font-size:15px;">
                        <option disabled value="">Please select one</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </select>
                      <span>Selected: {{ selected }}</span>
                    </div>
                    <button class="btn btn-primary" style="font-size:18x;">Save</button>
                  </div>
                </div>
              </div>
            </tab-content>
        </form-wizard>
     </div>  
     <div class="container-fluid" style="padding-left:45px;">
        <form-wizard @on-complete="onComplete"
                       title="This is a new title"
                       subtitle="And a new subtitle"
                       shape="tab"
                       back-button-text="Go back!"
                       next-button-text="Go next!"
                       finish-button-text="We're there"
                       color="#9b59b6">
        <tab-content title="Personal details"
                      icon="ti-user">
          My first tab content
        </tab-content>
        <tab-content title="Additional Info"
                      icon="ti-settings">
          My second tab content
        </tab-content>
        <tab-content title="Last step"
                      icon="ti-check">
            Yuhuuu! This seems pretty damn simple
        </tab-content>
      </form-wizard> 
    </div>
   </div>
  </div>     
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
// import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import firebase from 'firebase';
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
  export default {
      components: {
        FormWizard,
        TabContent
        },
         data() {
          selected: ''
          return {
            user: {
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: ""
            },
            submitted: false
          };
        },  
        validations: {
         user: {
          firstName: { required },
          lastName: { required },
          email: { required, email },
          password: { required, minLength: minLength(6) },
          confirmPassword: { required, sameAsPassword: sameAs("password") }
        }
      },
     methods: {
       createUser () {
       this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } 
      console.log(this.email)
      console.log(this.password)
      firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then((res)=> {
        console.log(res)
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode,errorMessage);
        
        // ...
      });
    },
    handleSubmit(e) {
      this.submitted = true;
      //  {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
           function(user) {
               alert('well done ! your new account has been created')
           },
           function(err) {
               alert('Oops .'+ err.message)
           },
          onComplete = function(){
            alert('Yay. Done!');
          },
           onComplete = function(){
            alert('Yay. Done!');
        }
        );
      // }
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }     
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
    }
  }  
};
</script>
<style>
  .dashboard-a {
    margin-top: 20px;
    /* margin-right: 1121px; */
    margin-left: 40px;
    text-align: left;
  }
  .a-style {
    margin-left: 40px;
    text-align: left;
    }  
   @media screen and (max-width:786px) {
    .dashboard-a {
      margin-left: 160px;
    }
    .a-style {
      margin-left: 160px;
    }  
  }
</style>