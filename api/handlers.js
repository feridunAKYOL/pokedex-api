const pokedex = require('../data/pokedex.json');
const logic = require('../logic');

const handlers = {
	home: (req, res) => {
		res.send('PokeDex API!');
	},
	all: (req, res) => {
		res.json(pokedex);
	},

	valuesForKey: async (req, res) => {
		// cast the user input to the correct type
		// according to the pokemon schema: ./data/schemas/pokemon.json
		const my_key = req.params.key;

		// use the logic you wrote to process the pokedex data
		try {
			const result = logic.valuesForKey(pokedex, my_key);
			console.log(2, result);

			// respond with the return value if there was no error
			res.json(result);
		} catch (err) {
			// respond with 500 if there was an error
			res.status(500).send(`${err.name}: ${err.message}`);
		}
	},
	evolutionsOf: async (res, req) => {},
	typeStats: async (res, req) => {},

	findById: async (req, res) => {
		// cast the user input to the correct type
		// according to the pokemon schema: ./data/schemas/pokemon.json
		const ide = req.params.id;
		console.log(ide);

		// use the logic you wrote to process the pokedex data
		try {
			const result = logic.findBy.id(pokedex, ide);
			console.log(2, result);

			// respond with the return value if there was no error
			res.json(result);
		} catch (err) {
			// respond with 500 if there was an error
			res.status(500).send(`${err.name}: ${err.message}`);
		}
	},

	findByType: async (res, req) => {
		async (req, res) => {
			// cast the user input to the correct type
			// according to the pokemon schema: ./data/schemas/pokemon.json
			const name = req.params.type;
			console.log(ide);

			// use the logic you wrote to process the pokedex data
			try {
				const result = logic.findBy.type(pokedex, name);
				console.log(2, result);

				// respond with the return value if there was no error
				res.json(result);
			} catch (err) {
				// respond with 500 if there was an error
				res.status(500).send(`${err.name}: ${err.message}`);
			}
		};
	},
	findByWeakness: async (res, req) => {
		async (req, res) => {
			// cast the user input to the correct type
			// according to the pokemon schema: ./data/schemas/pokemon.json
			const type = req.params.type;
			console.log(ide);

			// use the logic you wrote to process the pokedex data
			try {
				const result = logic.findBy.weakness(pokedex, type);
				console.log(2, result);

				// respond with the return value if there was no error
				res.json(result);
			} catch (err) {
				// respond with 500 if there was an error
				res.status(500).send(`${err.name}: ${err.message}`);
			}
		};
	},

	findByValue: async (res, req) => {
		async (req, res) => {
			// cast the user input to the correct type
			// according to the pokemon schema: ./data/schemas/pokemon.json
			const value = req.params.value;
			console.log(ide);

			// use the logic you wrote to process the pokedex data
			try {
				const result = logic.findBy.value(pokedex, value);
				console.log(2, result);

				// respond with the return value if there was no error
				res.json(result);
			} catch (err) {
				// respond with 500 if there was an error
				res.status(500).send(`${err.name}: ${err.message}`);
			}
		};
	},
	findByKeyValue: async (res, req) => {
		async (req, res) => {
			// cast the user input to the correct type
			// according to the pokemon schema: ./data/schemas/pokemon.json
			const keyValue = req.params.keyValue;
			console.log(ide);

			// use the logic you wrote to process the pokedex data
			try {
				const result = logic.findBy.keyValue(pokedex, keyValue);
				console.log(2, result);

				// respond with the return value if there was no error
				res.json(result);
			} catch (err) {
				// respond with 500 if there was an error
				res.status(500).send(`${err.name}: ${err.message}`);
			}
		};
	}
};

module.exports = handlers;
