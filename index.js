const axios = require("axios");
const { Client } = require("@notionhq/client");
const dotenv = require("dotenv");

dotenv.config();
const notion = new Client({ auth: process.env.NOTION_KEY });

const pokeArray = [];

async function getPokemon() {
	for(let i=1; i<=10; i++){
		await axios
    .get("https://pokeapi.co/api/v2/pokemon/" + i + "/")
    .then((poke) => {
      const pokeData = {
        name: poke.data.name,
        number: poke.data.id,
        hp: poke.data.stats[0].base_stat,
        attack: poke.data.stats[1].base_stat,
        defense: poke.data.stats[2].base_stat,
        "special-attack": poke.data.stats[3].base_stat,
        "special-defense": poke.data.stats[4].base_stat,
        speed: poke.data.stats[5].base_stat,
      };
      pokeArray.push(pokeData);
    })
    .catch((error) => {
      console.log(error);
    });
	}
  
	createNotionPage();
}

getPokemon();

async function createNotionPage() {
  for (let poke of pokeArray) {
    const response = await notion.pages.create({
      "parent": {
        "type": "database_id",
        "database_id": process.env.NOTION_DATABASE_ID,
      },
      "properties": {
        "Name": {
          "title": [
            {
              "type": "text",
              "text": {
                "content": poke.name,
              },
            },
          ],
        },
        "No": {
          "number": poke.number,
        },
        "HP": {
          "number": poke.hp,
        },
				"Attack": {
					"number": poke.attack,
				},
				"Defense": {
					"number": poke.defense,
				},
				"Sp. Attack": {
					"number": poke["special-attack"],
				},
				"Sp. Defense": {
					"number": poke["special-defense"],
				},
				"Speed": {
					"number": poke.speed,
				},
      },
    });
		console.log(response);
  }
}

// https://www.youtube.com/watch?v=ec5m6t77eYM - 59:22 / 2:07:34

