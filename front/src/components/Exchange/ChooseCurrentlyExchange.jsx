import {
  CombinedSelect,
  CombinedOption,
  CombinedSelectedWrapper,
  CombinedInput,
} from 'components/Combined/Combined';

export const ChooseCurrentlyExchange = ({
  exchangeData,
  operationType,
  handleOperationTypeChange,
  currency,
  handleCurrencyChange,
  amount,
  handleAmountChange,
  calculateAmount,
}) => {
  return (
    <CombinedSelectedWrapper>
      <CombinedSelect
        value={operationType}
        onChange={handleOperationTypeChange}
      >
        <CombinedOption value="buy">Buy</CombinedOption>
        <CombinedOption value="sale">Sale</CombinedOption>
      </CombinedSelect>
      <CombinedSelect value={currency} onChange={handleCurrencyChange}>
        {exchangeData?.map(value => (
          <CombinedOption key={value.ccy} value={value.ccy}>
            {value.ccy}
          </CombinedOption>
        ))}
      </CombinedSelect>
      <CombinedInput
        type="number"
        name={operationType}
        defaultValue={amount}
        onChange={handleAmountChange}
      />
      <CombinedInput type="number" defaultValue={calculateAmount()} readOnly />
    </CombinedSelectedWrapper>
  );
};
