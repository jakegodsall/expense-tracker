import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {
    // showing filtelred list of items (message shown if length===0)
    let expensesContent = <p>No expenses found.</p>;

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    } else {
        return (
            <ul className="expenses-list">
                {props.items.map(el => {
                    return ( 
                    <ExpenseItem
                        key={el.id}
                        title={el.title}
                        date={el.date}
                        amount={el.amount}
                    />);
                })}
            </ul>
        );
    }
};

export default ExpensesList;