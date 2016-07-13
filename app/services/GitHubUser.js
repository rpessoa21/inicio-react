var axios = require('axios');

var GitHubUser = {
	// PRIMEIRO METODO RESGATANDO O USERNAME
	getByUsername: function(username) {
		return axios.get('https://api.github.com/users/' + username);
	},

	// SEGUNDO METODO RESGATANDO O REPOSITORIO
	getReposByUsername: function(username) {
		return axios.get('https://api.github.com/users/' + username + '/repos');
	}
};

module.exports = GitHubUser;