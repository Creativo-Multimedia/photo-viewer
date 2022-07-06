import { useState } from 'react'
import './App.css'
import data from './data'

function App() {
  const [imgOnViewer, setImgOnViewer] = useState(null)
  const [openViewer, setOpenViewer] = useState(false)

  const handleImgClick = (e) => {
    setImgOnViewer(e.target.src)
    setOpenViewer(true)
  }

  const handleViewerClick = () => {
    setImgOnViewer(null)
    setOpenViewer(false)
  }

  return (
    <div className="App">
      <div className='content-wrap'>
        <div className='images-grid'>
          {data.map((el, idx) => {
            return (
              <img src={`assets/${el}`} key={idx} alt='Congreso' onClick={handleImgClick} />
            )
          })}
        </div>
        {openViewer && (
          <div className='img-viewer' onClick={handleViewerClick}>
            <img src={imgOnViewer} alt='Congreso' />
            <i className="fa fa-times close-icon"></i>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
