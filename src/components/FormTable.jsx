import React from 'react';
import styles from "../styles/FormTable.module.css";
import Filters from './Filters';

const FormTable = (props) => {
  let items = props.data
  // console.log(items[0].id)
  return (
    <div>
        <h1>All Employees Details</h1>
        <Filters handleSort={props.handleSort} handlefilter={props.handlefilter}/>
        <table className={styles.table}>
          <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary in LPA</th>
                <th>Marital Status</th>
                <th>Photo</th>
                <th>Delete</th>
              </tr>
          </thead>
          <tbody>
          {
              items.map((el)=>{
                
                return (
                  <tr key={el.id}>
                    <td>{el.name}</td>
                    <td>{el.age}</td>
                    <td>{el.address}</td>
                    <td>{el.dept}</td>
                    <td>{el.salary}</td>
                    <td>{(el.marital? "Yes":"No")}</td>
                    <td>{el.photo}</td>
                    <td><button onClick={()=>props.handleDelete(el.id)}>Delete</button></td>
                  </tr>
                )
              })
          }
          </tbody>
        </table>
    </div>
  )
}

export default FormTable