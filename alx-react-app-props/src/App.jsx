import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import UserContext from './components/UserContext'


function App() {

  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <UserContext.Provider value={{userData}}>
        <UserProfile />
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App
