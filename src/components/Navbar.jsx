import dayjs from "dayjs";
import "dayjs/locale/es";
dayjs.locale("es");

import { navIcons, navLinks } from "@constants";
import useWindowStore from "@store/window";
import useLocationStore from "@store/location";
import { locations } from "@constants";

function Navbar() {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Escritorio</p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              onClick={() => {
                openWindow(type);

                if (type === "finder") {
                  setActiveLocation(locations.work);
                }
              }}
            >
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
