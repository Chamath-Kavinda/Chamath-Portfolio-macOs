import { Navbar, Welcome } from "#components"

/**
 * Root application component that renders the main layout containing the navigation bar and welcome section.
 * @returns {JSX.Element} The JSX element representing the application's main content with <Navbar/> and <Welcome/> inside a <main> element.
 */
function App() {
  return (
    <main>
      <Navbar/>
      <Welcome/>
    </main>
  )
}

export default App