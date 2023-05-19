import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { WeatherList } from 'components/Weather/WeatherList';
import {
  WeatherTitle,
  SearchContainer,
  SearchInput,
  SearchButton,
  WeatherCountryandCityTitle,
} from 'components/Weather/Weather.styled';
import { getWeather } from 'api';

export const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = event => {
    setSearchValue(event.target.value);
  };

  const handleResetClick = () => {
    setSearchValue('');
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      const response = await getWeather(searchValue);
      setWeatherData(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <WeatherTitle>Weather forecast</WeatherTitle>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Enter a city"
          value={searchValue}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
        <SearchButton onClick={fetchData}>Search</SearchButton>
        <SearchButton onClick={handleResetClick}>Reset</SearchButton>
      </SearchContainer>
      <WeatherCountryandCityTitle>
        Country: {weatherData.country}, City: {weatherData.city}
      </WeatherCountryandCityTitle>

      <WeatherList
        key={weatherData.city}
        data={weatherData.weatherData}
      ></WeatherList>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
