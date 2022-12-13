import { useEffect, useState } from "react";

export default function useFetch(url) {
  let [fetched, setFetched] = useState([])
  let [loading, setLoading] = useState(false)
  let [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setFetched(data)
    })
    .catch((err) => {
      setError(err.message)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])
  
  return { fetched, setFetched, loading, setLoading, error, setError }
}