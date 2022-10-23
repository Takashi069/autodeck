import { useEffect,useState } from "react";

const useFetch = (url) =>{ //url is passed as a parameter to make it more re-usable

    const [data,setData] = useState(null)
    const [dataRetrived,setdataRetrieved] = useState(false);
    const [errorDetected, setErrorDetected] = useState(false);

    useEffect(()=>{
        fetch(url)
          .then(res =>{
            if(res.ok === false){
              // Error handling
              throw Error("Could not fetch resource from database")
            }
            return res.json()
          })
          .then(data =>{
            //This data is the parsed data after getting a response from the link
            setData(data)
            console.log("in Hook"+data);
            setdataRetrieved(true)
            setErrorDetected(false);
          })
          .catch(error =>{
            console.log(error)
            setErrorDetected(true)
            setdataRetrieved(false);
          })
      },[url])
      //This will now make the useEffect function dependent on the url i.e it will re-render the code whenever the url changes
    
      


    return {data, errorDetected, dataRetrived, setData}
}

export default useFetch