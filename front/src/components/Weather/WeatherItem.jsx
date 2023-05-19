import moment from "moment";
import { CombinedImage, CombinedImagesWrapper, CombinedItem, CombinedText, CombinedTextWrapper } from "components/Combined/Combined";


export const WeatherItem = ({ value }) => {
    const formattedDate = moment(value.date).format('DD.MM');
    const formattedTime = moment(value.date).format('HH.mm')
    return (
      <CombinedItem>
        <CombinedImagesWrapper>
          <CombinedImage src={value.image} alt={value.main} />
        </CombinedImagesWrapper>
        <CombinedTextWrapper>
          <CombinedText>Date: {formattedDate}</CombinedText>
          <CombinedText>Time: {formattedTime}</CombinedText>
          <CombinedText>Weather: {value.main}</CombinedText>
          <CombinedText>Description: {value.description}</CombinedText>
          <CombinedText>Min-Temp: {value.min_temp}°C</CombinedText>
          <CombinedText>Max-Temp: {value.max_temp}°C</CombinedText>
          <CombinedText>Clouds: {value.clouds}%</CombinedText>
          <CombinedText>Wind-speed: {value.wind_speed} mph</CombinedText>
        </CombinedTextWrapper>
      </CombinedItem>
    );
}