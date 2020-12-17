import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setresults] = useState([]);

  useEffect(() => {
    // const search = async () => {
    //   const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
    //     params: {
    //       action: 'query',
    //       list: 'search',
    //       origin: '*',
    //       format: 'json',
    //       srsearch: term
    //     }
    //   });

    //   setresults(data.query.search);
    // };

    // const timeoutId = setTimeout(() => {
    //   if (term){
    //     search();
    //   }
    // }, 500)
  }, [term]);

  const renderResult = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{__html: result.snippet }}></span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input
            value={term}
            className="input " 
            type="text" 
            onChange= {(e) => setTerm(e.target.value)}/>
        </div>
      </div>
      <div className="ui celled list">
        {renderResult}
      </div>
    </div>
  )
}

export default Search