import React,{useState} from 'react';
import axios from "axios";
import Moviedetails from './Moviedetails';

const Moviesearch = () => {
    const [moviename,setMoviename] = useState("");
    const [data,setData]=useState("");
    const submitsearch =async(e)=>{
        e.preventDefault();
       let dataurl=`http://www.omdbapi.com/?t=${moviename}&apikey=a8e354a8`
        let response=await axios(dataurl)
        setData(response.data);

    }

  return (
    <>
        <div className="container mt-5">
        <div className="row">
            <p className="h2">Search a Movie</p>
        </div>
        <div className="row">
            <form onSubmit={submitsearch}>
                <input className="name m-1" type="text" size="49" onChange={(e)=>{setMoviename(e.target.value)}} placeholder="Movie name"/>
                <input type="submit" className='btn btn-primary m-1'/>
            </form>
        </div>
        {Object.keys(data).length>0 && <div>{data.Response=='False' && <div className='eror'><div className='h3'>  Enter valid movie name.Please!!  </div></div>}
        {data.Response!='False' && <div><Moviedetails data={data}/></div>}</div>}

        
        
    </div>
    </>
  )
}

export default Moviesearch