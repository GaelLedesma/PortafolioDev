import {
  Safari,
  Resume,
  Finder,
  Text,
  ImageV,
  Contact,
  TerminalV,
} from "@windows";
import { Navbar, Welcome, Dock, Home } from "./components";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <TerminalV />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageV />
      <Contact />
      <Home />
    </main>
  );
}

export default App;
