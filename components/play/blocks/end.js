import { useEffect, useContext, useState } from "react";
import Block from "./block";
import GameContext from "../../../store/game-context";

function EndBlock(props) {
  const gameCtx = useContext(GameContext);
  const [shouldBeVisible, setShouldBeVisible] = useState(true);

  useEffect(() => {
    let timeoutId;
    if (props.isSelected) {
      // Ustawiamy opóźnienie na 3 sekundy przed potencjalnym ustawieniem wygranej
      timeoutId = setTimeout(() => {
        // Sprawdzamy, czy gra nie została już zakończona jako przegrana
        if (!gameCtx.isGameOver) {
          gameCtx.setWin(true);
        }
      }, 100);
    }

    // Funkcja czyszczenia, która zostanie wywołana przy odmontowywaniu komponentu
    // lub przy zmianie wartości w tablicy zależności useEffect
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
    // Dodajemy gameCtx.isGameOver do tablicy zależności, aby zareagować na jej zmiany
  }, [props.isSelected, gameCtx.isGameOver, gameCtx.setWin]);

  useEffect(() => {
    if (props.isSelected) {
      setShouldBeVisible(false);
    } else {
      setShouldBeVisible(true);
    }
  }, [gameCtx]);

  const checkered = (
    <div className="w-full h-full flex items-center justify-center opacity-30">
      <svg
        className="fill-pageMenu animate-pulse"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -6 7 6"
      >
        <path d="M0 0h1v-1H0v1m2 0h1v-1H2v1m2 0h1v-1H4v1m2 0h1v-1H6v1m0-1v-1H5v1h1M4-1v-1H3v1h1M2-1v-1H1v1h1M1-2v-1H0v1h1m1 0h1v-1H2v1m2 0h1v-1H4v1m2 0h1v-1H6v1M1-3h1v-1H1v1m2 0h1v-1H3v1m2 0h1v-1H5v1M1-4v-1H0v1h1m1 0h1v-1H2v1m2 0h1v-1H4v1m2 0h1v-1H6v1M1-5h1v-1H1v1m2 0h1v-1H3v1m2 0h1v-1H5v1"></path>
      </svg>
    </div>
  );

  const trophy = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-full h-ful"
    >
      <path
        className="stroke-pageMenu"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 14v3m0-3a5.002 5.002 0 01-4.9-4m4.9 4a5.002 5.002 0 004.9-4m.1-5h2.75c.232 0 .349 0 .445.02a1 1 0 01.786.785c.019.097.019.213.019.445 0 .697 0 1.045-.058 1.335a3 3 0 01-2.357 2.357c-.29.058-.638.058-1.335.058h-.35M7 5H4.25c-.232 0-.348 0-.445.02a1 1 0 00-.786.785C3 5.902 3 6.018 3 6.25c0 .697 0 1.045.058 1.335a3 3 0 002.357 2.357c.29.058.638.058 1.335.058h.35m4.9 7c.93 0 1.395 0 1.777.102a3 3 0 012.12 2.122C16 19.605 16 20.07 16 21H8c0-.93 0-1.395.102-1.776a3 3 0 012.121-2.122C10.605 17 11.07 17 12 17zm-4.9-7A5.023 5.023 0 017 9V4.571c0-.533 0-.8.099-1.005a1 1 0 01.467-.467C7.772 3 8.038 3 8.571 3h6.858c.533 0 .8 0 1.005.099a1 1 0 01.467.467c.099.206.099.472.099 1.005V9c0 .342-.034.677-.1 1"
      ></path>
    </svg>
  );

  const design = (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-full h-full">{checkered}</div>
      {shouldBeVisible && (
        <div className="absolute w-full h-full">{trophy}</div>
      )}
    </div>
  );

  return <Block {...props} styleChange={design}></Block>;
}

export default EndBlock;
