const userRoot = 'users';

export const routesV1 = {
  version: 'v1',
  auth: {
    login: 'login',
  },
  users: {
    createUser: `${userRoot}/create`,
    findContacts: `${userRoot}/:userId/contacts`,
    createContact: `${userRoot}/:userId/contacts/create`,
    updateContact: `${userRoot}/:userId/contacts/update`,
    deleteContact: `${userRoot}/:userId/contacts/:contactId/delete`,
  },
};
