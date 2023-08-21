import { createContext, useState, useRef } from "react";

export const MyContext = createContext();
const MyProvider = ({ children }) => {
  const [Singledetaildata, setSingledetaildata] = useState(
    "64cffee700bad552e8dcd5de"
  );
  const [currenvideo, setcurrentvideo] = useState();
  const [alldata, setalldata] = useState([]);
  const [watchlistdata, setwatchlistdata] = useState([]);
  const [login, setlogin] = useState(false);
  const [dataadd, setdataadd] = useState([]);

  return (
    <MyContext.Provider
      value={{
        Singledetaildata,
        setSingledetaildata,
        currenvideo,
        setcurrentvideo,
        alldata,
        setalldata,
        watchlistdata,
        setwatchlistdata,
        login,
        setlogin,
        dataadd,
        setdataadd,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
