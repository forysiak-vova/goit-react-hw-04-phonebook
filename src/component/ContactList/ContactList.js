import ContactItem from '../ContactItem'
import PropTypes from 'prop-types';
import {List} from './ContactList.styles'

function ContactList({contacts,onDeleteContact}) {
   return (
      <List>
            {contacts.map(({ id, name, number }) =>
            <ContactItem
               key={id}
               id={id}
               name={name}
               number={number}
               onDeleteContact={onDeleteContact}
               
            />
           )} 
      </List>
   )
}

ContactList.propTypes = {
   contacts: PropTypes.arrayOf(
      PropTypes.shape({
           id: PropTypes.string.isRequired,
           name: PropTypes.string.isRequired,
           number: PropTypes.string.isRequired,
      })
   ),
   onDeleteContact: PropTypes.func.isRequired,

}

export default ContactList;