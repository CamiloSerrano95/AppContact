import 'isomorphic-fetch'
require('es6-promise').polyfill()
const url = 'https://md-contact.now.sh'

export default class ContactService {
    constructor(domain) {
        this.domain = `${url}/${domain}`
    }

    getAll() {
        return this.call(this.domain, 'GET')
               .then(res => Promise.resolve(res))
    }

    single(id) {
        return this.call(`${this.domain}/${id}`, 'GET')
               .then(res => Promise.resolve(res))
    }

    save(data){
        return this.call(this.domain, 'POST', {'Accept': 'application/json'}, data)
               .then(res => Promise.resolve(res))
    }

    update(id, data) {
        console.log(data);
        return this.call(`${this.domain}/${id}`, 'PUT', {'content-type': 'application/json'}, data)
               .then(res => Promise.resolve(res))
    }

    call(api, type, options, data) {
        let init = {
            method: type,
            headers: options,
            body: JSON.stringify(data)
        }
        
        let request = new Request(api, init)

        return new Promise((resolve, reject) => {
            fetch(request)
                .then(res => res.json())
                .then(response => resolve(response))
                .catch(error => reject(error))  
        })
    }
}