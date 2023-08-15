import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

//eslint-disable-next-line react/prop-types
function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  //eslint-disable-next-line react/prop-types
  if (!cities.length)
    return <Message message="Add your first city by the map" />;

  //eslint-disable-next-line react/prop-types
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <div>
      <ul className={styles.countryList}>
        {/* eslint-disable-next-line react/prop-types */}
        {countries.map((country) => (
          <CountryItem country={country} key={country.id} />
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
