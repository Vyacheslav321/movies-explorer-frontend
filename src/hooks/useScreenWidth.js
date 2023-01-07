import { useCallback, useEffect, useState } from "react";

export default function useScreenWith() {
  const getScreenWidth = useCallback(() => window.innerWidth, []);
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());

  useEffect(() => {
    let timer;

    function handleScreenResize() {
      setScreenWidth(getScreenWidth());
    }

    function widthСchangeСontroller() {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          handleScreenResize();
        }, 1500);
      }
    }
    window.addEventListener("resize", widthСchangeСontroller, false);
    return () => window.removeEventListener("resize", handleScreenResize);
  }, [getScreenWidth]);

  return screenWidth;
}
