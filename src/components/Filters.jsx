import React from 'react';
import styles from '../styles/Filter.module.css';

const Filters = (props) => {
  return (
    <div className={styles.filtering}>
        <select onChange={(e)=>props.handleSort(e.target.value)}>
            <option >Sort By Salary</option>
            <option value="htl">Low To High</option>
            <option value="lth">High To Low</option>
        </select>

        <select onChange={(e)=>props.handlefilter(e.target.value)}>
                <option >Filter By Department</option>
                <option value="frontEnd">Front End Dept.</option>
                <option value="backEnd">Back End Dept.</option>
                <option value="testing">Testing Dept.</option>
                <option value="design">Design Dept.</option>

        </select>
    </div>
  )
}

export default Filters