import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  
  const endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts '

  const InitialFormData = {
    author: '',
    title: '',
    body: '',
    public: false
  }

   const [formData, setFormData] = useState({
    name: '',
    language: '',
    urgency: 'low',
    updates: false,
    description: ''

  })

  return (
    <>
      <h1>Scrivi il tuo articolo</h1>
      <form>
  <div class="mb-3">
    <label  className="form-label">Autore</label>
    <input 
    type="text" 
    className="form-control" 
    name='author'
    value={FormData.author}
    required
    onChange={(e) => setFormData({...formData, name: e.target.value})}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Titolo dell'articolo</label>
    <input type="text"
    className="form-control"
    name='title'
    onChange={(e) => setFormData({...formData, name:e.target.value})}
     />
  </div>
  <div class="mb-3">
    <label  className="form-label">Scrivi qui il tuo articolo</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </form>

    </>
  )
}

export default App
