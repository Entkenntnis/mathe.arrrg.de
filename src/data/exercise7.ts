import { ExerciseData } from './types'

export const exercise7: ExerciseData = {
  id: 7,
  task: '/content/7/task.png',
  backTo: '/bayern-rs-zweig-ii-iii-2018',
  height: 55,
  audio: [
    {
      mp3: '/content/7/a1_0.mp3',
      ogg: '/content/7/a1_0.ogg',
      size: 5,
      position: { left: 10, top: -1 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/7/a1_1.mp3',
      ogg: '/content/7/a1_1.ogg',
      size: 5,
      position: { left: 10, top: 20 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/7/a1_2.mp3',
      ogg: '/content/7/a1_2.ogg',
      size: 5,
      position: { left: 10, top: 76 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/7/a1_3.mp3',
      ogg: '/content/7/a1_3.ogg',
      size: 5,
      position: { left: 10, top: 90 },
      beforeQuiz: 999,
    },
  ],
  checkpoints: [
    {
      position: { x: 24, y: 1 },
      title: 'Teilaufgabe A 1.1',
      audioIndex: 1,
    },
    {
      position: { x: 24, y: 26 },
      title: 'Teilaufgabe A 1.2',
      audioIndex: 2,
    },
    {
      position: { x: 24, y: 26 },
      title: 'Teilaufgabe A 1.3',
      audioIndex: 3,
    },
  ],
  quiz: [
    {
      description: 'TODO',
      correctChoice: '---',
      wrong1: '---',
      wrong2: '---',
      cursor: { x: 8, y: 7 },
      quickviews: [
        { type: 'task', start: 85, end: 125 },
        { type: 'task', start: 15, end: 27 },
      ],
      layersPre: [],
      layersPost: [],
    },
    /*{
      description: 'TODO',
      correctChoice: '---',
      wrong1: '---',
      wrong2: '---',
      cursor: { x: 8, y: 7 },
      quickviews: [
        { type: 'task', start: 85, end: 125 },
        { type: 'task', start: 15, end: 27 },
      ],
      layersPre: [],
      layersPost: [],
    },*/
  ],
}
