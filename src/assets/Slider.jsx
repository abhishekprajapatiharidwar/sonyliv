import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Singleslide from "./Singleslide";
import { useContext } from "react";
import { MyContext } from "./mycontext";
import "./Singleslide.css";

export function Slider(props) {
  const { jsondata, setjsondata } = useContext(MyContext);
  const marginStyles = {
    default: "1.2rem",
    smallScreen: "6rem",
    smallerScreen: "7rem",
  };

  return (
    <Splide
      options={{
        drag: "free",
        focus: "center",
        perPage: 7.5,
        perMove: 4,
        speed: 1000,
        gap: "10rem",
        height: "14rem",
        pagination: false,
      }}
    >
      {props.slidedata.map((item, i) => {
        return (
          <SplideSlide style={{ margin: "1rem" }} key={item._id}>
            <Singleslide slidesingledata={item} />
          </SplideSlide>
        );
      })}
    </Splide>
  );
}
