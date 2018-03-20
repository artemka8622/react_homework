var React = require('react');
var createReactClass = require('create-react-class');
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

var Type = createReactClass({	
	
	render: function() {
        return (
            <SelectField 
				onChange={this.props.onChangeType}
				value={this.props.row.type}>     
				<MenuItem value={1} primaryText="Доход" />
				<MenuItem value={2} primaryText="Расход" />
            </SelectField>
        );
    }
});

module.exports = Type;
