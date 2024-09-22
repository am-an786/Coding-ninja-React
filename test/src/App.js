import React,{ useState } from 'react';
import './App.css';


const Dropdown = ({items})=>{
  const [isOpen, setIsOpen]= useState('Select');


  
  const handleItemClick = (event)=>{
    const selectedValue = event.target.value;
    
        console.log("selected item", selectedValue);
        setIsOpen(selectedValue);
  }

return(


  <div className='dropdown'>

                <h2>Should you use a dropdown?</h2>

       
                 <select className='dropdown-menu' value={isOpen} onChange={handleItemClick}> 
                    <option value='Select' hidden>Select</option>
                    {items.map((item, index)=>(
                      <option className='dropdown-item' key={index} value={item}>
                            {item}
                      </option>
                    ))}
                 </select>
          
          
      </div>

)
};



function App() {

  const dropDownitems =['Yes', 'probably not'];
  return (
      <>
      
      <Dropdown items={dropDownitems}/>
      </>
  );
}

export default App;
