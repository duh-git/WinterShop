import Delivery from './Header__delivery/Delivery';
import Main from './Header__main/Main';
import Category from './Header__category/Category';

export default function Header() {
  return (
    <header>
      <Delivery />
      <Main />
      <Category />
    </header>
  );
}