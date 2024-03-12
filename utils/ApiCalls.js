import axios from 'axios'
import useSWR from 'swr'

const fetcher = (...arg) => axios.get(...arg).then(res => res)

//-----> for client-side rendering
const useFetch = (url) => {
  const {data, isLoading, error} = useSWR(url, fetcher)
  return {data, isLoading, error};
}

//-----> for server-side rendering
const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      return { data: response.data, error: null };
    } catch (error) {
      return { data: null, error: error.message || 'Error fetching data' };
    }
  };

//-----> for post data request

export { fetchData };
export default useFetch;