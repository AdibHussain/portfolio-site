import Head from "next/head";
import Particles from "react-particles-js";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Nav from "../components/Nav";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    line_linked: {
      enable: true,
      color: {
        value: "#0FD512",
      },
      shadow: {
        enable: true,
        color: "#0FD512",
        blur: 5,
      },
    },
  },
};

function App() {
  return (
    <div className="App">
      <Head>
        <title>pro-coder</title>
        <meta name="keywords" content="build website" />
      </Head>
      <Particles className="particles" params={particlesOptions} />
      <About />
      <Nav />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
