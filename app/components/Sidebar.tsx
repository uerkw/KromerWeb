export default function Sidebar() {
  return (
    <div className="drawer-side">
      <label
        htmlFor="drawer-toggle"
        aria-label="Close Sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 min-h-full w-60 p-4">
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </div>
  );
}
