import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="error">
      <h2>Opps! Something went wrong.</h2>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
