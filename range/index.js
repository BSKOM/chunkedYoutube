console.log('Hello world!');
const labels = document.querySelectorAll('label');
// const drawLabel = ()=>{
//   [...labels].reverse.map((el)=> el.style = ``)
// }
const drawFrame = () => {
  const fragment = document.createDocumentFragment();
  const frameItemTemp = document.querySelector('#iFrameTemp');
  const frameClone = frameItemTemp.content.cloneNode(true);
  frameClone.querySelector('#frameTag').setAttribute('tytle', 'RS-Frame');
  fragment.append(frameClone);
  document.querySelector('#placeFrame').innerHTML = '';
  document.querySelector('#placeFrame').appendChild(fragment);
}
// drawRanges(cl) {
//     const inputRange = (e) => { cl.dispatcher(e) };
//     const drawRange = (sours, dest) => {
//       const fragment = document.createDocumentFragment();
//       const itemsClone = sours.content.cloneNode(true);
//       const outFrom = itemsClone.querySelector('.range-from-info');
//       const outTo = itemsClone.querySelector('.range-to-info');

//       const htmlFromTo = `
//     <input class="progress range-from" type="range" value="${outFrom.textContent}" min="${outFrom.textContent}" max="${outTo.textContent}" step="1">
//     <input class="progress range-to" type="range" value="${outTo.textContent}" min="${outFrom.textContent}" max="${outTo.textContent}" step="1">
//       `;
//       itemsClone.querySelector('.double.ranges').innerHTML = htmlFromTo;
//       const rangeFrom = itemsClone.querySelector('.range-from');
//       const rangeTo = itemsClone.querySelector('.range-to');
//       setStyle(rangeFrom, rangeTo, outFrom, outTo, [outFrom.textContent, outTo.textContent]);
//       // rangeFrom.addEventListener('input', inputRange)
//       // rangeTo.addEventListener('input', inputRange)
//       fragment.append(itemsClone);
//       dest.innerHTML = '';
//       dest.appendChild(fragment);
//       dest.addEventListener('input', inputRange)
// }