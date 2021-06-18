import Axios from "axios";
import { useEffect, useState } from "react";
import { Movies } from "../MoviePages/Movies";

export const Theater = (props) => {
  // console.log(props);
  const [theater, setTheater] = useState({});
  const getTheater = async () => {
    let res = await Axios.get(`/api/theaters/${props.match.params.id}`);
    setTheater(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getTheater();
  }, []);
  return (
    <>
      <h1>{theater.name}</h1>
      <Movies />
    </>
  );
};
