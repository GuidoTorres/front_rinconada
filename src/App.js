import "./App.scss";
import { AdminProvider } from "./context/AdminContext";
import Layout from "./pages/Layout";

function App() {
  return (
    <AdminProvider>
      <div className="App">
        <Layout/>
      </div>
    </AdminProvider>
  );
}

export default App;
