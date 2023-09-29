import { Outlet } from 'react-router-dom';
import { MovieNavbar } from '../../../shared/components/movie-navbar/movie.navbar';
export function MainLayout() {
  return (
    <>
      <MovieNavbar />
      <div className="mt-2">
        <Outlet />
      </div>
    </>
  );
}
