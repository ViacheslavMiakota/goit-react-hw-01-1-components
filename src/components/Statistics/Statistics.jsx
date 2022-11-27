import PropTypes from 'prop-types';
import StatisticEvent from 'components/Event/Event.jsx';
import { StatisticSection, Title } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title ? <Title>{title}</Title> : false}
      <StatisticEvent events={stats} />
    </StatisticSection>
  );
};
export default Statistics;
Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.string.isRequired,
};
