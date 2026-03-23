import WindowWrapper from "@hoc/WindowWrapper";
import { socials } from "@constants";
import { WindowControls } from "@components";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contactame</h2>
      </div>

      <div className="p-5 space-y-5">
        <img src="/images/gael.jpeg" alt="gael" className="w-20 rounded-full" />
        <h3>Hablemos</h3>
        <a
          href="mailto:ledesgael0@gmail.com"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition w-fit"
        >
          <Mail size={16} />
          ledesgael0@gmail.com
        </a>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
