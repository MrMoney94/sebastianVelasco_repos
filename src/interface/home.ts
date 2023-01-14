export interface PokemonQuery {
  id: number;
  name: string;
  url: string;
}

export interface PokemonItemQuery {
  name: string;
  url: string;
  onClick?: (e: PokemonDataQuery) => void;
}

export interface PokemonDataQuery {
  id: string | number;
  name: string;
  image: string;
  types: Array<any>;
  sprites: {
    back: string;
    shiny: string;
    front: string;
    front_shiny: string;
  };
  moves: any;
  weight: string;
}

export interface ModalProps {
  onBack?: () => void;
  data: PokemonDataQuery;
}
