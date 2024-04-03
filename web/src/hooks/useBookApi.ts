import {useGetBookListQuery} from "../store/api-slice";

export const useBookApi = () => {
    const { data, error, isLoading } = useGetBookListQuery({})

    return {
        isLoading,
        data,
        error,
    }
}