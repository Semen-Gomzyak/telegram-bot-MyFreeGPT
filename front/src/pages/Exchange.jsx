import { Container } from 'components/Container/ContainerPage.styled';
import { getExchange } from 'api';
import { ExchangeList } from 'components/Exchange/ExchangeList';
import { useEffect, useState } from 'react';
import { ChooseCurrentlyExchange } from 'components/Exchange/ChooseCurrentlyExchange';
import {
  CombinedText,
  CombinedSectionTitle,
  CombinedTextWrapper,
} from 'components/Combined/Combined';

export const Exchange = () => {
  const [currency, setCurrency] = useState('USD');
  const [operationType, setOperationType] = useState('buy');
  const [amount, setAmount] = useState(0);
  const [exchangeData, setExchangeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getExchange();
        setExchangeData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleCurrencyChange = event => {
    setCurrency(event.target.value);
  };

  const handleOperationTypeChange = event => {
    setOperationType(event.target.value);
  };

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  const findExchangeRate = (from, to) => {
    const result = exchangeData.find(
      value => value.ccy === from || value.ccy === to
    );
    return result;
  };

  const calculateAmount = () => {
    if (exchangeData.length > 0) {
      const exchangeRate =
        operationType === 'buy'
          ? findExchangeRate(currency).buy
          : findExchangeRate(currency).sale;
      const amountInUAH = amount * exchangeRate;
      return amountInUAH.toFixed(2);
    }
  };

  return (
    <main>
      <Container>
        <CombinedTextWrapper>
          <CombinedSectionTitle>Currency Exchange</CombinedSectionTitle>
          <CombinedText>
            Here you can see the current exchange rate in relation to the
            hryvnia (UAH)
          </CombinedText>
        </CombinedTextWrapper>
        <ChooseCurrentlyExchange
          exchangeData={exchangeData}
          operationType={operationType}
          handleOperationTypeChange={handleOperationTypeChange}
          currency={currency}
          handleCurrencyChange={handleCurrencyChange}
          amount={amount}
          handleAmountChange={handleAmountChange}
          calculateAmount={calculateAmount}
        />
        <ExchangeList exchangeData={exchangeData} />
      </Container>
    </main>
  );
};
