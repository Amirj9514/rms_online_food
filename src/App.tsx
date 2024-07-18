import './App.scss';
import Home from './Pages/home/home';

import Layout from './layout/layout';

function App() {
  return (
    <div className="App">
      <Layout></Layout>
      <div style={{ marginTop: '100px' }}>
        <Home />
      </div>
    </div>



  );
}

export default App;
