import { buildVec, buildVec2 } from '../utils/mathBuilder'
import { ExerciseData } from './types'

export const exercise6: ExerciseData = {
  id: 6,
  task: '/content/6/task.png',
  backTo: '/bayern-rs-zweig-i-2018',
  height: 100,
  audio: [
    {
      mp3: '/content/6/b2_0.mp3',
      ogg: '/content/6/b2_0.ogg',
      size: 5,
      position: { left: 9, top: -0.7 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/6/b2_1.mp3',
      ogg: '/content/6/b2_1.ogg',
      size: 5,
      position: { left: 9, top: 21.3 },
      beforeQuiz: 0,
    },
    {
      mp3: '/content/6/b2_2.mp3',
      ogg: '/content/6/b2_2.ogg',
      size: 5,
      position: { left: 9, top: 35.8 },
      beforeQuiz: 4,
    },
    {
      mp3: '/content/6/b2_3.mp3',
      ogg: '/content/6/b2_3.ogg',
      size: 5,
      position: { left: 9, top: 50.6 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/6/b2_4.mp3',
      ogg: '/content/6/b2_4.ogg',
      size: 5,
      position: { left: 9, top: 59.6 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/6/b2_5.mp3',
      ogg: '/content/6/b2_5.ogg',
      size: 5,
      position: { left: 9, top: 74 },
      beforeQuiz: 999,
    },
    {
      mp3: '/content/6/b2_6.mp3',
      ogg: '/content/6/b2_6.ogg',
      size: 5,
      position: { left: 9, top: 90.6 },
      beforeQuiz: 999,
    },
  ],
  checkpoints: [
    {
      position: { x: 23, y: 1 },
      title: 'Teilaufgabe B 2.1',
      audioIndex: 1,
    },
    {
      position: { x: 23, y: 29 },
      title: 'Teilaufgabe B 2.2',
      audioIndex: 2,
    },
    {
      position: { x: 23, y: 21 },
      title: 'Teilaufgabe B 2.3',
      audioIndex: 3,
    },
    {
      position: { x: 23, y: 31 },
      title: 'Teilaufgabe B 2.4',
      audioIndex: 4,
    },
    {
      position: { x: 23, y: 41 },
      title: 'Teilaufgabe B 2.5',
      audioIndex: 5,
    },
    {
      position: { x: 23, y: 51 },
      title: 'Teilaufgabe B 2.6',
      audioIndex: 6,
    },
  ],
  quiz: [
    {
      description:
        'Beginne mit dem Zeichnen der Gerade g . Wie sieht die korrekte Zeichnung aus? <img class="p-3 pt-8" src="/content/6/b21_1.png" />',
      correctChoice: '2',
      wrong1: '1',
      wrong2: '3',
      cursor: { x: 18, y: 14 },
      quickviews: [{ type: 'task', start: 3, end: 36 }],
      layersPre: [
        { src: '/content/6/1.PNG', offset: 1 },
        { src: '/content/6/2.PNG', offset: 2 },
      ],
      layersPost: [{ src: '/content/6/3.PNG', offset: 17 }],
    },

    {
      description:
        'Die Punkte A und B sind bereits eingezeichnet. Welche Punkte/Strecken kannst du als nächstes zeichnen?',
      correctChoice: '[AC] und M',
      wrong1: 'D<sub>1</sub>',
      wrong2: '[B<sub>1</sub>D<sub>1</sub>]',
      cursor: { x: 19, y: 14 },
      quickviews: [
        { type: 'solution', start: 14, end: 25 },
        { type: 'task', start: 3, end: 36 },
      ],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/4.PNG', offset: 16 }],
      layersPost: [{ src: '/content/6/5.PNG', offset: 17 }],
    },
    {
      description:
        'Wo befindet sich der Punkt B<sub>1</sub> ? <img class="p-3 pt-8" src="/content/6/b21_2.png" />',
      correctChoice: '1',
      wrong1: '2',
      wrong2: '3',
      cursor: { x: 20, y: 14 },
      quickviews: [
        { type: 'task', start: 41, end: 54 },
        { type: 'task', start: 3, end: 36 },
      ],
      layersPre: [],
      layersPost: [{ src: '/content/6/6.PNG', offset: 22 }],
    },
    {
      description:
        'Wo befindet sich schließlich der Punkt D<sub>1</sub> ? <img class="p-3 pt-8" src="/content/6/b21_3.png" />',
      correctChoice: '1',
      wrong1: '2',
      wrong2: '3',
      cursor: { x: 21, y: 14 },
      quickviews: [{ type: 'task', start: 3, end: 36 }],
      layersPre: [],
      layersPost: [{ src: '/content/6/7.PNG', offset: 5 }],
    },
    {
      description: `Schaue dir an, welche Zusammenhänge zwischen B<sub>n</sub> und D<sub>n</sub> bekannt sind. Welcher Rechenansatz lässt sich daraus für die Bestimmung der Koordinaten von D<sub>n</sub> aufstellen?`,
      correctChoice: `Der Ortvektor ${buildVec(
        'OD<sub>n</sub>'
      )} ist die Verkettung von ${buildVec('OB<sub>n</sub>')} und ${buildVec(
        'B<sub>n</sub>D<sub>n</sub>'
      )}`,
      wrong1:
        'Die Koordinaten von D<sub>n</sub> sind das 3,5-fache von B<sub>n</sub>',
      wrong2: `Der Ortsvektor von D<sub>n</sub> ist das 3,5-fache des Vektors ${buildVec(
        'B<sub>n</sub>M'
      )}`,
      cursor: { x: 24, y: 32 },
      quickviews: [
        { type: 'task', start: 25, end: 35 },
        { type: 'solution', start: 4, end: 24 },
      ],
      layersPre: [
        { src: '/content/6/8.PNG', offset: 29 },
        { src: '/content/6/9.PNG', offset: 29 },
      ],
      layersPost: [{ src: '/content/6/10.PNG', offset: 31 }],
    },
    {
      description: `Für diesen Rechenansatz benötigst du die Koordinaten des Punktes M. Wie lauten die Koordinaten von M ?`,
      correctChoice: 'M ( 0,5 | 2,5 )',
      wrong1: 'M ( 1 | 5 )',
      wrong2: 'M ( 5 | 1 )',
      cursor: { x: 24, y: 35 },
      quickviews: [{ type: 'task', start: 4, end: 27 }],
      layersPre: [{ src: '/content/6/11.PNG', offset: 35 }],
      layersPost: [{ src: '/content/6/12.PNG', offset: 35 }],
    },
    {
      description: `Spitze minus Fuß. Welche Werte hat der Vektor ${buildVec(
        'B<sub>n</sub>M'
      )}(x) ?`,
      correctChoice: `${buildVec('B<sub>n</sub>M')}(x) = ${buildVec2(
        '0,5 - x',
        '2,5 - 0,5x'
      )}`,
      wrong1: `${buildVec('B<sub>n</sub>M')}(x) = ${buildVec2(
        'x - 0,5',
        '0,5x - 2,5'
      )}`,
      wrong2: `${buildVec('B<sub>n</sub>M')}(x) = ${buildVec2('-0,5x', '2x')}`,
      cursor: { x: 18, y: 38 },
      quickviews: [
        { type: 'task', start: 4, end: 27 },
        { type: 'solution', start: 34, end: 39 },
      ],
      layersPre: [{ src: '/content/6/13.PNG', offset: 37 }],
      layersPost: [{ src: '/content/6/14.PNG', offset: 37 }],
    },
    {
      description: `Du kannst jetzt die bekannten Werte in den Ansatz einsetzen. Welchen Wert hat der Vektor im letzten Summand?`,
      correctChoice: `${buildVec2('1,75 - 3,5x', '8,75 - 1,75x')}`,
      wrong1: `${buildVec2('0,5 - x', '2,5 - 0,5x')}`,
      wrong2: `${buildVec2('4 - x', '6 - 0,5x')}`,
      cursor: { x: 21, y: 47 },
      quickviews: [{ type: 'solution', start: 36.5, end: 49 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/15.PNG', offset: 41 }],
      layersPost: [{ src: '/content/6/16.PNG', offset: 46 }],
    },
    {
      description: `Wie lauten schließlich die Koordinaten für D<sub>n</sub> ?`,
      correctChoice: 'D<sub>n</sub> ( -2,5x + 1,75 | -1,25x + 8,75 )',
      wrong1: 'D<sub>n</sub> ( -4,5x + 1,75 | -2,25x + 8,75 )',
      wrong2: 'D<sub>n</sub> ( 0,75x | 6,5x )',
      cursor: { x: 23, y: 53 },
      quickviews: [{ type: 'solution', start: 40, end: 54 }],
      autoShowViews: true,
      layersPre: [{ src: '/content/6/17.PNG', offset: 50 }],
      layersPost: [{ src: '/content/6/18.PNG', offset: 50 }],
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
