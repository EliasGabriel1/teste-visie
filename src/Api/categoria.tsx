import React, { useEffect, useState } from "react";

const useCategoria = () => {
  const [api, setApi] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch("https://dummyjson.com/products", {
          headers: {
              Accept: "application/json"
          }
      }).then(response => {
          if (response.ok) {
              return response.json()
          }
          throw response;
      }).then(data => {
        setApi(data);
      }).catch(error => {
          console.error("Error fetching data: ", error);
          setError(error);
      }).finally(() => {
          setLoading(false)
      })

  }, [])

  return {api,loading,error};
}

export default useCategoria;
