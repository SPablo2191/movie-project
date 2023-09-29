import { MenuItem } from 'primereact/menuitem';
import { UiNavbar } from '../ui/ui-navbar/ui.navbar';

export function MovieNavbar() {
  const items: MenuItem[] = [
    {
      label: 'Peliculas',
      icon: 'bi bi-camera-reels-fill',
    },
  ];
  return <UiNavbar model={items} />;
}
