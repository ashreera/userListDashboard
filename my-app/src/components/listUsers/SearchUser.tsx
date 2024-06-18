import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const SearchInput = () => {
  const queryClient = useQueryClient();
  const [queryId, setQueryId] = useState<string>("1");

  const getFromCache = (key: string) => {
    return queryClient.getQueryData([key]);
  };

  const { data, isLoading } = useQuery({
    queryKey: [`getComments/${queryId}`],
    queryFn: async (arg) => {
      const cache = getFromCache(`getComments/${queryId}`); // try to access the data from cache
      if (cache) return cache; // use the data if present in the cache

      // if not, get the data
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );

      return data.data;
    },
  });

  const handleChangesQuery = (id: string) => {
    setQueryId(id || "1");
  };

    function debounce(arg0: void): void {
        throw new Error("Function not implemented.");
    }

  return (
    <>
      <input onChange={(e) => debounce(handleChangesQuery(e.target.value))} />

      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          {data?.map(({ name }: any, index: number) => (
            console.log("asdf")
          ))}
        </div>
      )}
    </>
  );
};

export default SearchInput
;
