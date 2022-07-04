const apiContinentsUrl = 'https://disease.sh/v3/covid-19/continents';
const apiCountriesUrl = 'https://disease.sh/v3/covid-19/contries';

const fetchAllContinents = async () => {
  const response = await fetch(apiContinentsUrl).then((data) => data.json());
  return response;
};

const fetchAllCountries = async () => {
  const response = await fetch(apiCountriesUrl).then((data) => data.json());
  return response;
};

export default { fetchAllContinents, fetchAllCountries };
