import { useState } from 'react';
import { AddCategory, GifGrid } from './components'

const GifExpertApp = () => {
  
  let categoryList = [ 'One Punch' ];
  const [categories, setCategories] = useState( categoryList );

  const onAddCategory = (category) => {
    
    if ( categories.includes(category) ) return;

    setCategories([ category , ...categories ]);
  } 
  
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={ onAddCategory }></AddCategory>
      {
        categories.map( category => {
          return (<GifGrid key={ category } category={ category }/>)
        })
      }
    </>
  )
}

export default GifExpertApp
