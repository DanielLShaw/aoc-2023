import { useParams } from "react-router-dom";
import Day1 from "./1/Day1";
import Day404 from "./Day404";
import Day2 from "./2/Day2";
import Layout from "../Layout";

export default function Days() {
  const { day } = useParams();

  let dayComponent;
  switch (day) {
    case "1":
      dayComponent = <Day1 />;
      break;
    case "2":
      dayComponent = <Day2 />;
      break;
    default:
      dayComponent = <Day404 />;
      break;
  }

  return <Layout>{dayComponent}</Layout>;
}
