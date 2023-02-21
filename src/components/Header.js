import { Nav } from "./Nav.js";

export function Header() {
  return (
    <header className="mb-5 mt-3">
      <img
        alt="Logo"
        className="inline mb-5"
        width="100"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png"
      />

      <Nav />
    </header>
  );
}
