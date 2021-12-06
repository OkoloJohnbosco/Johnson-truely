import React from "react";

function useScrollTo() {
  const boxRef = React.useState(null);

  const scrollToElem = () => {
    if (boxRef.current) {
      boxRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
      console.log("Found");
      console.log(boxRef.current);
    } else {
      console.log("No element found");
    }
  };
  return { boxRef, scrollToElem };
}

export default useScrollTo;
