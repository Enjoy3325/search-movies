import { Header } from 'components/Header/Header';
// import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { StyledLink } from '../../App/App.styled';
export function SharedLayout() {
  return (
    <>
      <Header></Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
