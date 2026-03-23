import {
  Terminal,
  Safari,
  Resume,
  Finder,
  Text,
  ImageV,
  Contact,
} from "@windows";
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
      <Contact />
    </main>
  );
}

export default App;
