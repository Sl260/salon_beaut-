/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      // Log the error or send it to an error tracking service
      console.error("Error occurred within the ErrorBoundary");
    }
  }, [hasError]);

  if (hasError) {
    return <>An error has occured</>;
  }

  return children;
};

export default ErrorBoundary;
