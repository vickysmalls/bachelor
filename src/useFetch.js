import {useState, useEffect} from 'react';

        //must pass in the url to fetch
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
      //runs every re-render
      //Fetch data når komponent rendrer, så updates state
    useEffect(() => {
        const abortCont = new AbortController();
        console.log('use effetct ran');

        fetch(url, {signal: AbortController.signal})
          .then(res => {
              
              if(!res.ok){
                  throw Error('Could not fetch the data for that resource');
                  
              }
              return res.json()
          })
          .then(data => {
              setData(data);
              setIsPending(false);
              setError(null);
              
              

          })
          .catch(err => {
              if(err.name === 'AbortError'){
                  console.log('fetch aborted');
              }
              else{
                setIsPending(false);
                setError(err.message);
              }
              

          })
        return () => abortCont.abort();
        //the dependency array [] below makes sure that the useEffect hook
        //only run the function after the first initial render
    }, [url]);

    return {data, isPending, error}

}

export default useFetch;