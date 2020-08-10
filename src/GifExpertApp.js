import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import PropTypes from 'prop-types';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = props => {

    // const categories= ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories( cats => [...cats, 'HunterXHunter']);

    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key = {category}
                            category= { category } />
                    ))
                }
            </ol>
        </>
    )
}


AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
