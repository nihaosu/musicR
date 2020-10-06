import React from 'react';
import Canvas from 'react-native-canvas';

const Loading = () => {
  return (
    <Canvas ref={(canvas: Canvas) => {
      if (!canvas) return
      canvas.width = 100;
      canvas.height = 100;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'purple';
      ctx.fillRect(0, 0, 100, 100);
    }}/>
  )
}

export default Loading;