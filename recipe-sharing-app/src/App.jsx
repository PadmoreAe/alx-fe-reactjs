import Header from './components/Header'
import Footer from './components/Footer'
import useCounterStore from '../../todo-app/src/stores/useCounterStore';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {

  const count = useCounterStore((state)=>(state.count))

  return (
    <>
      <Header />
      <div className='mt-28'>
        <AddRecipeForm />
      </div>
      <div className="mb-96">
        <RecipeList />
      </div>
      <Footer />
    </>
  );
}

export default App
