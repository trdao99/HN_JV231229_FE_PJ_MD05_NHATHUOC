import Category from "./page/adminPage/Category";
function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<LayoutAdmin/>}>
          <Route path="category" element={<Category/>}/>
        </Route>
      </Routes>
    </>
  );


}

export default App;
