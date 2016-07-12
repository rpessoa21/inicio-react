// Importando
var React = require('react');
var SerachUser = require('./SearchUser');

var GitHub = React.createClass({
	render: function() {
		return (
			<div className="container">
				<SerachUser />
			</div>
		);
	}
});

module.exports = GitHub;