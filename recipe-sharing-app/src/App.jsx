import Header from './components/Header'
import Footer from './components/Footer'
import useCounterStore from './stores/useCounterStore';
import Count from './components/Count';
import Dashboard from './components/Dashboard';
import TaskPopulate from './components/TaskPopulate';
import Snackbar from './components/Snackbar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {

  const count = useCounterStore((state)=>(state.count))


  return (
    <>
      <Header />
      <Dashboard />
      <RecipeList />
      <AddRecipeForm />
      <Snackbar />
      <TaskPopulate />
      <div>
        Counter: {count}
        <Count count={count} />
      </div>
      <Footer />
    </>
  );
}

export default App
