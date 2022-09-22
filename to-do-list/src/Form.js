import React,{useState} from 'react';
import './Form.css'
import { useParams, useLocation } from 'react-router';

import { useNavigate } from 'react-router-dom';


function Form({parentHandler,intial_Firstname='', initial_Lastname='', initial_empid='',initial_age='',button_value='Add Employee'}) {
    // console.log("Props value",parentHandler("yo bro"));
    const navigate = useNavigate();
    const {id}=useParams();

    const { query } = useLocation();
   
    // console.log("FORM",id,JSON.parse(localStorage.getItem(id)));


    // var intial_Firstname='', initial_Lastname='', initial_empid='',initial_age='',button_value='Add Employee';

    if(id!=undefined)
    {
        console.log("LOCN",id.split("+"));
        // var data=JSON.parse( localStorage.getItem(id) );
        let data=id.split("+");
        // console.log();
        intial_Firstname=data[1];
        initial_Lastname=data[2];
        initial_empid=Number(data[0]);
        initial_age=Number(data[3]);

        button_value='Update Details'
    }

    const [firstName,setFirstName]=useState(intial_Firstname)
    const [lastName,setLastName]=useState(initial_Lastname)
    const [empid,setEmpid]=useState(initial_empid)
    const [age,setAge]=useState(initial_age)

    const submitForm=()=>
    {
        // console.log(firstName,lastName,empid,age, localStorage);

        // localStorage.setItem(empid,JSON.stringify({
        //                                 "firstName":firstName, 
        //                                 "lastName":lastName, 
        //                                 "empid":empid, 
        //                                 "age": age}))

        console.log("Props value",parentHandler(firstName,lastName,empid,age));

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