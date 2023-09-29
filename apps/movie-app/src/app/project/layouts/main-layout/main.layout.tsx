import { Outlet } from 'react-router-dom';
export function MainLayout() {
  return (
    <>
      <div className="mt-2">
        <Outlet />
      </div>
    </>
  );
}
