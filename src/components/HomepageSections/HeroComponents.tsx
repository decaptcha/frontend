import Lottie from "react-lottie";
import animationData from "../../../public/images/anim.json";

export const HeroComponents = () => {
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} width={600} height={600}/>;
};
