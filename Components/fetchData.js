import React, { useState } from 'react'

export default function FetchData() {
    const fetchData = async (text) => {
        const response = await fetch(`https://fhir.imagerad.com/dummy/Patient/?${query}=${text}`);
        response
          .json()
          .then(data=> {
            setResults(data.entry);
          })
          .catch((error)=> console.log(error.message))
      };
}

export { FetchData };