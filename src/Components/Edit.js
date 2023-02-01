import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import DataContext from './DataContext';
import { Link } from 'react-router-dom';



function Edit() {
   const context = useContext(DataContext);
   const location = useLocation(); // returns the location object 
   console.log(location.state.data) 
   const index = (location.state.data);
  //  const [state,setDetails]=useState({
  //   name:"",
  //   age:"",
  //   course:"",
  //   batch:""
  //  });
 
   

   return (
    <>
    <center>
    <input name='name' placeholder= {context.entries[index].name}></input><br/>
        <input name='age'   placeholder= {context.entries[index].age}></input>
        <br/>
        <input  name='course'   placeholder= {context.entries[index].course}></input><br/>
        <input  name='batch'   placeholder= {context.entries[index].batch}></input><br/>
        <button style={{backgroundColor:'white',width:'150px',height:'40px',borderRadius:'40px',marginRight:'20px',marginTop:'80px',fontSize:'1em'}}><Link to='/student' style={{textDecoration:'none',color:'black',fontSize:'1.3em'}}>Cancel</Link></button>
        <button style={{backgroundColor:'white',width:'150px',height:'40px',borderRadius:'40px',marginLeft:'20px',marginTop:'80px',fontSize:'1.3em'}} className='submit' >Update</button>
    </center>
        
    </>
  )
}

export default Edit;