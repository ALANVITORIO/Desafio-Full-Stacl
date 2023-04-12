import React from 'react';
import Input from './Input';
import useForm from '../hooks/UseForm';

const AddressInput = ({ onNewAddress }) => {
  const cep = useForm('postalCode');
  const street = useForm();
  const city = useForm();
  const state = useForm();
  const country = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      cep.validate() &&
      street.validate() &&
      city.validate() &&
      state.validate() &&
      country.validate()
    ) {
      const addressData = {
        postal_code: cep.value,
        street: street.value,
        city: city.value,
        state: state.value,
        country: country.value,
      };
      console.log(
        'Dados do endereço a serem enviados:',
        JSON.stringify(addressData),
      );

      // Substitua esta URL pela URL do seu servidor que salva os endereços no banco de dados
      const response = await fetch('http://localhost:3001/addresses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addressData),
      });

      if (response.ok) {
        console.log('Endereço inserido com sucesso');
        onNewAddress(addressData);
      } else {
        console.log('Erro ao enviar o endereço');
      }
    } else {
      console.log('Não enviou');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          id="cep"
          label="Postal Code"
          type="text"
          placeholder="00000-000"
          {...cep}
        />
        <Input
          id="street"
          label="Street"
          type="text"
          placeholder="Rua do JavaScript"
          {...street}
        />
        <Input
          id="city"
          label="Cidade"
          type="text"
          placeholder="São Paulo"
          {...city}
        />
        <Input
          id="state"
          label="Estado"
          type="text"
          placeholder="São Paulo"
          {...state}
        />
        <Input
          id="country"
          label="País"
          type="text"
          placeholder="Brasil"
          {...country}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default AddressInput;
