import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusSquare, FaMinusSquare, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
            id: props.id
        };

        dispatch({
            type: 'DELETE_EXPENSE',
            payload: item,
        });
    };

    const handleIncrease = () => {
        const item = {
            name: props.name,
            cost: 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: item,
            cost: 10
        });
    };

    const handleDecrease = () => {
        const item = {
            name: props.name,
            cost: 10
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: item,
            cost: 10,
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td style={{marginLeft: "25px"}}>{currency} {props.cost}</td>        
        <td style={{margin: "5px"}}><FaPlusCircle size='2.2em' style={{marginLeft: "25px"}} color="green" name={props.name} onClick={handleIncrease}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' style={{marginLeft: "40px"}} color="blue" onClick={handleDecrease}></FaMinusCircle></td>        
        <td><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;
