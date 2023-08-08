import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppLayout from "./AppLayout";

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppLayout />
      <h1 className="test">WorldWise</h1>

      <Link to="/app">go to app</Link>
    </div>
  );
}

export default Homepage;
