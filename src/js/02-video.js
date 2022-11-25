import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const LOCALSTORAGE_CURRENT_TIME_KEY = 'videoplayer-current-time';

const onUpdate = e => {
  const { seconds } = e;
  localStorage.setItem(LOCALSTORAGE_CURRENT_TIME_KEY, seconds);
};

player.on('timeupdate', throttle(onUpdate, 1000));

const lastCurrentTime = localStorage.getItem(LOCALSTORAGE_CURRENT_TIME_KEY);
if (lastCurrentTime) {
  player.setCurrentTime(lastCurrentTime);
}
