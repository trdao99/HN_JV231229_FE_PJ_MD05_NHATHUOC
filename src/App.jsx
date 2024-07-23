import LayoutAdmin from "./layouts/admin";
import Category from "./page/adminPage/Category";
import Product from "./page/adminPage/Product";
function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="category" element={<Category />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
