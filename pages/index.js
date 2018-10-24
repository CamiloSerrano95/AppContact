import ContactProvider,{ContactContext} from '../utils/ContactProvider'

export default () => (
    <ContactProvider>
        <ContactContext.Consumer>
            {({contacts, save, message}) => (
                <div>
                    <div>
                        {contacts.map((contact, i) => (
                            <p key={i}>{contact.name}</p>
                        ))}
                    </div>
                    <div>
                        <form onSubmit={save} method='POST'>
                            <input name="name" placeholder="Nombres"/>
                            <input name="lastName" placeholder="Apellidos"/>
                            <input name="email" placeholder="Correo Electronico"/>
                            <input name="telephone" placeholder="Telefono celular"/>
                            <button>Enviar</button>
                        </form>
                    </div>
                    <div>
                        <p>
                            {message}
                        </p>
                    </div>
                </div>
            )}
        </ContactContext.Consumer>
    </ContactProvider>
)