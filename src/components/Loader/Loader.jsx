import styles from './Loader.style';
import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [loaded, setLoaded] = useState(0);
  const [showCubes, setShowCubes] = useState([false, false, false]);
  const [isFilling, setIsFilling] = useState(true);
  const [animationPaused, setAnimationPaused] = useState(false);

  useEffect(() => {
    const increment = () => {
      setLoaded(prevLoaded => {
        const newLoaded = prevLoaded + 1;
        if (newLoaded === 25) setShowCubes([true, false, false]);
        else if (newLoaded === 50) setShowCubes([true, true, false]);
        else if (newLoaded === 75) setShowCubes([true, true, true]);
        else if (newLoaded === 100) {
          setIsFilling(false);
          setAnimationPaused(true);
          setTimeout(() => {
            setShowCubes([false, false, false]);
            setLoaded(0);
            setIsFilling(true);
            setAnimationPaused(false);
          }, 1000);
        }
        return newLoaded;
      });
    };

    const intervalId = setInterval(() => {
      if (!animationPaused) increment();
    }, 30);

    return () => clearInterval(intervalId);
  }, [animationPaused]);

  return (
    <div id="loader" style={styles.loader}>
      <div id="lemon" style={showCubes[0] ? styles.lemon : styles.hidden}></div>
      <div id="straw" style={showCubes[0] ? styles.straw : styles.hidden}></div>
      <div id="glass" style={styles.glass}>
        <div id="cubes" style={styles.cubes}>
          {showCubes.map((show, index) => (
            <div
              key={index}
              style={
                show
                  ? index === 0
                    ? { ...styles.cube, ...styles.cube1 }
                    : index === 1
                    ? { ...styles.cube, ...styles.cube2 }
                    : { ...styles.cube, ...styles.cube3 }
                  : styles.hidden
              }
            ></div>
          ))}
        </div>
        <div
          id="drink"
          style={{
            ...styles.drink,
            top: isFilling ? `${100 - loaded * 0.9}%` : '100%',
          }}
        ></div>
        <span id="counter" style={styles.counter}>
          {loaded}%
        </span>
      </div>
      <div id="coaster" style={styles.coaster}></div>
      <footer style={styles.footer}>
        Please wait while
        <br />
        we fill up your glass...
      </footer>
    </div>
  );
};

export default Loader;
