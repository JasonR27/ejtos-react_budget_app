import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {

    const { budget, expenses, currency } = useContext(AppContext);        

    
    let expendedTotal =  0;
    
    expenses.map ((i) => (
        expendedTotal += i.cost
    ))

    let remainig = budget - expendedTotal;
    

    return (
        <div className='alert alert-primary'>
            <span>Remaining Budget: {currency}&nbsp;{remainig} </span>
        </div>
    );
};

export default Remaining;
