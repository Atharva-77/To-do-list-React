import React,{useState} from 'react';
import './Form.css'
import { useParams, useLocation } from 'react-router';

import { useNavigate } from 'react-router-dom';


function Form(props) {
    
    const navigate = useNavigate();
    const {id}=useParams();
    console.log("FORM",id,JSON.parse(localStorage.getItem(id)));


    var intial_Firstname='', initial_Lastname='', initial_empid='',initial_age='',button_value='Add Employee';

    if(id!=undefined)
    {
        var data=JSON.parse( localStorage.getItem(id) );
        
        intial_Firstname=data.firstName;
        initial_Lastname=data.lastName;
        initial_empid=data.empid ;
        initial_age=data.age;

        button_value='Update Details'
    }

    const [firstName,setFirstName]=useState(intial_Firstname)
    const [lastName,setLastName]=useState(initial_Lastname)
    const [empid,setEmpid]=useState(initial_empid)
    const [age,setAge]=useState(initial_age)

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
                    <span id='span_element'> FirstName </span>  
                    <input className='inputTag' type=""  value={firstName} onChange={e=>setFirstName(e.target.value)} placeholder='Enter First Name'/>
                </div>

                <div className='input_div'>
                    <span id='span_element'> LastName </span>    
                    <input className='inputTag'type="" value={lastName} onChange={e=>setLastName(e.target.value)} placeholder='Enter Last Name'/>
                </div>
                        
                <div className='input_div'>
                    <span id='span_element' className='span-id-age'> Id </span>  
                    <input className='inputTag' type="Number"  value={empid} onChange={e=>setEmpid(e.target.value)} placeholder='Enter Employee Id'/>
                </div>  

                <div className='input_div'>
                    <span id='span_element' className='span-id-age'>Age</span>    
                    <input  className='inputTag' type="Number" value={age}  onChange={e=>setAge(e.target.value)} placeholder='Enter Your age'/>
                </div>     

                 <button className='button-add-update' onClick={submitForm}>{button_value}</button>  
            </div>
       
            
           
          
           
        
        </div>
    );
}

export default Form;