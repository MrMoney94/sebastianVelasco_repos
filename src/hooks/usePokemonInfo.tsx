import {useState, useEffect} from 'react';

export const usePokemonInfo = (url: string) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        const structureData = {
          id: result.id,
          name: result.name,
          image: result.sprites.other.home.front_default,
          types: result.types,
          sprites: {
            back: result.sprites.back_default,
            shiny: result.sprites.back_shiny,
            front: result.sprites.front_default,
            front_shiny: result.sprites.front_shiny,
          },
          moves: result.moves.map((i: any) => {
            const {move} = i;
            const encode = {
              name: move.name,
            };
            return encode;
          }, {}),
          weight: result.weight,
        };
        setData(structureData);
      });
  }, [url]);

  return [data];
};
