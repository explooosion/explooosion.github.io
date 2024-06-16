import Header from './containers/Header';
import Footer from './containers/Footer';
import Content from './containers/Content';

function App() {
  return (
    <div className="relative flex items-start justify-between flex-col lg:flex-row mt-10 lg:mt-14 mx-auto w-[80vw] lg:w-[860px]">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App;
