import React, { useEffect } from 'react'

export default function Index() {
    const successHandler = (stream) => {
    
        window .streamTracks = stream;
        const video = document.querySelector('video');
        if (video) {
          video.srcObject = stream;
          video.setAttribute('autoPlay', '');
          video.setAttribute('muted', '');
          video.setAttribute('playsInline', '') // required to tell iOS safari we don't want fullscreen
          video.play();
          video.addEventListener('loadedmetadata', (e) => {
           
          });
        
        } else {
       
        }
     
      }
    useEffect(()=>{
        navigator?.mediaDevices?.getUserMedia({ audio: false, video: { width: 1500} })
        .then(stream => successHandler(stream))
        .catch(error => console.log(error));
    },[])
  return (
    <div>

<video >
some
    </video>
    </div>
  )
}
