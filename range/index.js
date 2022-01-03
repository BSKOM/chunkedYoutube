console.log('Hello world!');

const myRng = document.querySelector('#myRng');

//this parameter can be setted from setting!
//after first setting must be saved on base
let duration = '290'; // in sec
if(myRng.getAttribute('duration') !== duration){
  console.log('Error:duration non setted!', myRng, duration )
}
let YouTubeId = 'Xa0Q0J5tOP0' //id from yt link
let playList = [
  {
    start: '00:00:00', //this may be '' and setted from '0:00'!!!
    name: '> This part about theme of video material <',
    end: '00:01:45', //87s 30%
    color: 'var(--gold)' //can be color-list in setting for set this
  },
  {
    start: '00:01:45', //87s 30%
    name: '> This is detail number one theme of video material <',
    end: '00:03:38', //203s 70%
    color: 'green'
  },
  {
    start: '00:03:38',  //203s 70%
    name: '> This is detail number two theme of video material <',
    end: '00:04:35', //261s 90%  
    color: 'blue'
  },
  {
    start: '00:04:35', //261s 90%
    name: '> This is resume about theme of video material <',
    end: '00:04:50', //290s 100% this may be '' and settins as dafault from duration !!!
    color: 'var(--dark-red)'
  },
]; // 
const drawLabel = ({ start=[], name, end=[], color}, d) => {
  const fragment = document.createDocumentFragment();
  const labelTemp = document.querySelector('#labelTemp');
  const labelClone = labelTemp.content.cloneNode(true);
  const labelCloneLabel = labelClone.querySelector('.label')
  const labelCloneSpan = labelClone.querySelector('.tooltiptext')
  const toSeconds =  (hms)=>{
    const a = hms.split(':'); 
    const seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
    return String(seconds)
  }
  const startSec = toSeconds(start);
  const startPercent = ((+startSec * 100) / +d).toFixed(2);
  const endSec = toSeconds(end);
  const endPercent = ((+endSec * 100) / +d).toFixed(2); 
 

  const labelStyleInline = `--width-ch: ${endPercent - startPercent}; --color-ch: ${color};`;
  const labelOnClick = `myRng.value = ${startPercent}`;
  const spanStyleInline = `--m-left: -${Math.floor((800 * +startPercent)/100)}px;`; 
  const spanToolipText = `${start} ${name} ${end}`
  labelCloneLabel.setAttribute('value',startSec);
  labelCloneLabel.setAttribute('style', labelStyleInline);
  labelCloneLabel.setAttribute('onclick', labelOnClick);
  labelCloneSpan.setAttribute('style', spanStyleInline);
  labelCloneSpan.textContent = spanToolipText;
  fragment.append(labelClone);
  document.querySelector('#navFrame').appendChild(fragment);
}
const drawLabels = (pl=[], dur)=>{
  const navFrame = document.querySelector('#navFrame');
  navFrame.innerHTML = '';
  [...pl].map((el) => { drawLabel(el, dur)} )
}
drawLabels(playList, duration)
/* player */
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    // videoId: 'M7lc1UVf-VE',
    videoId: YouTubeId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  console.log('Player is ready!')
  event.target.playVideo();
}

let done = false;
function onPlayerStateChange(event) {
  console.log('Changes state!', event);
  if (event.data == YT.PlayerState.PLAYING && !done) {
    console.log('State is playing - set done and verifing !', event);
    console.log('Duration:', player.getDuration());
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}



// const drawLabel = ()=>{
//   [...labels].reverse.map((el)=> el.style = ``)
// }
// const drawFrame = () => {
//   const fragment = document.createDocumentFragment();
//   const frameItemTemp = document.querySelector('#iFrameTemp');
//   const frameClone = frameItemTemp.content.cloneNode(true);
//   frameClone.querySelector('#frameTag').setAttribute('tytle', 'RS-Frame');
//   fragment.append(frameClone);
//   document.querySelector('#placeFrame').innerHTML = '';
//   document.querySelector('#placeFrame').appendChild(fragment);
// }
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