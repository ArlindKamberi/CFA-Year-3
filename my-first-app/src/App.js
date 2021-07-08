import logo from './logo.svg';
import './App.css';
import  Title from './Title.js'

function App() {
  return (
    <div className={'content'}>
      <Title/>
      
        <img src={logo} className="App-logo" alt="logo" />
        
    <p> I play classical and flamenco guitar since 11 years. </p>
    <p> I am really looking forward for this hybrid summer camp of CFA 2021</p>
    </div>
  );
}

export default App;
