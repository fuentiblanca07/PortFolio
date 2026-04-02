// withSuspense.jsx
import React, { Suspense } from "react";
import { Loading } from "./Components/Loading";

export const withSuspense = (Component) => {
  return (props) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};