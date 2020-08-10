import React, { useState } from 'react'


export const AddCategory = ({ setCategories}) => {
    
    const [inputValue, setInputValue] = useState(''); // undefined


    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }
        // console.log('submit hecho')
        
    }
    
    return (
        <form onSubmit= {handleSubmit}>
            <input 
                type="text"
                value= { inputValue }
                onChange= { handleInputChange }

            />
        </form>
    )
}
