import './App.css';

import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers';
import { Brand, CTA, Navbar } from './components';

function App() {
  
  return (
    <main className='App'>
      <div className='gradient__bg'>
        <div className="container">
          <Navbar />
          <Header />
        </div>
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </main>
  );
}

export default App;