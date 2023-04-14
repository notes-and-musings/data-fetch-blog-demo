import { useQuery } from "react-query";
import { fetchList } from "./fetchData";

export const useFetchSubscriptionList = (
  filter = "ACTIVE",
  sortOrder = "asc"
) => {
  const subscriptionsQuery = useQuery(["Subscriptions", filter, sortOrder], {
    queryFn: () => fetchList(filter, sortOrder)
  });

  return subscriptionsQuery;
};
