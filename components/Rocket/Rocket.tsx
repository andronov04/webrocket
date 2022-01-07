import React from 'react';

const Rocket = () => {

  return (
    <div style={{
      width: '100%',
      height: '100%',
    }} className={'absolute top-0 right-0'}>
      <video style={{
        height: 'inherit',
        objectFit: 'cover',
      }} autoPlay={true} loop={true} muted={true} width={'100%'} height={'100%'} preload={'auto'}>
        <source type="video/mp4" src="https://www.spacex.com/media/WebsiteF9Fairings_Anim_Render_Desktop.webm" />
      </video>
    </div>
  );
};
export default Rocket;
