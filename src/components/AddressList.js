// components/AddressList.js
import React from 'react';

const AddressList = ({ updateKey }) => {
  const [addresses, setAddresses] = React.useState([]);

  React.useEffect(() => {
    const fetchAddresses = async () => {
      const response = await fetch('http://localhost:3001/addresses');
      const data = await response.json();
      setAddresses(data.data);
    };

    fetchAddresses();
  }, [updateKey]);

  return (
    <ul>
      {addresses.map((address) => (
        <li key={address.id}>
          {address.street}, {address.city}, {address.state}, {address.country} -{' '}
          {address.postal_code}
        </li>
      ))}
    </ul>
  );
};

export default AddressList;
