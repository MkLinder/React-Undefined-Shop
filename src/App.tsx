import { Provider } from 'react-redux';
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/ProductsList';
import { GlobalStyles } from './styles/globalStyles';
import { store } from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      
      <Header />
      <ProductsList />
    </Provider>
  )
}

export default App;
