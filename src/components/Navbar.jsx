import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{width: "280px"}}
    >
      {" "}
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        {" "}
        <svg class="bi pe-none me-2" width="40" height="32" aria-hidden="true">
          <use xlink:href="#bootstrap"></use>
        </svg>{" "}
        <span class="fs-4">Expense Maneger</span>{" "}
      </a>{" "}
      <hr />{" "}
      <ul class="nav nav-pills flex-column mb-auto">
        {" "}
        <li class="nav-item">
          {" "}
          <Link to="/" href="#" class="nav-link text-white">
            {" "}
            <svg
              class="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlink:href="#home"></use>
            </svg>
            Dashboard
          </Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link to="/add-transaction" href="#" class="nav-link text-white">
            {" "}
            <svg
              class="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlink:href="#speedometer2"></use>
            </svg>
            Add Transaction
          </Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link to="/transaction-list" href="#" class="nav-link text-white">
            {" "}
            <svg
              class="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlink:href="#table"></use>
            </svg>
            Transaction List
          </Link>{" "}
        </li>{" "}
        
      </ul>{" "}
      <hr />{" "}
      
    </div>
  );
};
export default Navbar;
