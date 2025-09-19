import logoSvg from "../assets/logo.svg";
import logoutSvg from "../assets/logout.svg";

export function Header() {
  return (
    <header className="w-full flex justify-between">
      <img src={logoSvg} alt="logo" className="my-8" />

      <div className="flex items-center gap-3 justify-around">
        <span className="text-sm font-semibold text-gray-200">
          Hello, User!
        </span>
        <img
          src={logoutSvg}
          alt="Logout icon"
          className="my-8 cursor-pointer hover:opacity-75 transition ease-linear"
        />
      </div>
    </header>
  );
}
