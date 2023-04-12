import React from 'react';

const types = {
  postalCode: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'CEP inválido',
  },
  street: {
    regex: /^[a-zA-Z0-9\s]+$/,
    message: 'Rua inválida',
  },
  city: {
    regex: /^[a-zA-Z\s]+$/,
    message: 'Cidade inválida',
  },
  state: {
    regex: /^[a-zA-Z\s]+$/,
    message: 'Estado inválido',
  },
  country: {
    regex: /^[a-zA-Z\s]+$/,
    message: 'País inválido',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
