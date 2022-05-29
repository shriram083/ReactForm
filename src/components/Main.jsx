import React, {useState, useEffect} from "react";
import Form from "./Form";
import FormTable from "./FormTable";
import axios from "axios";

const Main = () => {
    const  [data,setData] = useState([]);

    const addData = (details) => {
        axios.post('http://localhost:8080/empolyees', {
            ...details
        }).then(resp => {
            setData([...data,resp.data]);
            // console.log(data);
        })
        
    };

    useEffect(()=>{
        const callData = async () => {
            let res = await axios.get(`http://localhost:8080/empolyees`)
            setData(res.data)
            // console.log(res.data)
        }
        callData();
    },[])

    const handleSort = (value) => {
        // console.log(`inside sort ${value}`)
        let arr = data
        arr=arr.sort(function (a,b){
                if(value=='htl')return a.salary-b.salary;
                if(value=='lth')return b.salary-a.salary;
        });
        setData(arr.map((el)=>{return el}))
    };

    const handlefilter = (value) => {
        // console.log(`inside filter ${value}`)
        const callData = async () => {
            let res = await axios.get(`http://localhost:8080/empolyees`)
            setData(res.data.filter((el)=>{
                    return el.dept==value;
            }));
        }
        callData();
    };

    const handleDelete = (value) => {
        console.log(`inside delete ${value}`)
        axios.delete(`http://localhost:8080/empolyees/${value}`)
        setData(data.filter((el)=>{
            return el.id!=value;
        }));
    };

  return (
    <div>
        <Form addData={addData}/>
        <FormTable 
            data={data}
            handleSort={handleSort}
            handlefilter={handlefilter}
            handleDelete={handleDelete}
        />
    </div>
  )
}

export default Main