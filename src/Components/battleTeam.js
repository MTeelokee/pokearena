import { PokeContext } from "../Context/PokeContext";
import { useContext, useState } from "react";


const BattleTeamVar () => {
  const { value5 } = useContext(PokeContext);
  const [playerTeam, setPlayerTeam] = value5;

  pokemon1: {
    pokemonImg: playerTeam[0].sprites.back_default,
    pokemonName: playerTeam[0].name,
    pokemonLevel: 100,
    pokemonHP: 300,
    pokemonType: playerTeam[0].types[0].type.name,
    pokemonAttacks: {
      attackOne: {
        name: playerTeam[0].moves[getRandomInt(playerTeam[0].moves.length)].move
          .name,
        damage: playerTeam[0].stats[3].base_stat,
        type: "",
      },
      attackTwo: {
        name: playerTeam[0].moves[getRandomInt(playerTeam[0].moves.length)].move
          .name,
        damage: 300,
        type: "",
      },
      attackThree: {
        name: playerTeam[0].moves[getRandomInt(playerTeam[0].moves.length)].move
          .name,
        damage: playerTeam[0].stats[1].base_stat,
        type: "",
      },
      attackFour: {
        name: playerTeam[0].moves[getRandomInt(playerTeam[0].moves.length)].move
          .name,
        damage: playerTeam[0].stats[4].base_stat,
        type: "",
      },
    },
  },

  pokemon2: {
    pokemonImg:
      playerTeam[1].sprites.versions["generation-v"]["black-white"].animated
        .back_default,
    pokemonName: playerTeam[1].name,
    pokemonLevel: 100,
    pokemonHP: 300,
    pokemonType: playerTeam[1].types[0].type.name,
    pokemonAttacks: {
      attackOne: {
        name: playerTeam[1].moves[getRandomInt(playerTeam[1].moves.length)].move
          .name,
        damage: playerTeam[1].stats[3].base_stat,
        type: "",
      },
      attackTwo: {
        name: playerTeam[1].moves[getRandomInt(playerTeam[1].moves.length)].move
          .name,
        damage: playerTeam[1].stats[2].base_stat,
        type: "",
      },
      attackThree: {
        name: playerTeam[1].moves[getRandomInt(playerTeam[1].moves.length)].move
          .name,
        damage: playerTeam[1].stats[1].base_stat,
        type: "",
      },
      attackFour: {
        name: playerTeam[1].moves[getRandomInt(playerTeam[1].moves.length)].move
          .name,
        damage: playerTeam[1].stats[4].base_stat,
        type: "",
      },
    },
  },

  pokemon3: {
    pokemonImg:
      playerTeam[2].sprites.versions["generation-v"]["black-white"].animated
        .back_default,
    pokemonName: playerTeam[2].name,
    pokemonLevel: 100,
    pokemonHP: 300,
    pokemonType: playerTeam[2].types[0].type.name,
    pokemonAttacks: {
      attackOne: {
        name: playerTeam[2].moves[getRandomInt(playerTeam[2].moves.length)].move
          .name,
        damage: playerTeam[2].stats[3].base_stat,
        type: "",
      },
      attackTwo: {
        name: playerTeam[2].moves[getRandomInt(playerTeam[2].moves.length)].move
          .name,
        damage: playerTeam[2].stats[2].base_stat,
        type: "",
      },
      attackThree: {
        name: playerTeam[2].moves[getRandomInt(playerTeam[2].moves.length)].move
          .name,
        damage: playerTeam[2].stats[1].base_stat,
        type: "",
      },
      attackFour: {
        name: playerTeam[2].moves[getRandomInt(playerTeam[2].moves.length)].move
          .name,
        damage: playerTeam[2].stats[4].base_stat,
        type: "",
      },
    },
  },

  pokemon4: {
    pokemonImg:
      playerTeam[3].sprites.versions["generation-v"]["black-white"].animated
        .back_default,
    pokemonName: playerTeam[3].name,
    pokemonLevel: 100,
    pokemonHP: 300,
    pokemonType: playerTeam[3].types[0].type.name,
    pokemonAttacks: {
      attackOne: {
        name: playerTeam[3].moves[getRandomInt(playerTeam[3].moves.length)].move
          .name,
        damage: playerTeam[3].stats[3].base_stat,
        type: "",
      },
      attackTwo: {
        name: playerTeam[3].moves[getRandomInt(playerTeam[3].moves.length)].move
          .name,
        damage: playerTeam[3].stats[2].base_stat,
        type: "",
      },
      attackThree: {
        name: playerTeam[3].moves[getRandomInt(playerTeam[3].moves.length)].move
          .name,
        damage: playerTeam[3].stats[1].base_stat,
        type: "",
      },
      attackFour: {
        name: playerTeam[3].moves[getRandomInt(playerTeam[3].moves.length)].move
          .name,
        damage: playerTeam[3].stats[4].base_stat,
        type: "",
      },
    },
  },
};

export default  BattleTeamVar
