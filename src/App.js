import {useState} from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async() => {
    try{
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=01e8ff68ce2349adaf8e4257d847807e',
      );
      setData(response.data)
    }catch(e){
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>getData</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
    </div>
  );
};

export default App;