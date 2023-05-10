const pokemonFetch = async () => {
  return await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
    .then((response) => response.json())
    .then(async (pokemon) => {
      let pokemones = [];
      for (poke of pokemon.results) {
        await fetch(poke.url)
          .then((response) => response.json())
          .then((pokeData) => {
            pokemones.push({
              ...poke,
              img: pokeData.sprites.other.home.front_default,
            });
          });
      }
      return pokemones;
    });
};

pokemonFetch().then((resp) => {
  console.log(resp);
});

function sumarUno(numero, callback) {
  if (numero >= 7) {
    callback("Numero muy grande");
    return;
  }
  setTimeout(() => {
    callback(null, numero + 1);
  }, 2000);
}

const sumarUnoPromesa = async (numero) => {
  return await new Promise((resolve, reject) => {
    if (numero >= 7) {
      reject("Numero muy grande");
    }
    setTimeout(() => {
      resolve(numero + 1);
    }, 2000);
  });
};

sumarUnoPromesa(5)
  .then((num) => {
    console.log(num);
  })
  .catch((err) => {
    console.log(err);
  });

const resp = fetch("https://reqres.in/api/users?page=2");
console.log(resp);
