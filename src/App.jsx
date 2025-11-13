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

   const [formData, setFormData] = useState(InitialFormData)

   /*function handleSubmit(e) {
    e.preventdefault()
    console.log(formData);

    axios.post(endpoint, formData, {
      headers: {'content-type' : 'application/json'}
    })
   .then(response=>{
    console.log(response);
    setFormData(InitialFormData)
   })
  }*/
 function handleSubmit(e){
  e.preventDefault();
  console.log('cioa')
   axios.post(endpoint, formData, {
      headers: {'content-type' : 'application/json'}
    }).then((res)=>{
      console.log(res)
      setFormData(InitialFormData)
    })
 }

  return (
    <>
      <h1>Scrivi il tuo articolo</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
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
        <div className="mb-3">
          <label  className="form-label">Scrivi qui il tuo articolo</label>
          <input 
          type="text" 
          className="form-control" 
          name='body'
          value={FormData.body}
          required
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="mb-3 form-check">
          <label  className="form-label">Spunta se vuoi renderlo pubblico, sennò rimarrà come bozza privata</label>
          <input
          type='checkbox'
          name='public'
          className="" 
          value={formData.public}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          >
          
          </input>

        </div>
        <button type="submit" className="btn btn-primary"  >Submit</button>
      </form>

    </>
  )
}

export default App
