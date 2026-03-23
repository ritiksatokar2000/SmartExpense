import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import TransactionListProvider from "./store/transaction-list-store";
function App() {
  return (
    <>
    <TransactionListProvider>
      <div className="app-container">
        <Navbar></Navbar>
        <div className="content">
          <Header></Header>
         <Outlet/>
          
        </div>
      </div>
      </TransactionListProvider>
    </>
  );
}

export default App;
