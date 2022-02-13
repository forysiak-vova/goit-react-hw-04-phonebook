import PropTypes from 'prop-types';
import {Input,Label} from './Filter.styles'

const Filter = ({value,onChange}) => 
   (
      <Label>
        Find contacts by name:
         <Input
            type='text'
            value={value}
            onChange={onChange}
         />
</Label>
   )
     
Filter.propTypes = {
   value: PropTypes.string,
   onChange: PropTypes.func,
  }


export default  Filter;