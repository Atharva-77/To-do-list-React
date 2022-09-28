import React from 'react';
import './InputComponent.css'

function InputComponent({className_Prop,disabled_Prop=false ,type_Prop, value_Prop, onChange_Prop, placeholder}) {
    return (
        <>
        {disabled_Prop==true
           ? 
             <input className={className_Prop} disabled type={type_Prop} value={value_Prop} onChange={onChange_Prop} placeholder={placeholder}/>
           :
             <input className={className_Prop} type={type_Prop} value={value_Prop} onChange={onChange_Prop} placeholder={placeholder}/>
         }
           
        </>
    );
}

export default InputComponent;