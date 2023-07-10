import type { NextPage } from "next";
import Cursor from '../components/Cursor';
import UltiverseOnclick from "../components/screens/UltiverseOnclick";
import MainScreen from "../components/screens/MainScreen"
import { useEffect, useState } from "react";

const UltiverseDemo: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  return (
    <>
      <Cursor />

      <div className={`screen-transition ${isOpen ? "open" : ""}`}>
        {isOpen ? <UltiverseOnclick /> : <MainScreen />}
      </div>
    </>
  );
};

export default UltiverseDemo;
