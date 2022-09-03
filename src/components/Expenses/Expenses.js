import React, {useState} from 'react'; 

import './Expenses.css';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from '../UI/Card';

const Expenses = ({ expenses }) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    // filter full list of expenses by selected year from ExpensesFilter
    let filteredExpenses = [];
    if (filteredYear === 'all') {
        filteredExpenses = expenses;
    } else {
        filteredExpenses = expenses.filter(el => {
            return el.date.getFullYear().toString() === filteredYear;
        })
    }
 
    return (
        <Card className="expenses">
        <ExpensesFilter 
            selected={filteredYear} 
            onFilterSelection={filterChangeHandler}
        />
       <ExpensesList 
        items={filteredExpenses} 
        />
    </Card>
    );
};

export default Expenses;