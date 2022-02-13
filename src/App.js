import React, { Component } from 'react';
import Form from './component/Form';
import ContactList from './component/ContactList';
import Filter from './component/Filter'
import { nanoid } from 'nanoid';
import { Container } from './App.styles';

class App extends Component {
  state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
 filter: ''
}
  formSubmitHandler =({name,number}) => {
   
   
    const { contacts } = this.state;
   
    const ReturnName = contacts.find(contact => contact.name === name);

    if (ReturnName) {
      alert('This name is already in the phone book ');
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      console.log(contact);
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  
  }
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }
  getVisibleContacts = () => {
     const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      this.setState({contacts: parseContacts})
    }
  }
  

  render() {
    const { contacts, filter } = this.state;
    
    const visibleContacts = this.getVisibleContacts()
   
     return (
      
       <Container>
  <h1>Phonebook</h1>
  <Form onSubmit={this.formSubmitHandler}/>

  <h2>Contacts</h2>
         <Filter value={filter} onChange={this.changeFilter}/> 
         <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
</Container>
  )
  }
 
}

export default App;


