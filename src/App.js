import { set } from 'mongoose';
import './App.css';
import { useState } from 'react';

function App() {
    const [name, setName] = useState("");
    const fun = async (e) => {
        e.preventDefault();
        try {
         
            const res = await fetch("https://to-deploy-3.onrender.com/api/name", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name })
            })
            console.log("clicked");
        } catch (error) {
            console.log(error)
        }
    }
    const on = (e) => {
        setName(e.target.value)
    }
    return (
        <div className="App" style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form onSubmit={fun}>
                <label>Name :- </label>
                <input type='text' value={name} onChange={on} />
                <br />
                <input className='' type='submit' />
            </form>
        </div>
    );
}

export default App;
