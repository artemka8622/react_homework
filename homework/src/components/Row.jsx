var React = require('react');
var createReactClass = require('create-react-class');
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
var Type = require('./Type');

var Row = createReactClass({	
	onChangeType: function(type){
		this.props.row.type = type;		
	},
	
	render: function() {
        return (
            <TableRow >     
				<TableRowColumn>{this.props.row.name}</TableRowColumn>
				<TableRowColumn>
				<Type onChange={this.onChangeType} row={this.props.row}>
				</Type>				
				</TableRowColumn>
				<TableRowColumn>{this.props.row.sum}</TableRowColumn>
            </TableRow>
        );
    }
});

module.exports = Row;
