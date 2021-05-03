export const buildPokemon = (data: any) => {
  return {
    base_experience: data.base_experience,
    height: data.height,
    id: data.id,
    image:
      data.sprites?.other?.dream_world?.front_default ||
      data.sprites?.other['official-artwork']?.front_default ||
      null,
    name: capitalizeName(data.name),
    price: parseFloat((data.base_experience / 3).toFixed(2)),
    quantity: 1,
    slug: data.name,
    weight: data.weight,
  };
};

export const capitalizeName = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1).replace(/(-)+/g, ' ');
};
