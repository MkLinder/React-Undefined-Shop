import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/ProductsList';
import { GlobalStyles } from './styles/globalStyles';


function App() {
  return (
    <>
      <GlobalStyles />
      
      <Header />
      <ProductsList />
    </>
  )
}

export default App;
