import { Provider } from 'react-redux';
import { store } from './main/redux/store';
import { Main } from './main/Main';

import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
