import React from "react";
import Dog from "../Dog/Dog";
import s from "./Dogs.module.css";

const Dogs = ({ dogs }) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, []);
  if (dogs.msg) {
    return (
      <div>
        <h1>dogs.msg</h1>
      </div>
    );
  } else {
   

    return (
      <div>
        {dogs?.map((e, i) => {
          return (
            <div key={e.id} className={s.container}>
              <Dog key={e.id} {...e} />
            </div>
          );
        })}
      </div>
    );
  }
};
export default Dogs;
