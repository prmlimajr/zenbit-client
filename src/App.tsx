import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Main } from './components/Main';
import { store } from './store';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <GlobalStyle />
      <Main />
    </Provider>
  );
}

export default App;
