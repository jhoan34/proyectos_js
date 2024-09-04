function memoizeTransform(f) {
  let previousX;
  let previousY;
  let previousResult;
  const s = f
  console.log(s,"bcvbvvc")

  return function memoised (x,y){
    if(previousX === x && previousY === y){
      return previousResult
    }

    
    previousX = x
    previousY = y
    return previousResult = f(x,y)


  }
}

function scale2d(x, y) {
  return [x,y]
   
}

function art (x,y) {
  const [pri, se] = [x,y]
  const l = [pri * tripleScale[0], se * tripleScale[1]];
  console.log(l, "DSdsadsadsadsa")
}



const tripleScale = (x,y) => {
  const l = scale2d(3,3)
  return [x * l[0], y * l[1]]


}

const memoizedScale = memoizeTransform(tripleScale);
console.log(memoizedScale)



console.log(memoizedScale(4, 3)); // => [12, 9]
memoizedScale(4, 3); // => [12, 9]