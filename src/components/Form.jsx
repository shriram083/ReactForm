import React, {useState} from 'react';
import styles from "../styles/Form.module.css";

const Form = (props) => {
  const [employee,setEmployee] = useState({
    "name":'',
    "age" :'',
    "address":"",
    "dept":"",
    "salary":0,
    "marital":false,
    "photo":""
  });

  const handleOnChange = (event) => {
    let {name, value, type, checked, files} = event.target;
    if(type==='checkbox')
    {
      setEmployee({
        ...employee,
        [name]:checked
      })
    }
    else if(type==='file')
    {
      setEmployee({
        ...employee,
        [name]:files
      })
    }
    else
    {
      setEmployee({
        ...employee,
        [name]:value
      })
    }
  };

  const handleSubmit = () => {
    event.preventDefault();
    // console.log(employee);
    props.addData(employee)
    setEmployee({
      ...employee,
      "name":'',
      "age" :'',
      "address":"",
      "dept":"",
      "salary":0,
      "marital":false,
      "photo":""
    });
  }
  return (
    <div>
        <h1>New Employee React Form</h1>
        <form onSubmit={handleSubmit} className={styles.formComponents}>
          <div>
              <label >Name </label>
              <input 
                  type="text"
                  placeholder='Enter Your Name'
                  name='name'
                  value={employee.name}
                  onChange={handleOnChange}
              />
          </div>
          <div>
              <label>Age </label>
              <input 
                  type="number"
                  placeholder='Enter Your Age'
                  name='age'
                  value={employee.age}
                  onChange={handleOnChange}
              />
          </div>
          <div>
              <label>Address </label>
              <input 
                  type="text"
                  placeholder='Enter Your Address'
                  name='address'
                  value={employee.address}
                  onChange={handleOnChange}
              />
          </div>
          <div>
              <label>Department </label>
              <select name="dept" id="" onChange={handleOnChange} value={employee.dept}>
              <option ></option>
                <option value="frontEnd">Front End Dept.</option>
                <option value="backEnd">Back End Dept.</option>
                <option value="testing">Testing Dept.</option>
                <option value="design">Design Dept.</option>
              </select>
          </div>
          <div>
              <label>Salary </label>
              <input 
                  type="number"
                  placeholder='Enter Your Salary LPA'
                  name='salary'
                  value={employee.salary}
                  onChange={handleOnChange}
              />
          </div>
          <div>
              <label>Married </label>
              <input 
                  type="checkbox"
                  name='marital'
                  checked={employee.marital}
                  onChange={handleOnChange}
              />
          </div>
          <div>
              <label>Profile Photo </label>
              <input 
                  type="file"
                  name='photo'
                  // value={employee.photo}
                  onChange={handleOnChange}
              />
          </div>
          <input type="submit" className={styles.Button}/>
        </form>
    </div>
  )
}

export default Form