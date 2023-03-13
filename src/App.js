import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Currency from './components/Currency';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
import ChangeAllocation from './components/ChangeAllocation';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = (props) => {

    // const { budget } = useContext(AppContext)
    // const { expenses } = useContext(AppContext);

    return (
        <AppProvider style = {{backgroundColor: 'gray'}}>
            <div className='container' style = {{backgroundColor: 'lightgray'}}>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    
                    <div className='row mt-3'>
                        {/* Add Budget component here under */}        
                    <div className='col-sm'>
                        {/* <AppContext.Provider> */}
                        <Budget />
                        {/* </ AppContext.Provider> */}
                    </div>
                        {/* Currency component here under */}        
                    <div className='col-sm'>
                        <Currency />
                    </div>
                        {/* Add Remaining component here under */}        
                    <div className='col-sm'>
                        {/* <AppContext.Provider> */}
                        <Remaining />
                        {/* </ AppContext.Provider>                     */}
                    </div>                            
                        {/* Add ExpenseTotal component here under */}        
                    <div className='col-sm'>
                    <ExpenseTotal />
                    </div>                            
                    </div>                            

                        {/* Add AllocationForm component here under */}        

                    <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    {/* Add ExpenseList component here under */}
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change Allocation</h3>
                <div className='row mt-3'>
                    {/* Add ExpenseItem component here under */}        
                    <div className='col-sm'>
                        <ChangeAllocation/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
