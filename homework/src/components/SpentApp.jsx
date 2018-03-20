var React = require('react');
var createReactClass = require('create-react-class');
var Grid = require('./grid.jsx');

var SmartGrid = createReactClass({
	render: function() {
        return (
		<div>
            <Grid className="notes-app">
                
            </Grid>
		</div>
        );
    }
});

module.exports = SmartGrid;
