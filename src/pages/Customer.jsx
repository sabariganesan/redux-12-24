import React from "react";
import CustomerHeader from "../component/Customer/CustomerHeader";
import CustomerTable from "../component/Customer/table/CustomerTable";
import {
  useAddPostMutation,
  useGetPostQuery,
  useLazyGetPostQuery,
} from "../Query/CustomerQuery";

function Customer() {
  const { data, isError, isLoading, isFetching, isSuccess } =
    useGetPostQuery("2");

  //   const [getPost, { data, isError, isLoading, isFetching, isSuccess }] =
  //     useLazyGetPostQuery();

  return (
    <div>
      <CustomerHeader />
      <CustomerTable />
    </div>
  );
}

export default Customer;
