import axios,{AxiosResponse,AxiosError} from "axios";
import {IAPIParams, IAPIResponse, IParams} from "../../typings";

export const getBooks = async (data:IParams) => {
    const params:IAPIParams = {
        key: 'AIzaSyBh-HZoUQ517I_cnDGRUL6pZHpeMJ9HcKM',
        q: data.q,
        categories: [data.category],
        orderBy: data.sortingBy,
        startIndex: data.startIndex,
        maxResults: data.maxResults
    };
    try {
        const response: AxiosResponse<IAPIResponse> = await axios.get<IAPIResponse>('https://www.googleapis.com/books/v1/volumes',{params});
        return response.data;
    } catch (error: AxiosError | unknown) {
        throw error;
    }
};