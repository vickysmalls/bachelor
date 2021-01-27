import {useState, useEffect} from 'react';

                //must pass in the url to fetch
const useFetchOblig = (url) => {
    const [data, setData] = useState(null);
    
    
      
      //runs every re-render
      //Fetches data as soon as the component renders, then updates state
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
              

          })
          .catch(err => {
              if(err.name === 'AbortError'){
                  console.log('fetch aborted');
              }


          })
        return () => abortCont.abort();
        //the dependency array [] below makes sure that the useEffect hook
        //only run the function after the first initial render
    }, [url]);

    return {data}

}

export default useFetchOblig;