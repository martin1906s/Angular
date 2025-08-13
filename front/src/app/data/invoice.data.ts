import { Invoicemodel } from '../model/Invoice';

export const invoiceData: Invoicemodel = {
  id: '1',
  company: {
    ruc: '123123123',
    name: 'Example Company',
    address: {
      city: 'Milagro',
      principalStreet: ' Av. Principal',
      secondaryStreet: ' Av. Secundaria',
      code: '123456',
    },
  },
  customer: {
    id: '123123',
    name: 'John',
    surname: 'Doe',
    address: {
      city: 'Milagro',
      principalStreet: ' Av. Principal',
      secondaryStreet: ' Av. Secundaria',
      code: '123456',
    },
  },
  items: [
    {
      id: 1,
      product: {
        id: 1,
        name: 'Laptop ASUS',
        price: 100,
        description: 'Laptop ASUS 15.6" FHD',
        category: {
          id: 1,
          name: 'Electronics',
        },
      },
      quantity: 2,
    },
    {
      id: 2,
      product: {
        id: 2,
        name: 'Smartphone Samsung',
        price: 200,
        description: 'Smartphone Samsung Galaxy S21',
        category: {
          id: 1,
          name: 'Electronics',
        },
      },
      quantity: 1,
    },
  ],
};
