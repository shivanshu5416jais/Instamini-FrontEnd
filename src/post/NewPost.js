import React,{Component} from 'react'
import {isAuthenticated} from '../auth'
import {create} from "./apiPost"
import {Redirect} from "react-router-dom"
import defaultProfile from '../images/avatar.jpg'

class NewPost extends Component{


    constructor(){
        super()
        this.state={
            loading:false,
            title:'',
            body:'',
            photo:'',
            error:'',
            error:'',
            user:{},
            fileSize:0,
            redirectToProfile:false
        }
    }


    
    componentDidMount(){
        this.postData=new FormData()
        // this.userData.append('file', file);
     
        this.setState({user:isAuthenticated().user})
        
    }

    isValid=()=>{
        const {title,body,fileSize} =this.state
        if(fileSize>100000){
            this.setState({error:"File size should be less than 100kb!!!",loading:false});
            return false
        }
        if(title.length===0 || body.length===0){
            this.setState({error:"All fields are required!!!",loading:false});
            return false
        }
        
        
        
      
        return true;
    }

    handleChange=(name)=> (event) =>{
        this.setState({error:""});
        const value=name==='photo'?event.target.files[0]:event.target.value
        this.postData.set(name,value)
        const fileSize=name==="photo"?event.target.files[0].size:0;
        this.setState({[name]:value,fileSize});
    };

    clickSubmit= event => {
        event.preventDefault();
        this.setState({loading:true})
        if(this.isValid()){
           
        
       // console.log(user);
        
       const userId=isAuthenticated().user._id
       const token=isAuthenticated().token
        create(userId,token,this.postData)
        .then(data=>{
            if(data.error) this.setState({error:data.error})
            else {
                // updateUser(data,()=>{
                   
                //     this.setState({
 
                //         redirectToProfile:true
                //     });
                    
                // });
                this.setState({loading:false,title:'',body:'',photo:'',redirectToProfile:true})
                console.log("New post:", data);
                
              

            }
               
        });
        }
        
    };


  newPostForm=(title,body)=>(
        <form>
                    <div className="form-group">
                        <label className="text-muted">Image</label>
                        <input 
                            onChange={this.handleChange("photo")} 
                            type="file" 
                            className="form-control"
                            accept="image/*"
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Post Title</label>
                        <input 
                            onChange={this.handleChange("title")} 
                            type="text" 
                            className="form-control"
                            value={title}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label className="text-muted">Body</label>
                        <textarea 
                            onChange={this.handleChange("body")} 
                            type="text" 
                            className="form-control"
                            value={body}
                        />
                    </div>
                   
                    <button onClick={this.clickSubmit} className="btn btn-raised btn-primary">Create Post</button>
                </form>
    )

    render(){
        const{
            title,
            body,
            photo,
            user,
            loading,
            error,
            redirectToProfile
        }=this.state;
        if(redirectToProfile){
           return <Redirect to={`/user/${user._id}`}/>
        }
   
  

        return(
            <div className="container">
                <h2 className="mt-5 mb-5">Create a new Post</h2>
                <div 
                    className="alert alert-danger" 
                    style={{display: error ? "" : "none"}}>
                        {error}
                    </div>
                    {loading? <div className="jumbotron text-center">
                    <h2>Loading...</h2>
                </div>: ""}

            
                {this.newPostForm(title,body)}
            </div>
        )
    }
}
export default NewPost;