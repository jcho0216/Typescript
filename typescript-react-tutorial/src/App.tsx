import * as React from 'react';
import Profile from './components/Profile';

class App extends React.Component {
  render () {
    return (
      <div>
        <Profile 
        name="벨로퍼트"
        job="코드사랑꾼"
        />
      </div>
    );
  }
}

export default App;