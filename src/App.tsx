import Navbar from "./Navbar";
import Child from "./assets/child.jpg";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Building a React App with Vite</h1>
        <p>
          This React app was created following Mosh's tutorial on building React
          apps with Vite, which I found at{" "}
          <a
            href="https://www.youtube.com/watch?v=SqcY0GlETPk"
            className="App-link"
          >
            this link
          </a>
          . I installed Vite version 4.1.0 using Node.js and configured it to
          use TypeScript, a superset of JavaScript. The installation was done
          using <q>npm create vite@4.1.0</q>. Afterwards, I executed{" "}
          <q>npm i</q> to install required packages and ran <q>npm run dev</q>{" "}
          to test the website.
        </p>
        <p>
          Experimenting component-based development was an enjoyable part of
          this part, starting with the creation of my <q>Navbar.tsx</q>.
          Afterwards, the creation of the website content using HTML and CSS
          felt straightforward.
        </p>
        <p>
          While navigating through the development process, I encountered a few
          challenges, such as setting up the environment through the terminal
          and grasping the concepts of component-based programming. Overcoming
          these hurdles involved using documentation and various online
          resources. Fortunately, setting up React was a relatively smooth
          process with minimal issues.
        </p>
      </header>
      <center>
        <h2>Thank you, CPS530 😊</h2>
        <p>Here's a baby photo for those viewing this page:</p>
        <img src={Child} alt="Baby Photo" className="image-container"></img>
      </center>
    </div>
  );
}
