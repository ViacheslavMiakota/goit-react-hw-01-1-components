import Profile from 'components/Profile/Profile.jsx';
import Statistics from 'components/Statistics/Statistics.jsx';
import FriendList from 'components/FriendList/FriendList.jsx';
import TransactionHistory from 'components/History/TransactionHistory.jsx';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import { Container } from './App.styled';

const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory />
    </Container>
  );
};
export default App;
