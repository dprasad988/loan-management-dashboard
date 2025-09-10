import Dashboard from "./Dashboard";
import Header from "./header/header";

function Layout() {
  return (
    <div>
      <Header />
      <div className="mt-18">
        <Dashboard />
      </div>
    </div>
  );
}

export default Layout;
