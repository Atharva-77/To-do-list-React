import React,{useContext, useEffect, useState} from 'react';
import './Form.css'
import { useParams, useLocation } from 'react-router';

import { useNavigate } from 'react-router-dom';
// import {ColorContext} from './App'
import { ColorContext } from './Context'
import InputComponent from './InputComponent';
//only 1 func
//e.t.value

//new compo for input fie;d
function Form() {

    // {parentHandler,intial_Firstname='', initial_Lastname='', initial_empid='',initial_age='',button_value='Add Employee'}

    // const {f_name,setf_name}=useContext(ColorContext);
    // const {l_name,setl_name}=useContext(ColorContext);
    // const {emp_Id,setemp_Id}=useContext(ColorContext);
    // const {emp_Age,setemp_Age}=useContext(ColorContext);
    const {empDetails,setempDetails}=useContext(ColorContext);
    const {allId,setallId}=useContext(ColorContext);

    // console.log("COLORS FORM",color);
    // console.log("Props value",parentHandler("yo bro"));
    const navigate = useNavigate();
    const {id}=useParams();

    const { query } = useLocation();
   
    console.log("FORM",id);
    // let intial_Firstname='', initial_Lastname='', initial_empid='',initial_age='',button_value='Add Employee';

    const [finalEmp,setfinalEmp]=useState({})

    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [empid,setEmpid]=useState('')
    const [age,setAge]=useState('')
    const [button_Value, setButton_value]=useState('Add Employee')
   
//In useEffect...id dependency
    useEffect(()=>
    {
         if(id!=undefined)
        {
            const idOfEmp= empDetails.find((i,j)=>
            {
                if(i.empid==id)
                {console.log("Val",i,j);
                return i;}
                // console.log("Val",i.firstName);
            })
            console.log("ID IS",idOfEmp);
            //  button_value='Update Details'
             setButton_value('Update Details')
            setfinalEmp(idOfEmp)

            setFirstName(idOfEmp.firstName);
            setLastName(idOfEmp.lastName);
            setEmpid(idOfEmp.empid);
            setAge(idOfEmp.age);

            // intial_Firstname=idOfEmp.firstName;
            // initial_Lastname=idOfEmp.lastName;
            // initial_empid=idOfEmp.empid;
            // initial_age=idOfEmp.age;

           

            console.log("VALues",finalEmp,finalEmp.firstName);
        }
    },[id])

    // const [firstName,setFirstName]=useState(intial_Firstname)
    // const [lastName,setLastName]=useState(initial_Lastname)
    // const [empid,setEmpid]=useState(initial_empid)
    // const [age,setAge]=useState(initial_age)
    
    // if(id!=undefined)
    // {
    //     // console.log("LOCN",id.split("+"));
    //     // var data=JSON.parse( localStorage.getItem(id) );
    //     // let data=id.split("+");
    //     // console.log();
    //     // intial_Firstname=data[1];
    //     // initial_Lastname=data[2];
    //     // initial_empid=Number(data[0]);
    //     // initial_age=Number(data[3]);

    //     //use find method
    //     const idOfEmp= empDetails.find((i,j)=>
    //     {
    //         if(i.empid==id)
    //         {console.log("Val",i,j);
    //         return i;}
    //         // console.log("Val",i.firstName);
    //     })
    //     console.log("ID IS",idOfEmp);
    //     // setfinalEmp(idOfEmp)

    //     intial_Firstname=idOfEmp.firstName;
    //     initial_Lastname=idOfEmp.lastName;
    //     initial_empid=idOfEmp.empid;
    //     initial_age=idOfEmp.age;

    //     button_value='Update Details'

    //     console.log("VALues",finalEmp.firstName);
    // }
    // else
    // {
    //     console.log("VALUES",finalEmp);
    // }

  
    
    const [idpresent,setidpresent]=useState(false)
    const [message,setmessage]=useState('Id Already exists')
    // let idpresent_Toggle=false;
    // const [leftOverEmp,setleftOverEmp]=useState()

    
    const submitForm=()=>
    {
        // console.log(firstName,lastName,empid,age, localStorage);
        //
        const empInfo=
        {
           firstName, 
           lastName, 
            empid, 
            age
        }
        // localStorage.setItem(empid,JSON.stringify({
        //                                 "firstName":firstName, 
        //                                 "lastName":lastName, 
        //                                 "empid":empid, 
        //                                 "age": age}))

        // console.log("Props value",parentHandler(firstName,lastName,empid,age));
        // setf_name(firstName);
        // setl_name(lastName);
        // setemp_Id(empid);
        // setemp_Age(age);

        // setf_name('');
        // setl_name('');
        // setemp_Id('');
        // setemp_Age('age');

        // setempDetails([...empDetails,empInfo])

        // console.log(...empDetails);
        // console.log("Here",button_value,button_value=='Update Details');

        // setallId(prev =>new Set([...prev,empid]))

        if(idpresent)
        {
            setmessage("Id already present. Please enter Different Id")
        }
        else
        {
            setallId(new Set([...allId,empid]))

            if(button_Value=='Update Details')
            {
                // setempDetails([...empDetails,empInfo)
                let leftOverEmp=[]
                const UpdatedEmp=empDetails.filter((i)=>
                {
                    if(i.empid!=empid)
                    {
                        leftOverEmp.push(i)
                        // setempDetails([...empDetails,i])
                        console.log(i);
                        return i;
                    }
                })
                leftOverEmp.push(empInfo)
                setempDetails(leftOverEmp)
    
                console.log("UPDATED EMP",leftOverEmp,empInfo);
    
                navigate('/view-employees')
            }
                
            else
            {
                navigate('/view-employees')
                setempDetails([...empDetails,empInfo])
            }
        }
       
           
    }

    const employeeIDFunc=(e)=>
    {
       console.log("EE",e);

         const seeID_Used_Before=[...allId].filter((i)=>
        {
            if(i==e)
             { 
                // setidpresent(true);
                // idpresent_Toggle=true;
                 console.log("BEFORE-ID",i);
                 setmessage("Id Already exists")
                 return "haha";
              }
            //   else
            //   {
            //     setidpresent(false);
            //   }
        })
        
        if(seeID_Used_Before.length>0)
            setidpresent(true);
        else
            setidpresent(false)
        

        console.log("IDID",idpresent,seeID_Used_Before.length,typeof(seeID_Used_Before));

        if(button_Value!='Update Details')
            setEmpid(e);
            // console.log("Hhehe");
            // setEmpid(initial_empid)

        // else
        // setEmpid(e);

        
    }

    const firstNameFunc=(e)=>
    {
        setFirstName(e.target.value)
    }
     const lastNameFunc=(e)=>
    {
        setLastName(e.target.value)
    }
     const ageFunc=(e)=>
    {
        setAge(e.target.value)
    }

    return (
        <div className='Form_div'>
         
            <div className='Form_title'>
                    Employee Form
            </div>
            
            {idpresent && <span>{message}</span>}

            <div className='input_Main_div'>
                <div className='input_div'>
                    <span id='span_element'> FirstName </span>  
                    <InputComponent className_Prop='inputTag' value_Prop={firstName} onChange_Prop={e=>firstNameFunc(e)} placeholder='Enter First Name'/>

                    {/* <input className='inputTag' type=""  value={firstName} onChange={e=>setFirstName(e.target.value)} placeholder='Enter First Name'/> */}
                </div>

                <div className='input_div'>
                    <span id='span_element'> LastName </span>    
                    <InputComponent className_Prop='inputTag' value_Prop={lastName} onChange_Prop={e=>lastNameFunc(e)} placeholder='Enter Last Name'/>
                    {/* <input className='inputTag'type="" value={lastName} onChange={e=>lastNameFunc(e)} placeholder='Enter Last Name'/> */}
                </div>
                        
                <div className='input_div'>
                    <span id='span_element' className='span-id-age'> Id </span>  
                  
                    {button_Value=='Update Details'
                        ? 
                            <InputComponent className_Prop='inputTag'  disabled_Prop={true} value_Prop={empid} onChange_Prop={e=>employeeIDFunc(e.target.value)} placeholder='Enter Employee Id'/>
                            //  <input className='inputTag' type="Number" disabled value={empid} onChange={e=>employeeIDFunc(e.target.value)} placeholder='Enter Employee Id'/>
                        :
                         <InputComponent className_Prop='inputTag' type_Prop="Number" value_Prop={empid} onChange_Prop={e=>employeeIDFunc(e.target.value)} placeholder='Enter Employee Id'/>
                            //  <input className='inputTag' type="Number" value={empid} onChange={e=>employeeIDFunc(e.target.value)} placeholder='Enter Employee Id'/>
                         }

                    {/* <input className='inputTag' type="Number" disabled value={empid} onChange={e=>employeeIDFunc(e.target.value)} placeholder='Enter Employee Id'/> */}
                </div>  

                <div className='input_div'>
                    <span id='span_element' className='span-id-age'>Age</span>    
                     <InputComponent className_Prop='inputTag' type_Prop="Number" value_Prop={age} onChange_Prop={e=>ageFunc(e)} placeholder='Enter Your age'/>
                    {/* <input  className='inputTag' type="Number" value={age}  onChange={e=>ageFunc(e)} placeholder='Enter Your age'/> */}
                </div>     

                 <button className='button-add-update' onClick={submitForm}>{button_Value}</button>  
            </div>
       
            
           
          
           
        
        </div>
    );
}

export default Form;