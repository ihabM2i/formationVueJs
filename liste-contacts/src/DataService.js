export let contacts = []

export const addContactPromise = (contact) => {
    return new Promise((resolve, reject) => {
        contact.id =
            contacts.length > 0
                ? contacts[contacts.length - 1].id + 1
                : 1;
        contacts.push(contact)
        resolve()
    })
}

export const deleteContactPromise = (id) => {
    return new Promise((resolve, reject) => {
        contacts = contacts.filter((x)=>x.id != id)
        resolve()
    })
}