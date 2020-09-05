import React from 'react'
import ResetPassword from "./user/ResetPassword";
import {Route,Switch} from 'react-router-dom'
import Home from './core/Home'
import Footer from './core/Footer'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Menu from "./core/Menu"
import Profile from "./user/Profile"
import Users from "./user/Users"
import EditProfile from"./user/EditProfile"
import PrivateRoute from './auth/PrivateRouth'
import FindPeople from"./user/FindPeople"
import EditPost from"./post/EditPost"
import NewPost from"./post/NewPost"
import SinglePost from"./post/SinglePost"

import ForgotPassword from "./user/ForgotPassword";

const MainRouter=()=>(

  <div >
      <Menu/>
      <div style={{minHeight:"65vh"}}>
      <Switch>

         
          
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route
  exact
  path="/reset-password/:resetPasswordToken"
  component={ResetPassword}
/>
          <PrivateRoute exact path="/post/create" component={NewPost}/>
          <Route exact path="/post/:postId" component={SinglePost}></Route>
           <PrivateRoute exact path="/post/edit/:postId" component={EditPost}/>
        
          <Route exact path="/users" component={Users}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/signin" component={Signin}/>
          <PrivateRoute exact path="/user/edit/:userId" component={EditProfile}/>
          <PrivateRoute exact path="/user/:userId" component={Profile}/>
          <PrivateRoute exact path="/findpeople" component={FindPeople}/>
        
         
      </Switch>
      </div>
      <Footer/>
  </div>

);
export default MainRouter;