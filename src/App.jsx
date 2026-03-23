import { Terminal, Safari, Resume, Finder, Text, ImageV } from "@windows";
import { Navbar, Welcome, Dock } from "./components";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageV />
    </main>
  );
}

export default App;
