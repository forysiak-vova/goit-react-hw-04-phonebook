import PropTypes from 'prop-types';
import {ContactName,Item,Button} from './ContactItem.styles'

function ContactItem({id, name, number,onDeleteContact}) { 
   return (
      <Item>
               <ContactName> {name}</ContactName>
               <p>( {number} )</p>
              <Button onClick={()=>onDeleteContact(id)}>delete</Button>
      </Item>
)
}
ContactItem.propTypes = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
   onDeleteContact: PropTypes.func.isRequired


   
}
export default ContactItem;