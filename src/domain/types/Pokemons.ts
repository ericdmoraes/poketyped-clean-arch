export type Pokemon = {
  name: string;
  url: string;
};

export type GetPokemonsResponse = {
  results: Pokemon[];
};

export type PokemonDetails = {
  id: Number;
  name: String;
  base_experience: Number;
  height: Number;
  is_default: Boolean;
  order: Number;
  weight: Number;
  abilities: [
    {
      is_hidden: Boolean;
      slot: Number;
      ability: {
        name: String;
        url: String;
      };
    },
  ];
  forms: [
    {
      name: String;
      url: String;
    },
  ];
  game_indices: [
    {
      game_index: Number;
      version: {
        name: String;
        url: String;
      };
    },
  ];
  held_items: [
    {
      item: {
        name: String;
        url: String;
      };
      version_details: [
        {
          rarity: Number;
          version: {
            name: String;
            url: String;
          };
        },
      ];
    },
  ];
  location_area_encounters: String;
  moves: [
    {
      move: {
        name: String;
        url: String;
      };
      version_group_details: [
        {
          level_learned_at: Number;
          version_group: {
            name: String;
            url: String;
          };
          move_learn_method: {
            name: String;
            url: String;
          };
        },
      ];
    },
  ];
  species: {
    name: String;
    url: String;
  };
  sprites: {
    back_default: String;
    back_female: String;
    back_shiny: String;
    back_shiny_female: String;
    front_default: String;
    front_female: String;
    front_shiny: String;
    front_shiny_female: String;
    other: {
      dream_world: {
        front_default: String;
        front_female: String;
      };
      home: {
        front_default: String;
        front_female: String;
        front_shiny: String;
        front_shiny_female: String;
      };
      officialartwork: {
        front_default: String;
      };
    };
  };
  stats: [
    {
      base_stat: Number;
      effort: Number;
      stat: {
        name: String;
        url: String;
      };
    },
  ];
  types: [
    {
      slot: 1;
      type: {
        name: String;
        url: String;
      };
    },
  ];
  past_types: [
    {
      generation: {
        name: String;
        url: String;
      };
      types: [
        {
          slot: 1;
          type: {
            name: String;
            url: String;
          };
        },
      ];
    },
  ];
};
