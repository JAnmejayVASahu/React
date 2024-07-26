import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import Hello from './janu.jsx';

function MyApp() {
    return (
      <h1>Hare krishna</h1>
    )
  }
  export default MyApp;

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <App />
        <MyApp />
        <Hello />
    </>
)
