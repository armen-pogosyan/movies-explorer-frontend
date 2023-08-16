import { useState, useEffect} from 'react';

export const useResize = () => {
  let cardsLoad = 0;
  let numberOfItems = 0;
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => { 
    const handleResize = (event) => {
      setTimeout(()=> {
        setWidth(event.target.innerWidth);
      }, 1)
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
  else if (width > 989 && width < 1280) {
    numberOfItems = 3;
    cardsLoad = 12;
  }
  else if (width > 757 && width <= 989) {
    numberOfItems = 2;
    cardsLoad = 8;
  }
  else if (width <= 757) {
    cardsLoad = 5;
    numberOfItems = 2;
  }


  return {
    width,
    cardsLoad,
    numberOfItems
  }
}
