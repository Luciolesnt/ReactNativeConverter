import React, { createContext, useState, useEffect } from "react";
import { api } from "./api";

export const ConversionContext = createContext();

const DEFAULT_BASE_CURRENCY = 'USD';
const DEFAULT_QUOTE_CURRENCY = 'GBP';

export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, _setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);
  const [quoteCurrency, setQuoteCurrency] = useState(DEFAULT_QUOTE_CURRENCY);
  const [date, setDate] = useState();
  const [rates, setRates] = useState({});

  const setBaseCurrency = (currency) => {
    return api(`/latest?base=${currency}`)
      .then((response) => {
        console.log(response);
        _setBaseCurrency(currency);
        setDate(response.date);
        setRates(response.rates)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    setBaseCurrency,
    setQuoteCurrency,
    date,
    rates,
  };

  useEffect(() => {
    setBaseCurrency(DEFAULT_BASE_CURRENCY);
    setQuoteCurrency(DEFAULT_QUOTE_CURRENCY);
  }, [])

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
