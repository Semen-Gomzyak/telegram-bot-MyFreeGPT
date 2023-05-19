import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/ContainerPage.styled';
import { Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            {' '}
            Exchange{' '}
          </Link>
          <Link to="/Weather">Weather</Link>
          <Link to="/Products">Products</Link>
          <Link to="/Tasks">Tasks</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
