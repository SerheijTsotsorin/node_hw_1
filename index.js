const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

// console.log(argv);

const operations = require ('./contacts')

// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const data = await operations.listContacts();
      console.log('listContacts', data);
      break;

    case 'get':
      const contact = await operations.getContactById();
      console.log('getContactById', contact);
      break;

    case 'add':
      await operations.addContact(name, email, phone)
      break;

    case 'remove':
      await operations.removeContact();
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
