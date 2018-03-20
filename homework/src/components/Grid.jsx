var React = require('react');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
var createReactClass = require('create-react-class');
var Row = require('./Row.jsx');
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn
} from 'material-ui/Table';

var Grid = createReactClass({
	getInitialState: function() {
		return { rows : [{
			name : 'test',
			type : 1,
			sum : 52
		},
		{
			name : 'test3',
			type : 2,
			sum : 53
		},
		{
			name : 'test4',
			type : 2,
			sum : 54
		}]}
	},
	
	render: function() {
		const style = {
			marginRight: 20,
		};
		
        return (
		<MuiThemeProvider>
		<FloatingActionButton mini={true} style={style} onClick={this.AddRow}>
			<ContentAdd />
		</FloatingActionButton>
            <Table > 			
				<TableHeader>
					<TableHeaderColumn>Номер</TableHeaderColumn>
					<TableHeaderColumn>Наименование</TableHeaderColumn>
					<TableHeaderColumn>Сумма</TableHeaderColumn>
				</TableHeader>            
				<TableBody>
				{  
					this.state.rows.map(function(row){
						return (
							<Row row={row}></Row>
						);
					})
				}
				</TableBody>
			</Table>					
		</MuiThemeProvider>
        );
    }
});

module.exports = Grid;
