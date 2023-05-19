import { WeatherItem } from './WeatherItem';
import { WeatherListContainer } from './Weather.styled';
import { v4 as uuidv4 } from 'uuid';

export const WeatherList = ({ data }) => {
  const uniqueId = uuidv4();

  return (
    <main>
      <WeatherListContainer>
        {data?.map(item => (
          <WeatherItem key={uniqueId} value={item}></WeatherItem>
        ))}
      </WeatherListContainer>
    </main>
  );
};
