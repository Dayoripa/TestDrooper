import { Header } from './components/header/Header';
import {Movies} from './components/Movie/Movies';
import { SearchTitle } from './components/SearchTitle';


export const App = () => {
  return (
    <div className="App">
      <Header title="Movies Adwars" />
      <SearchTitle />
      <Movies />
    </div>
  );
}