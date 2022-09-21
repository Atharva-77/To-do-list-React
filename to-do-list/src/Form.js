import React,{useState} from 'react';
import './Form.css'

import { useNavigate } from 'react-router-dom';


function Form(props) {
    
    const navigate = useNavigate();


    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [empid,setEmpid]=useState('')
    const [age,setAge]=useState('')

    const submitForm=()=>
    {
        console.log(firstName,lastName,empid,age, localStorage);

        localStorage.setItem(empid,JSON.stringify({
                                        "firstName":firstName, 
                                        "lastName":lastName, 
                                        "empid":empid, 
                                        "age": age}))
        navigate('/')
    }
    return (
        <div className='Form_div'>
         
            <div className='Form_title'>
                    Employee Form
            </div>
            
            <div className='input_Main_div'>
                <div className='input_div'>
                    <span> FirstName </span>  
                    <input className='inputTag' type=""  value={firstName} onChange={e=>setFirstName(e.target.value)} placeholder='Enter First Name'/>
                </div>

                <div className='input_div'>
                    <span> LastName </span>    
                    <input className='inputTag'type="" value={lastName} onChange={e=>setLastName(e.target.value)} placeholder='Enter Last Name'/>
                </div>
                        
                <div className='input_div'>
                    <span className='span-id-age'> Id </span>  
                    <input className='inputTag' type="Number"  value={empid} onChange={e=>setEmpid(e.target.value)} placeholder='Enter Employee Id'/>
                </div>  

                <div className='input_div'>
                    <span className='span-id-age'>Age</span>    
                    <input  className='inputTag' type="Number" value={age}  onChange={e=>setAge(e.target.value)} placeholder='Enter Your age'/>
                </div>     

                 <button className='button-add-update' onClick={submitForm}>Add Employee</button>  
            </div>
       
            
           
          
           
        
        </div>
    );
}

export default Form;