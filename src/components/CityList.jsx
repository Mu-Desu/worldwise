import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

//eslint-disable-next-line react/prop-types
function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  //eslint-disable-next-line react/prop-types
  if (!cities.length)
    return <Message message="Add your first city by the map" />;

  return (
    <div>
      <ul className={styles.cityList}>
        {/* eslint-disable-next-line react/prop-types */}
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    </div>
  );
}

export default CityList;
