import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
// import { StyledLink } from '../../App/App.styled';
export function SharedLayout() {
  return (
    <>
      <Header></Header>

      <Outlet />
    </>
  );
}
