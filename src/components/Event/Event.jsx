import PropTypes from 'prop-types';
import { StatsList, Item, Label, Percentage } from './Event.styled';

const StatisticEvent = ({ events }) => {
  console.log(events);
  return (
    <StatsList>
      {events.map(({ id, label, percentage }) => (
        <Item style={{ backgroundColor: getRandomHexColor() }} key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Item>
      ))}
    </StatsList>
  );
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export default StatisticEvent;
StatisticEvent.prototype = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
