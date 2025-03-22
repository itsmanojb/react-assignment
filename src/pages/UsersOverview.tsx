import { useUIContext } from '../contexts/UIContext';

export default function UsersOverview() {
  const { showInfoPanel } = useUIContext();
  return (
    <div>
      Dashboard page{' '}
      <button type="button" onClick={() => showInfoPanel(true)}>
        Show
      </button>{' '}
    </div>
  );
}
