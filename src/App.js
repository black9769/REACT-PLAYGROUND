import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useState} from "react";
import {Button} from "@mui/material";

function App() {
    const [data, setData] = useState(null);
    const onClick = () => {
        axios.get('/api/test').then(response => {
            setData(response.data[0].city);
            console.log(response.data[0].city)
        });

    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Button variant="contained" onClick={onClick}>불러오기</Button>
                <h1>{data}</h1>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
