import { useState, useEffect} from 'react';

export const useResize = () => {
  let cardsLoad = 0;
  let numberOfItems = 0;
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => { 
    const handleResize = (event) => {
      setTimeout(()=> {
        setWidth(event.target.innerWidth);
      }, 1000)
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (width >= 1280) {
    cardsLoad = 16;
    numberOfItems = 4;
  }
  else if (width > 480 && width < 1280) {
    numberOfItems = Math.floor((width + 20 - 60) / 290);
    cardsLoad = numberOfItems * 4;
  }
  else if (width <= 480) {
    cardsLoad = 5;
    numberOfItems = 2;
  }


  return {
    width,
    cardsLoad,
    numberOfItems
  }
}
