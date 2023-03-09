import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Books from "./components/Books";
import Categories from "./components/Categories";
import Layouts from "./components/Layouts";
import { fetchBooks } from "./redux/books/booksSlice";

function App() {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Books />} />
          <Route path="categories" element={<Categories />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
