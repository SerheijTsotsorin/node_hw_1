const fs = require("fs/promises");
const path = require("path");
const uuid = require('uuid');

/*
 * Раскомментируй и запиши значение
 */
const contactPath = path.join(__dirname, "db/contacts.json");
console.log('contactPath', contactPath);

// TODO: задокументировать каждую функцию
const listContacts = async () => {
  // ...твой код
  const data = await fs.readFile(contactPath, 'utf-8');
  const contacts = JSON.parse(data);
  return contacts;
};



const getContactById = async (id) => {
  // ...твой код
  const allContacts = await listContacts();
  const contact = allContacts.find(contact => contact.id === id);
  return contact ? contact : null;
};


const removeContact = async (id) => {
  // ...твой код
  const allContacts = await listContacts();
  const index = allContacts.findIndex(contact => contact.id === id);

  const deleteContact = allContacts[index];

  if (index !== -1) {
    allContacts.splice(index, 1);
    await fs.writeFile(contactPath, JSON.stringify(allContacts));
  }
 
  return deleteContact ? deleteContact : null;
};


const addContact = async(name, email, phone) => {
  // ...твой код
  const allContacts = await listContacts();
  const newContact = {
    id: uuid.v4(),
    name: name,
    email: email,
    phone: phone,
  };
  

  allContacts.push(newContact);

  await fs.writeFile(contactPath, JSON.stringify(allContacts))
  return newContact;
}


module.exports = {
  listContacts, getContactById, removeContact, addContact
};

