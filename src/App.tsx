import { Header } from './components/header/Header';
import {Movies} from './components/Movie/Movies';
import { SearchTitle } from './components/SearchTitle';


export const App = () => {
  return (
    <div>
      <Header title="Movies Adwars" />
      <div className="container">
        <SearchTitle />
        <Movies />
      </div>
    </div>
  );
}