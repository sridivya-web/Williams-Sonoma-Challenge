import Axios from "axios";

export default function useApi(URL){
    return Axios.get(URL);
}