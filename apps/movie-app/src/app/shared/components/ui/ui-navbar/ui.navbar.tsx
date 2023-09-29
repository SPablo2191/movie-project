import { Toolbar, ToolbarProps } from 'primereact/toolbar';

export function UiNavbar(props: ToolbarProps) {
  return (
    <div className="card">
      <Toolbar {...props} />
    </div>
  );
}
