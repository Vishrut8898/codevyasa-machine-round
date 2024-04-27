import { useContext } from "react";

import "./index.scss";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TableFilters from "./components/TableFilters";
import ProductTable from "./components/ProductTable";
import Filters from "./components/Filters";

import { MyContext } from "./contextApi/MyContext";

const App = () => {
  const { openFilter } = useContext(MyContext);

  return (
    <>
      <Sidebar />
      <Header />
      <main className={openFilter ? "filter-active" : ""}>
        <section className="main-left-section">
          <Tabs />
          <TableFilters />
          <ProductTable />
        </section>
        {openFilter && <Filters />}
      </main>
    </>
  );
};

export default App;
