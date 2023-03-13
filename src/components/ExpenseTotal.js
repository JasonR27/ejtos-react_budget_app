import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    
    const { budget, expenses, currency } = useContext(AppContext);    
    
    let expendedTotal =  0;
    
    expenses.map ((i) => (
        expendedTotal += i.cost
    ))    

    return (
        <div className='alert alert-primary'>
            <span>Total Expense: {currency}&nbsp;{expendedTotal} </span>
        </div>
    );
};

export default ExpenseTotal;
