import React, { useContext, useState, dispatch } from 'react'
import { AppContext } from '../context/AppContext'
import Select from 'react-select'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Currency.css'
import styled from 'styled-components'


const StyledDropdownItem = styled(Dropdown.Item)`
  background-color: lightgreen;
  width: 300px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const StyledDropdownButton = styled(DropdownButton)`  
  color: black;
  width: 300px;
  
  .btn-success {
    background-color: lightgreen;
    border-color: lightgreen;
  }  
  &:hover {    
    color: black;
  }  
`;

const Currency = () => {
  const { dispatch, hovered, currency } = useContext(AppContext) 

  const changeCurrency = (eventKey) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: eventKey,
    })
  }

const currencies = {'$': 'Dollar', '£': 'Pound', '€': 'Euro', '₹': 'Rupee'}  


const currencyName = (val) => {
  let currencyNaming = '';
  for (const key in currencies) {
  if (val === key) {
    currencyNaming = currencies[key]
  }
}
  return currencyNaming;
}


  return (
    <div className='rounded fl ex flex-column' style={{backgroundColor: 'lightgreen', height: '60px'}}>     
    <StyledDropdownButton className='dropdown rounded' variant='success' menuAlign='end' size='lg' onSelect={changeCurrency} title={'Currency: '+currency+' '+currencyName(currency)}>
        <StyledDropdownItem style={{marginTop:"-10px"}} eventKey='$'>$ Dollar</StyledDropdownItem>
        <StyledDropdownItem eventKey="£">£ Pound</StyledDropdownItem>        
        <StyledDropdownItem eventKey='€'>€ Euro</StyledDropdownItem>
        <StyledDropdownItem eventKey="₹" style={{marginBottom:"-10px"}}>₹ Rupee</StyledDropdownItem>                      
      </StyledDropdownButton>     
  </div>
  )
}

export default Currency

// const Option = styled.option`
//   background-color: lightgreen;
//   color: black;
//   &:hover {
//     background-color: white !important;
//     color: black
//   }
// `;

// const Select = styled.select`
// background-color: lightgreen;
// color: black;
// &:hover {
//   background-color: white !important;
//   color: black
// }
// `;
// // var css = 'select option:hover{ background-color: #00ff00 }';
// // var style = document.createElement('style');

// // if (style.styleSheet) {
// //     style.styleSheet.cssText = css;
// // } else {
// //     style.appendChild(document.createTextNode(css));
// // }

// const Currency = () => {
//   const { dispatch, hovered } = useContext(AppContext);

//     const changeCurrency = (val)=>{
//             dispatch({
//                 type: 'CHG_CURRENCY',
//                 payload: val,
//             })
//     }

//   return (
//         <div className='alert alert-secondary hover-shadow bg-color white shadow-1-strong rounded'
//         style={{ background: hovered ? 'black' : 'green' }}
//         > Currency {hovered} {
//       <Select className='bg-color hover-overlay shadow-1-strong rounded' name="Currency" id="Currency"
//       style = {{backgroundColor: 'lightgreen', fontWeight: 999}}
//       onChange={event=>changeCurrency(event.target.value)}>
//         <Option id="currencyType" value="£">Uk(£)</Option>
//         <Option id="currencyType" value="₹">India(₹)</Option>
//         <Option id="currencyType" value="€"
//         onMouseEnter={() => dispatch({
//           type: 'SET_HOVER',
//           payload: true
//       })}
//         onMouseLeave={() => dispatch({
//           type: 'SET_HOVER',
//           payload: false
//       })}
//         style={{ backgroundColor: hovered ? 'black' : 'white' }}
//         >Europe(€)</Option>
//         <Option id="currencyType" value="CAD" style = {{backgroundColor: 'white', ':hover': {backgroundColor: 'white'} }}>Canada(CAD)</Option>
//       </Select>
//       }
//     </div>
//     );
// };

  // const Option = currencies.map((currency) => <span>{currency}</span>)

  // function MyDropdown() {
  //   return (
  // <StyledDropdownButton variant='success' menuAlign='end'  className='dropdown' onSelect={changeCurrency} size='lg' title="Currency">
  //       <StyledDropdownItem as='li' style={{marginTop:"-10px"}} value='£'>Uk(£)</StyledDropdownItem>
  //       <StyledDropdownItem as='li' eventKey="₹" value='₹'  >India(₹)</StyledDropdownItem>        
  //       <StyledDropdownItem as='li' value='€'>Europe(€)</StyledDropdownItem>
  //       <StyledDropdownItem as='li' value='CAD' >CAD</StyledDropdownItem>
  //       <StyledDropdownItem as='li' value='USD' style={{marginBottom:"-10px"}}>USD</StyledDropdownItem>
  //     </StyledDropdownButton>
  //   );
  // }
