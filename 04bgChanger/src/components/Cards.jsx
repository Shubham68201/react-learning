import {useState, useEffect} from 'react';

function Card(){

    
  let [color,setbgColor]=useState("white");

  useEffect(()=>{
    document.body.style.background=color
  },[color])


    return(
        <>
        <div className="flex justify-center">
            <div className="inline-flex gap-8 px-6 py-3 border border-b-4 bg-amber-400 mt-10" >
            <button className="px-6 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-200" 
            onClick={()=>setbgColor("red")}
            >red</button>
            <button className="px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-200"
            onClick={()=>setbgColor("blue")}
            >blue</button>
            <button className="px-6 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-200"
            onClick={()=>setbgColor("green")}
            >green</button>
            </div>
        </div>
        </>
    )
}

export default Card