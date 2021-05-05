import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import * as S from './styles';

import logo from '../../assets/logo-pokestore.png';
import imageNotFound from '../../assets/pokemon-not-found-image.png';

const PokedexPage = () => {
  const sessionPokedex: any = sessionStorage.getItem('POKEDEX');
  const sessionTotal: any = sessionStorage.getItem('TOTAL');
  const [count, setCount] = useState(sessionPokedex ? JSON.parse(sessionPokedex).length : 0);
  const [pokedex, setPokedex] = useState<any>(sessionPokedex ? JSON.parse(sessionPokedex) : []);
  const [total, setTotal] = useState<any>(sessionTotal ? parseFloat(sessionTotal) : 0);

  const changeQuantity = (poke: IPokemon, quantity: string) => {
    const newPokedex = pokedex;
    const pokemonPosition: IPokemon | any = newPokedex.findIndex(
      (item: IPokemon) => item.id === poke.id
    );
    const valToRemove = newPokedex[pokemonPosition].price * newPokedex[pokemonPosition].quantity;
    const calcRemove = (total - valToRemove).toFixed(2);

    if (parseInt(quantity) > 0 && quantity !== '') {
      const newTotal = parseInt(quantity) * newPokedex[pokemonPosition].price;
      const calcTotal = (parseFloat(calcRemove) + newTotal).toFixed(2);

      newPokedex[pokemonPosition].quantity = parseInt(quantity);
      setTotal(parseFloat(calcTotal));
      sessionStorage.setItem('TOTAL', calcTotal);
    } else {
      setCount(count - 1);
      sessionStorage.setItem('COUNT', String(count - 1));
      setTotal(parseFloat(calcRemove));
      sessionStorage.setItem('TOTAL', calcRemove);

      newPokedex.splice(pokemonPosition, 1);
    }

    setPokedex(newPokedex);
    sessionStorage.setItem('POKEDEX', JSON.stringify(newPokedex));
  };

  const finishOrder = () => {
    Swal.fire({
      title: 'Caçada concluída!',
      text: 'Uaau! Você é um verdadeiro caçador de pokémons.',
      icon: 'success',
      confirmButtonText: 'Reiniciar caçada',
    }).then(() => {
      window.location.href = '/';
    });
  };
  return (
    <S.Wrapper>
      <Link to="/loja">
        <S.Logo src={logo} alt="Logo PokeStore" title="Logo PokeStore" />
      </Link>

      <S.WrapperPokedex>
        {pokedex.length > 0 ? (
          <S.WrapperPokemons>
            <S.Title>Pokedex</S.Title>
            <S.PokemonsHeader>
              <S.Column className="-name">
                <strong>Pokémon</strong>
              </S.Column>
              <S.Column className="-quantity">
                <strong>Quantidade</strong>
              </S.Column>
              <S.Column className="-price">
                <strong>Preço</strong>
              </S.Column>
            </S.PokemonsHeader>
            <S.PokemonsContent>
              {pokedex.map((pokemon: IPokemon) => {
                return (
                  <S.Pokemon key={pokemon.id}>
                    <S.Column className="-name -flex">
                      <S.PokemonImage
                        src={pokemon.image || imageNotFound}
                        alt={pokemon.name}
                        title={pokemon.name}
                      />
                      <S.PokemonInfos>
                        <S.PokemonName>{pokemon.name}</S.PokemonName>
                        <S.PokemonTechnicalInformation>
                          Experiência: {pokemon.base_experience} / Altura: {pokemon.height / 10} m /
                          Peso: {pokemon.weight / 10} kg
                        </S.PokemonTechnicalInformation>
                      </S.PokemonInfos>
                    </S.Column>
                    <S.Column className="-quantity -flex">
                      <S.ButtonQuantity
                        onClick={() => changeQuantity(pokemon, (pokemon.quantity - 1).toString())}
                        className="-minus">
                        -
                      </S.ButtonQuantity>
                      <S.InputQuantity
                        value={pokemon.quantity}
                        maxLength={2}
                        min={0}
                        minLength={1}
                        onChange={(event) => changeQuantity(pokemon, event.target.value)}
                        type="number"
                      />
                      <S.ButtonQuantity
                        onClick={() => changeQuantity(pokemon, (pokemon.quantity + 1).toString())}
                        className="-plus">
                        +
                      </S.ButtonQuantity>
                    </S.Column>
                    <S.Column className="-price">
                      <strong>
                        {pokemon.price.toLocaleString('pt-br', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </strong>
                    </S.Column>
                  </S.Pokemon>
                );
              })}
            </S.PokemonsContent>
            <S.PokemonsFooter>
              <S.Text>
                Total:{' '}
                {total.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </S.Text>

              <S.Button onClick={() => finishOrder()}>Finalizar Caçada</S.Button>
            </S.PokemonsFooter>
          </S.WrapperPokemons>
        ) : (
          <S.EmptyPokedex>Sua pokedex está vazia</S.EmptyPokedex>
        )}
      </S.WrapperPokedex>
    </S.Wrapper>
  );
};

export default PokedexPage;
