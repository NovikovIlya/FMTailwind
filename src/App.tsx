import './App.css'
import FormComponents from './components/FormComponent'
import bg from './assets/bg-intro-desktop.png'

function App() {
  

  return (
    <>
      <div style={{ backgroundImage: `url(${bg})`}} className='bg-red-600 grid grid-cols-2 '>
        <div className='flex justify-center items-center flex-wrap content-center gap-4'>
          <h1 className='text-4xl color-white text-white font-bold'>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>
        <FormComponents/>
      </div>
    </>
  )
}

export default App
