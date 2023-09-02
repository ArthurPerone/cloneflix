import { Category } from "./components/Category/category";
import { MainHeader } from "./components/header/header";


function Home() {
  
  return (
    <main>
      <MainHeader />
      <Category titulo="Em Alta"/>
    </main>
  )
}

export default Home;
