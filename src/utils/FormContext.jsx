import { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [information, setInformation] = useState({});

  const addToInfo = (info) => {
    setInformation((prevInformation) => ({ ...prevInformation, ...info }));
  };

  return (
    <FormContext.Provider value={{ information, addToInfo }}>
      {children}
    </FormContext.Provider>
  );
};
