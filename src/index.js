import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme} from './theme'
import useStore from './Store';




const Sample = () =>{
const [dark, setDark] = useState(false)
const { colorTheme} = useStore();

  return(
    <React.StrictMode>
        <ThemeProvider theme={dark ? darkTheme(colorTheme) : lightTheme(colorTheme)}>
          <App changeTheme={() => setDark(!dark)} darkTheme={dark}/>
        </ThemeProvider>
      </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);

reportWebVitals();


