import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Bob" age="30" bio="Enjoys cooking and traveling" />
      <UserProfile name="Carol" age="22" bio="Passionate about art and music" />
    </div>
  );
}

export default App;

