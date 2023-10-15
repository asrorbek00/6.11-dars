import { useEffect, useState } from "react";

export function useFetch(url, method = "GET") {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const [postData, setPostData] = useState();

  const getNewRecipie = (newRecipie) => {
    setPostData({
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: newRecipie ? JSON.stringify(newRecipie) : null,
    });
  };

  useEffect(() => {
    const getData = async (fetchHeaders) => {
      try {
        const req = await fetch(url, { ...fetchHeaders });
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setError(null);
        setIsPending(false);
      } catch (error) {
        console.log(error.message);
        setIsPending(false);
        setError(error.message);
      }
    };
    getData();

    if (method == "POST" && postData) {
      getData(postData);
    }

    if (method == "DELETE" && postData) {
      getData(postData);
    }

    if (method == "GET") {
      getData();
    }
  }, [url, method, postData]);
  return { data, isPending, error, getNewRecipie };
}
