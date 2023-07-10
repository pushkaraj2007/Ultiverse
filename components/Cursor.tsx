import { useEffect, useState } from "react";
import UltiverseOnclick from "../components/screens/UltiverseOnclick";
import Header from "./Header";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });


    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", updateCursorPosition);

        return () => {
            document.removeEventListener("mousemove", updateCursorPosition);
        };
    }, []);

    return (
        <>
            <div
                className="fixed z-50"
                style={{
                    left: `${position.x - 24}px`,
                    top: `${position.y - 24}px`,
                    pointerEvents: "none",
                }}
            >
                <img
                    src="/group-21116.svg"
                    alt="Custom Cursor"
                    className="w-20 h-20"
                />
            </div>
        </>
    );
};

export default Cursor;
