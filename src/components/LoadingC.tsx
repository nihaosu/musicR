import React, { useRef, useEffect } from 'react';
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
  const widthHalf = width/2;
  ctx.beginPath();
  if (height < width) {
    const heightF = (width * width * height) / (width * width - height * height);
    const r = (width * width + height * height) / (4 * height);
    ctx.moveTo(x - widthHalf, y);
    if (direction === 's') {
      ctx.arcTo(x, y - heightF, x + widthHalf, y, r);
      ctx.arcTo(x, y + heightF, x - widthHalf, y, r);
    } else {
      ctx.arcTo(x, y + heightF, x + widthHalf, y, r);
      ctx.arcTo(x, y - heightF, x - widthHalf, y, r);
    }
  } else {
    const heightRectHalf = (height - width)/2;
    ctx.moveTo(x - widthHalf, y - heightRectHalf);
    if (direction === 's') {
      ctx.arc(x, y - heightRectHalf, widthHalf, Math.PI, 0, false);
      ctx.lineTo(x + widthHalf, y + heightRectHalf);
      ctx.arc(x, y + heightRectHalf, widthHalf, 0, Math.PI, false);
    } else {
      ctx.lineTo(x - widthHalf, y + heightRectHalf);
      ctx.arc(x, y + heightRectHalf, widthHalf, Math.PI, 0, true);
      ctx.lineTo(x + widthHalf, y - heightRectHalf);
      ctx.arc(x, y - heightRectHalf, widthHalf, 0, Math.PI, true);
    }
  }
  ctx.closePath();
  if (!fillColor) return
  ctx.fillStyle = fillColor;
  ctx.fill();
}

interface props {
  height?: number
}

const Loading = ({ height = 20 }: props) => {
  const width = 81 * height / 60;
  const colWidth = 9 * height / 60;
  const shortHeight = 3 * height / 5;
  const longHeight = 4 * height / 5;
  const minHeight = 3 * height / 10;
  const gap = Math.floor(3 * height / 20);

  function handleHeight(aniHeight: number) {
    if (aniHeight < minHeight) return minHeight
    if (aniHeight > height) return height
    return aniHeight
  }

  const state: {
      centerP: [number, number];
      initHeight: number;
      getHeight(aniHeight: number, state: "down" | "up"): number;
  }[] = [
    {
      centerP: [width/2 - 2 * (gap + colWidth), height/2],
      initHeight: shortHeight,
      getHeight(aniHeight: number, state: 'down' | 'up') {
        let _height: number;
        if (state === 'down') {
          _height = minHeight - aniHeight < 0 ? aniHeight - 3/10 * height : 2 * minHeight - aniHeight
        } else {
          _height = height - aniHeight > 0 ?  aniHeight + 3/10 * height : 2 * height - aniHeight
        }
        return handleHeight(_height);
      }
    },
    {
      centerP: [width/2 - gap - colWidth, height/2],
      initHeight: longHeight,
      getHeight(aniHeight: number, state: 'down' | 'up') {
        let _height: number;
        if (state === 'down') {
          _height = minHeight - aniHeight > 3/20 * height ? 9/20 * height - aniHeight : aniHeight - 3/20 * height
        } else {
          _height = aniHeight - height > 3/20 * height ? 43/20 * height - aniHeight : aniHeight + 3/20 * height
        }
        return handleHeight(_height);
      }
    },
    {
      centerP: [width/2, height/2],
      initHeight: height,
      getHeight(aniHeight: number, state: 'down' | 'up') {
        return handleHeight(aniHeight)
      }
    },
    {
      centerP: [width/2 + gap + colWidth, height/2],
      initHeight: longHeight,
      getHeight(aniHeight: number, state: 'down' | 'up') {
        const _height = state === 'down' ? aniHeight + 3/20 * height : aniHeight - 3/20 * height
        return handleHeight(_height);
      }
    },
    {
      centerP: [width/2 + 2 * ( gap + colWidth), height/2],
      initHeight: shortHeight,
      getHeight(aniHeight: number, state: 'down' | 'up') {
        const _height = state === 'down' ? aniHeight + 3/10 * height : aniHeight - 3/10 * height
        return handleHeight(_height);
      }
    },
  ]

  const context = useRef<CanvasRenderingContext2D|null>(null);
  const aniId = useRef<number>(0);

  function draw(aniHeight: number, dirState: 'down' | 'up') {
    if (!context.current) return
    const ctx = context.current;
    const arr = state.map(({centerP, getHeight}) => [getHeight(aniHeight, dirState), centerP] as [number, [number, number]])
    new Canvas({ref: (canvas) => {
      canvas.width = width;
      canvas.height = height;
      console.log(canvas, 'canvas');
    }})
    ctx.clearRect(0, 0, width, height);
    arr.forEach((([height, centerP]) => drawRect(ctx, colWidth, height, centerP, 's', '#111310')))
    // ctx.drawImage(canvas, 0, 0, width, height);
  }

  function start() {
    let aniHeight = height;
    let state: 'down' | 'up' = "down";
    const speed: number = 1;

    function change() {
      draw(aniHeight, state);
      setTimeout(change, 50);
      // aniId.current = requestAnimationFrame(change);
      if (state === 'down') {
        if (aniHeight - speed < 0) {  // minheight -  3/10 * height
          aniHeight = minHeight;
          state = 'up';
          aniHeight += speed;
        } else {
          aniHeight -= speed;
        }
      } else {
        if (aniHeight + speed > 13/10 * height) {   // height +  3/10 * height
          aniHeight = height;
          state = 'down';
          aniHeight -= speed;
        } else {
          aniHeight += speed;
        }
      }
    }
    change();
  }

  function stop() {
    cancelAnimationFrame(aniId.current);
  }

  function initHeight() {
    if (!context.current) return
    const ctx = context.current;
    ctx.clearRect(0, 0, width, height);
    state.forEach(({centerP, initHeight}) => {
      drawRect(ctx, colWidth, initHeight, centerP, 's', '#111310');
    })
  }

  useEffect(() => {
    setTimeout(() => {
      initHeight();
    });
    setTimeout(() => {
      start();
    }, 1000);
  }, [])

  return <Canvas ref={(canvas: Canvas) => {
    if (!canvas) return
    canvas.width = width;
    canvas.height = height;
    context.current = canvas.getContext('2d');
  }} />
}

export default Loading;