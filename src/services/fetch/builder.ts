export const buildPokemon = (data: any) => {
  if (data.sprites?.other?.dream_world?.front_default)
    return {
      base_experience: data.base_experience,
      height: data.height,
      id: data.id,
      image: data.sprites?.other?.dream_world?.front_default,
      name: capitalizeName(data.name),
      price: parseFloat((data.base_experience / 3).toFixed(2)),
      slug: data.name,
      weight: data.weight,
    };
};

const capitalizeName = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1).replace(/(-)+/g, ' ');
};
