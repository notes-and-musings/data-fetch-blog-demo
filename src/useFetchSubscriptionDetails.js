import { useQuery } from "react-query";
import { fetchDetails } from "./fetchData";

export const useFetchSubscriptionDetails = (id) => {
  const subscriptionDetailsQuery = useQuery(["SubscriptionDetails", id], {
    queryFn: () => fetchDetails(id)
  });

  return subscriptionDetailsQuery;
};
