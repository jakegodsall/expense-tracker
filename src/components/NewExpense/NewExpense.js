import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

    const [showState, setShowState] = useState('default');

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const showForm = () => {
        setShowState('show-form');
    };

    const backToDefault = () => {
        setShowState('default');
    }

    if (showState === 'default') {
        return (
            <div className="new-expense">
            <button onClick={showForm}>Add New Expense</button>
        </div>
        );
    } else if (showState === 'show-form') {
        return (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} backToDefault={backToDefault} />
            </div>
        );
    }

   
};

export default NewExpense;