import aiteam from "./ai.json";
import { PokeContext } from "../Context/PokeContext";
import { useContext, useState } from "react";

const BattleBrock = () => {
  const { value5 } = useContext(PokeContext);
  const [playerTeam, setPlayerTeam] = value5;

  const [turn, setTurn] = useState(0);
  // const [sequence, setSequence] = useState({});

  const [playerHealth, setPlayerHealth] = useState(player.pokemonHP);
  const [opponentHealth, setOpponentHealth] = useState(opponent.pokemonHP);
  const [myTeamStatus, setMyTeamStatus] = useState([1, 1, 1, 1]);
  const [ennemyTeamStatus, setennemyTeamStatus] = useState([1, 1, 1]);
  const [badges, setBadges] = useState([0, 0, 0, 0]);
  const [pokemonOnBattle, setPokemonOnBattle] = useState();
  const [pokemonOnBattleEnnemy, setPokemonOnBattleEnnemy] = useState();
  const [ennemyBattleTeam, setEnnemyBattleTeam] = useState(aiteam);
  const [winner, setWinner] = useState('')

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  var initialValueBadges = 0;
  const initialValuePoketeamAlly = 0;
  const initialValuePoketeamVersus = 0;

  const arrCondition = (initialValue, arr) => {
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  };

  /*   badges && console.log("badges ", arrCondition(initialValueBadges, badges)); */

  // Working feature -- checking if we got all the trainer badge
  const checkIfFinished = () => {
    if (badges && arrCondition(initialValueBadges, badges) === 4) {
      return "Game ended";
    }
  };

  // console.log(checkIfFinished());

  //  checking if a particular arena is cleared
  // Note on arena : using indexes of badges to check if the arena is cleared , taking  badges[0] as  parameter of the function for brock  badges[1] for the misty arena and so on .

  const checkIfArenaIscleared = (arena) => {
    if (arena > 0) {
      return true;
    }
  };

  // console.log(checkIfArenaIscleared(badges[0]));

  // Checking if pokemon is alive in ally team

  const isAliveAlly = (selectedPokemon) => {
    if (selectedPokemon.pokemonHP < 0) {
      const tempBattleTeam =
        battleTeam && battleTeam.filter((e) => e.pokemonHP > 0);
      setBattleTeam(tempBattleTeam);
      setPokemonOnBattle(null);
    }
  };

  // Checking if pokemon is alive in ennemy team

  const isAliveEnnemy = (selectedPokemon) => {
    if (selectedPokemon.pokemonHP < 0) {
      const enBattleTeam =
        ennemyBattleTeam && ennemyBattleTeam.filter((e) => e.pokemonHP > 0);
      setEnnemyBattleTeam(enBattleTeam);
      setPokemonOnBattleEnnemy(null);
    }
  };

  // checking if EnnemyTeam  still got pokemon to fight
  const ennnemyTeamStatus = () => {
    if (arrCondition(initialValuePoketeamVersus, ennemyTeamStatus) > 0) {
      return true;
    } else {
      return false;
    }
  };

  // checking if Playerteam still got pokemon to fight
  const playerTeamStatus = () => {
    if (arrCondition(initialValuePoketeamAlly, myTeamStatus) > 0) {
      return true;
    } else {
      return false;
    }
  };

    /* const aliveCondition = (initialValueTeam) => {
    initialValueTeam.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValueTeam
    );
  };

  const gameStatus = (myTeamStatus) => {
    return aliveCondition(myTeamStatus) === 0 ? 0 : 1;
  };

  const pokemonHealthAlly = (num) => {
    if (battleTeam.pokemon(num).pokemonHP === 0) {
      setBattleTeam();
    }
  }; */

  // setting wich pokemon is in combat Vsteam

  const aiAtk = (pokemonOnBattleEnnemy) => {
    if (ennnemyTeamStatus && myTeamStatus) {
      return pokemonOnBattleEnnemy.pokemonAttacks[getRandomInt(pokemonOnBattleEnnemy.pokemonAttacks.length)].damage
    }
  }


  const player = battleTeam.pokemon1

  const opponent = Brock.pokemon2




  while (ennnemyTeamStatus() && playerTeamStatus()) {
    fightSequence()
  }




  const fightSequence = () => {  // only for one fight
    if (turn === 0) {
      sequencePlayer()
      if (opponentHealth <= 0) {
        setWinner('player')
      } else {
        fightSequence() // recursion
      }
    }
    else{
      sequenceAi()
      if (playerHealth <= 0){
        setWinner('opponent')
      } else {
        fightSequence() // recursion
      }
    }
  }

  const  sequencePlayer = () => {
    //playerChoice is  "attackOne" or "attackTwo" , etc.
    const damage = player.pokemonAttacks[playerChoice].damage
    setOpponentHealth( health => health - damage)
    setTurn(1)
  };

  const sequenceAi = () => {
    //playerChoice is  "attackOne" or "attackTwo" , etc.
    const damage = opponent.pokemonAttacks[aiChoice].damage
    setOpponentHealth( health => health - damage)
    setTurn(0)
  }


  const atk = (player[attackOne][damage],var2) => {
    let currentHealth = var1.health
    currentHealth -=  var2.attack
    setvar2()
  }


/*   const  playerTurn = () => {
    which turn ? 
    if player {
      checkIfArenaIscleared()
      atk()
      checkIfArenaIscleared()
      atk()
      setTurn(1)
      
    }
    else{
      checkIfArenaIscleared()
      atk()
      checkIfArenaIscleared()
      atk()
      setTurn(0)
    }

  }
 */
  
  // // funtion atk

  const [aiChoice, setAIChoice] = useState("");
  const [playerChoice, setPlayerChoice]= useState("")

  const handleAiChoice = () => {
    const options = ["attackOne", "attackTwo", "attackThree", "attackFour"];
    setAIChoice(options[Math.floor(Math.random() * options.length)]);
  };

  const handlePlayerChoice = (event) => {
    const option = event.taget.value
    setPlayerChoice(option)

  } // from button click handlefonction
  const attack = (({attacker, receiver},option)=> {
    const option = playerChoice  // attackOne, attackTwoc, ...
    const damage = attacker.pokemonAttacks[option].damage
    receiver.health -= damage
  };






  /*     console.log(
    playerTeam[0].sprites.versions["generation-v"]["black-white"].animated
      .back_default
  ); */


  const [battleTeam, setBattleTeam] = useState({
    pokemon1: {
      pokemonImg: playerTeam[0].sprites.back_default,
      pokemonName: playerTeam[0].name,
      pokemonLevel: 100,
      pokemonHP: 300,
      pokemonType: playerTeam[0].types[0].type.name,
      pokemonAttacks: {
        attackOne: {
          name: playerTeam[0].moves[getRandomInt(playerTeam[0].moves.length)]
            .move.name,
          damage: playerTeam[0].stats[3].base_stat,
          type: "",
        },
        attackTwo: {
          name: playerTeam[0].moves[getRandomInt(playerTeam[0].moves.length)]
            .move.name,
          damage: 300,
          type: "",
        },
        attackThree: {
          name: playerTeam[0].moves[getRandomInt(playerTeam[0].moves.length)]
            .move.name,
          damage: playerTeam[0].stats[1].base_stat,
          type: "",
        },
        attackFour: {
          name: playerTeam[0].moves[getRandomInt(playerTeam[0].moves.length)]
            .move.name,
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
          name: playerTeam[1].moves[getRandomInt(playerTeam[1].moves.length)]
            .move.name,
          damage: playerTeam[1].stats[3].base_stat,
          type: "",
        },
        attackTwo: {
          name: playerTeam[1].moves[getRandomInt(playerTeam[1].moves.length)]
            .move.name,
          damage: playerTeam[1].stats[2].base_stat,
          type: "",
        },
        attackThree: {
          name: playerTeam[1].moves[getRandomInt(playerTeam[1].moves.length)]
            .move.name,
          damage: playerTeam[1].stats[1].base_stat,
          type: "",
        },
        attackFour: {
          name: playerTeam[1].moves[getRandomInt(playerTeam[1].moves.length)]
            .move.name,
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
          name: playerTeam[2].moves[getRandomInt(playerTeam[2].moves.length)]
            .move.name,
          damage: playerTeam[2].stats[3].base_stat,
          type: "",
        },
        attackTwo: {
          name: playerTeam[2].moves[getRandomInt(playerTeam[2].moves.length)]
            .move.name,
          damage: playerTeam[2].stats[2].base_stat,
          type: "",
        },
        attackThree: {
          name: playerTeam[2].moves[getRandomInt(playerTeam[2].moves.length)]
            .move.name,
          damage: playerTeam[2].stats[1].base_stat,
          type: "",
        },
        attackFour: {
          name: playerTeam[2].moves[getRandomInt(playerTeam[2].moves.length)]
            .move.name,
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
          name: playerTeam[3].moves[getRandomInt(playerTeam[3].moves.length)]
            .move.name,
          damage: playerTeam[3].stats[3].base_stat,
          type: "",
        },
        attackTwo: {
          name: playerTeam[3].moves[getRandomInt(playerTeam[3].moves.length)]
            .move.name,
          damage: playerTeam[3].stats[2].base_stat,
          type: "",
        },
        attackThree: {
          name: playerTeam[3].moves[getRandomInt(playerTeam[3].moves.length)]
            .move.name,
          damage: playerTeam[3].stats[1].base_stat,
          type: "",
        },
        attackFour: {
          name: playerTeam[3].moves[getRandomInt(playerTeam[3].moves.length)]
            .move.name,
          damage: playerTeam[3].stats[4].base_stat,
          type: "",
        },
      },
    },
  });

  // console.log(playerTeam);
  // console.log(battleTeam);
  // console.log("testyplayer", playerTeam[0].stats[3].base_stat);
  // console.log("testy", battleTeam.pokemon1.pokemonAttacks.attackOne.name);
  // console.log("testy2", battleTeam.pokemon1.pokemonAttacks.attackOne.damage);

  console.log(aiteam);

  // if pokemon is dead

  // if no more pokemon to fight

  return (
    <div className="brockpage">
      <div className="brockarenaframe">
        <img
          className="player1pokemon"
          src={battleTeam.pokemon1.pokemonImg}
          alt=""
        />
        <h1 className="battlefont">{battleTeam.pokemon1.pokemonName}</h1>

        <h1 className="battlefont">
          {" "}
          {battleTeam.pokemon1.pokemonAttacks.attackOne.name}{" "}
        </h1>
      </div>
    </div>
  );
};

export default BattleBrock;
