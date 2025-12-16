import { techStack } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import { Flag } from "lucide-react";
import { Check } from "lucide-react";
import { WindowControls } from "@components";

function Terminal() {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Stack Tecnologico</h2>
      </div>
      <div className="techstack">
        <p>
          <span className="font-bold">@Gael % </span>
          show stack tecnologico
        </p>
        <div className="label">
          <p className="w-32">Categoria</p>
          <p>Tecnologia</p>
        </div>
        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center">
              <Check className="check" size={20} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item}
                    {i < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="footnote">
          <p>
            <Check size={20} /> 5 de 5 stacks cargados satisfactoriamente (100%)
          </p>

          <p className="text-black">
            <Flag size={15} fill="black" /> Tiempo de carga: 6ms
          </p>
        </div>
      </div>
    </>
  );
}
const TerminalWindow = WindowWrapper(Terminal, "terminal");

export { TerminalWindow as Terminal };
