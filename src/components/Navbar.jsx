import dayjs from "dayjs";
import "dayjs/locale/es";
dayjs.locale("es");

import { navIcons, navLinks } from "@constants";

function Navbar() {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Portafolio de Gael</p>
        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("dddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
}
export default Navbar;
