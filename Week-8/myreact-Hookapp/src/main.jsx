import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClickCounter from './Counter' 
import EmojiCounters from './EmojiCounters' 
import WeatherMoodWidget from './WeatherMoodWidget'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ClickCounter/>  */}
    {/* <EmojiCounters pic='Love'/> 
<EmojiCounters pic='Sad'/> 
<EmojiCounters pic='Like'/>  */}
<WeatherMoodWidget pic='Rainy'/>
<WeatherMoodWidget pic='Sunny'/>
<WeatherMoodWidget pic='Cloudy'/>
  </StrictMode>,
)
 