import {
  CombinedText,
  CombinedImage,
  CombinedItem,
  CombinedList,
  CombinedImagesWrapper,
  CombinedTextWrapper,
} from '../Combined/Combined';


const images = {};
function importAll(name) {
  name.keys().forEach(key => (images[key] = name(key)));
}

importAll(require.context('../../images/', false, /\.(png)$/));

export const ExchangeList = ({ exchangeData }) => {
  return (
    <CombinedList>
      {exchangeData?.map(value => (
        <CombinedItem key={value.ccy} value={value} image={value.ccy}>
          <CombinedImagesWrapper>
            <CombinedImage src={images[`./${value.ccy}.png`]} alt={value.ccy} />
          </CombinedImagesWrapper>
          <CombinedTextWrapper>
            <CombinedText>Сurrency: {value.ccy} </CombinedText>
            <CombinedText>Buy: {value.buy}</CombinedText>
            <CombinedText>Sale: {value.sale}</CombinedText>
          </CombinedTextWrapper>
        </CombinedItem>
      ))}
    </CombinedList>
  );
};
