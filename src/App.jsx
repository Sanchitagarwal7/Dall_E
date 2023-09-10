import {useState} from 'react';
import './App.css'
import fetchImageArr from './fetchImageData';

function App() {

  const [searchItem, setItem] = useState("");
  const [loading, setLoading] = useState(true);
  const [imgArr, setImg] = useState([]);
  const [isLoadingVisible, setVisible] = useState(false);

  const handleClick = async ()=>{

    setVisible(true);
    setLoading(true);
    console.log("Sending the data");
    const arr = await fetchImageArr(searchItem);
    setImg(arr);
    setLoading(false);
    setVisible(false);
  }

  const handleChange = (event)=>{
    setItem(event.target.value)
  }

  const styleObject = {display: isLoadingVisible === true?"block":"none"};

  return (
    <>
    <h1>Image Generator</h1>
    <div className="container">

      <div className="input_wrapper">
        <input name='input' id='textInput' value={searchItem} onChange={handleChange} placeholder='Type text' type='text' autoComplete='off'/>
        <button type='submit' id='generate-btn' onClick={handleClick}>Generate</button>
      </div>

      <div className="image-grid">
        <div className="placeholder">
        {loading===true?<div style={styleObject}>...loading</div>: <img src={imgArr[0].url}/>}
        </div>
        <div className="placeholder">
        {loading===true?<div style={styleObject}>...loading</div>: <img src={imgArr[1].url}/>}
        </div>
        <div className="placeholder">
        {loading===true?<div  style={styleObject}>...loading</div>: <img src={imgArr[2].url}/>}
        </div>
        <div className="placeholder">
        {loading===true?<div  style={styleObject}>...loading</div>: <img src={imgArr[3].url}/>}
        </div>
      </div>

    </div>
    </>
  )
}

export default App
