import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Budget = (props) => {
  const { budget, currency, expenses } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);

  let expendedTotal =  0;
    
    expenses.map ((i) => (
        expendedTotal += i.cost
    ))

  const handleChange = (event) => {        
    const value = event.target.value
    if (expendedTotal > value) {
      alert('You can not reduce the budget value lower than the spending')
    }
    dispatch({
                type: 'SET_BUDGET',
                payload: value
            })
  }

  return (
    <div className="alert alert-primary">
      <span>
        Budget: {currency}{' '}
        <input
          type="number"
          min="0"
          max="20000"
          id="budget"
          step="10"
          style={{ width: '65%' }}          
          onChange={handleChange}          
        ></input>
      </span>
    </div>
  )
}

export default Budget
