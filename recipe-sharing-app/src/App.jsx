import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <>
      <Router>
        {/* Always visible */}
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="mt-36">
                  <AddRecipeForm />
                </div>

                <div className="mb-96">
                  <RecipeList />
                </div>
              </>
            }
          />
        </Routes>

        {/* Always visible */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
