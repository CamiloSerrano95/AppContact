import {Component, createContext} from 'react'
import Router from 'next/router'
import ContactService from './Service'
const Contact = new ContactService('informationPerson')

export const ContactContext = new createContext({})

export default class ContactProvider extends Component {
    state = {
        contacts: [],
        message: null,
        success: false
    };

    componentDidMount() {
        Contact.getAll()
                .then(contacts  => this.setState({contacts}))
    }

    save(e) {
        e.preventDefault()
        let data = {
            name: e.target['name'].value,
            lastName: e.target['lastName'].value,
            email: e.target['email'].value,
            telephone: e.target['telephone'].value
        }
        
        Contact.save(data)
        .then(({message, success}) => {
            Contact.getAll()
            .then(contacts => this.setState({message, success, contacts}))
            
        })
        
    }

    render () {
        const {contacts, message, success} = this.state
        return <ContactContext.Provider value={{contacts, message, success, save:this.save.bind(this)}}>
            {this.props.children}
        </ContactContext.Provider>
    }

}


