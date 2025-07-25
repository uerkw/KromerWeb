import Logo from "./Logo";
import ActionButtons from "./ActionButtons";
import SearchBox from "./SearchBox";
import SettingsButton from "./SettingsButton";
import StatusIndicator from "./StatusIndicator";

export default function Header() {
  return (
    <header className="navbar bg-base-200 border-b border-base-300">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="drawer-toggle"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="navbar-start">
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ActionButtons />
      </div>
      <div className="navbar-end">
        <SearchBox />
        <SettingsButton />
        <StatusIndicator />
      </div>
    </header>
  );
}
