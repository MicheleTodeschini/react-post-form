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
    author: '',
    title: '',
    body: '',
    public: false

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
  <div class="mb-3">
    <label  className="form-label">Titolo</label>
    <input 
    type="text" 
    className="form-control" 
    name='title'
    value={FormData.title}
    required
    onChange={(e) => setFormData({...formData, name: e.target.value})}
    />
  </div>
  <div class="mb-3">
    <label  className="form-label">Scrivi qui il tuo articolo</label>
    <input type="text"
     className="form-control" 
     name='body'
     value={formData.body}
     required
     onChange={(e) => setFormData({...formData, name: e.target.value})}
     />
  </div>
  <div className="mb-3 form-check">
    <p>radio button quo</p>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </form>

    </>
  )
}

export default App
