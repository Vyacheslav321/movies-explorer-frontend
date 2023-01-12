import { useEffect } from "react";

export default function useEscKey(callback, dependency) {
  useEffect(() => {
    if (dependency) {
      const onPressEsc = (e) => {
        if (e.keyCode === 27) {
          console.log(e.keyCode)
          callback();
        }
      };
      document.addEventListener("keyup", onPressEsc);

      return () => {
        document.removeEventListener("keyup", onPressEsc);
      };
    }
  }, [dependency]);
}
