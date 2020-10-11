import React from 'react';
import Canvas, { CanvasRenderingContext2D } from 'react-native-canvas';

function drawRect(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  centerPoint: [number, number],
  direction: 's' | 'n' = 's',
  fillColor?: string,
) {
  const [x, y] = centerPoint;
  if (height < width) {
    const heightF = (width * width * height) / (width * width - height * height);
    const r = (width * width + height * height) / (4 * height);
    ctx.moveTo(x - width/2, y);
    if (direction === 's') {
      ctx.arcTo(x, y - heightF, x + width/2, y, r);
      ctx.arcTo(x, y + heightF, x - width/2, y, r);
    } else {
      ctx.arcTo(x, y + heightF, x + width/2, y, r);
      ctx.arcTo(x, y - heightF, x - width/2, y, r);
    }
  } else {
    const heightRect = height - width;
    ctx.moveTo(x - width/2, y - heightRect/2);
    if (direction === 's') {
      ctx.arc(x, y - heightRect/2, width/2, Math.PI, 0, false);
      ctx.lineTo(x + width/2, y + heightRect/2);
      ctx.arc(x, y + heightRect/2, width/2, 0, Math.PI, false);
    } else {
      ctx.lineTo(x - width/2, y + heightRect/2);
      ctx.arc(x, y + heightRect/2, width/2, Math.PI, 0, true);
      ctx.lineTo(x + width/2, y - heightRect/2);
      ctx.arc(x, y - heightRect/2, width/2, 0, Math.PI, true);
    }
  }
  ctx.closePath();
  if (!fillColor) return
  ctx.fillStyle = fillColor;
  ctx.fill();
}

const Loading = () => {
  return (
    <Canvas ref={(canvas: Canvas) => {
      if (!canvas) return
      canvas.width = 100;
      canvas.height = 100;
      const ctx = canvas.getContext('2d');
      drawRect(ctx, 12, 10, [50, 50], 's', '#f00');
    }}/>
  )
}

export default Loading;