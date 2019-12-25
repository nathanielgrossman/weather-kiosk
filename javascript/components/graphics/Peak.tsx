import React from 'react'
import Svg, { Path } from 'react-native-svg'
import COLORS from '../../constants/colors'

type Props = {
  color?: string
  size?: number
}

const Peak = ({ color = COLORS.blue3, size = 100 }: Props) => (
  <Svg viewBox="0 0 1102.83 365.48" height={size / 2} width={size * 1.5}>
    <Path
      fill={color}
      d="M538.23 148.23c-18.86 0-38.15 1.73-56.44-3.76-6.19-1.86-14.86-7.39-21.3-7-5.85.34-8.9 7.49-14.46 9.5-7.56 2.71-16.35 3.37-24.22 5-9.69 2-19.44 4.16-29.28 5.33-7.57.84-15.3.84-22.59-1.55-3.87-1.25-7-3.71-10.67-5.17s-7.38-.89-11.38-1.09c-8.56-.44-13.21-.55-21 3.15-6.66 3.17-11.66 3.72-15.56 10.59-3 5.31-1.07 10.84 1.09 16.46 2.47 6.41 9.38 11.79 3.51 18.36-5.62 6.3-15.26 10.46-21.85 15.84s-11.61 12.53-17.94 18.39c-2.38 2.2-4.78 4.25-7.95 5s-4.8.06-7.88 1.78c-7.11 4-13.41 9.36-20.35 13.6-7.47 4.56-17 10.41-25.84 9.77-4.78-.35-7.56-1.07-12.07.89a140.72 140.72 0 00-12.82 6.64c-6.39 3.59-14.26 12.42-21.63 13.54-6.22.94-11.72-6.4-16.2-9.76a157.3 157.3 0 0137.35-24.09c2.88-1.35 5.9-3.42 9-4.31s5.94-.13 9.2-.29a41.32 41.32 0 0020.38-7.23c5.18-3.63 8.9-9.15 14.17-12.59 3.35-2.18 6.17-1.87 9.81-2.9 4-1.15 6.51-3.6 9.44-6.45a195.06 195.06 0 0117.3-14.51c3.79-2.92 15.29-8.36 15.73-13.69.21-2.47-2.42-6.49-3.14-8.95-1-3.46-2-6.93-3.13-10.35-.72-2.2-3-6.12-2.56-8.52.61-3.3 4.5-4.74 6.66-7 4.85-5.09 7.18-9 13.82-12 6.26-2.8 12.05-7.75 18.68-9.64 6.11-1.74 14 1.25 20.45 1.36 8 .13 15.11.68 22.6 3.85 15.71 6.66 31.62 2.27 48-.87 8-1.53 16.09-3.6 22.66-8.6 6.73-5.12 9.83-10.33 19.22-8.91 8.59 1.29 17.11 5.27 25.48 7.63 5.32 1.5 18.29 6.75 22 5.23.82-10.33 2.23-20.32.4-30.57-.7-3.91-.7-9.59-3.2-12.25s-8.23-2.63-10.56-5.86c-3.69-5.12.4-19.57 1.82-25.24 1-3.79 2.21-9.17 5-12.17s6.6-3.32 10-4.88c-3.16-3 3.27-10.59 5.92-12.57 3.24-2.43 9-2.76 12.87-2.38 4.54.44 7.28 3.77 10.9 6.3 4.67 3.26 6.46 6.63 3.63 12.19 4.81-.62 11-2.59 15.5-.09 6.05 3.37 5.59 11.32 6.2 17.29.81 7.89 1.4 16.11-.37 23.93-1.2 5.3-2.13 5.28-7 6.42-2.54.59-1.83-.85-3.29 1.24-.78 1.13-.73 4.21-1 5.58-.3 1.77-2.48 9.19-1.17 10.08 1.52 1 14.42-12.88 16.86-14.74 6.08-4.63 11.78-3.9 18.46-6.42 5.89-2.23 9.44-7.61 13.22-12.33-5.18-2.85-4.7-10.69-.8-14.6 4.41-4.43 14.45-2.85 20.13-3.09 8.95-.37 10.86.29 16.37-6.69 4.72-6 7.45-12.46 11.13-19.05a60.66 60.66 0 0112.24-15.79c4.56-4.09 7.08-10.9 12.65-13.62 5.94-2.91 12.68-1.11 18.91-.49 7.84.78 15.75.12 23.62.5 26.91 1.31 61.78 3.6 71.15 34.65 2 6.7 3.82 9.19 9.09 13.76a47 47 0 0112.77 17.58c6 14.21 14.93 26.75 21.75 40.53 7.19 14.54 11 30.36 19.26 44.42 2.65 4.59 6.25 13.37 11.73 14.91 2.39.66 4.39-.22 6.63-.85 5.16-1.47 9.75-3.19 15.2-3.52 7.15-.44 14.28.66 21.3 1.91 7.28 1.28 13 5.51 20.37 4.7 15.46-1.68 27.2-1.83 40.92 6.48 6.42 3.89 11.62 7.34 19.15 8.6 8.18 1.37 15.89 4.09 23.71 6.86 15.9 5.65 30.61 9.2 47.47 10.59 5.84.48 14.54-.8 19.82 1.84 2.55 1.27 3.71 4.23 5.64 6.18a20.66 20.66 0 008.69 5.1c4.61 1.43 10.29.77 13.45 5.13s2 10.44-3.17 12.34c-14.58 5.4-23.82-6.17-35.06-12.18-6.33-3.39-13.24-2.08-20.25-2.32-9.26-.3-17.59-3-26.32-5.82-14.7-4.82-29-9.34-44.09-12.56-12.94-2.8-22.44-16.52-36.18-13.16-6.95 1.7-13.65 3.84-20.68 1.29s-13.19-5.85-20.64-7.06c-14.66-2.36-27.26 7.3-42 1.85-14.08-5.21-20-16.19-26.53-28.76-7-13.4-11.49-27.81-18-41.39-6.91-14.57-15.68-28.67-23.44-42.83-3.28-6-7.78-10.52-12.42-15.41-5.81-6.14-7.1-12.09-10.36-19.54-4.62-10.57-14.82-14.39-25.69-13.79-3.65.2-7.1.75-10.78.35-3.16-.34-6-1.81-9.17-2.11-3.34-.33-7 .49-10.35.39s-6.67-.83-9.54 1.49c-1.18 1-4.8 5.54-4.77 7 0 1.73 5.67 6.57 6.65 8.19 2.51 4.14 1 12.56 4.62 15.44 2.32 1.82 4.24.63 6.14 3.65a10.25 10.25 0 011.33 6c-.58 7.27-9 13.12-13.91 17.67-2.51 2.32-4.9 3-3.09 6.36 1.51 2.76 3.52 2.31 6.22 2.74 5.21.81 9.3 1.4 12.22 6.34 2.48 4.2 1.56 9.66 4.5 13.59 3.61 4.82 11.32 5.72 16.12 9.22 5.35 3.9 8.36 9.37 12.83 14a113.13 113.13 0 0112.63 15.15c3.72 5.39 9.12 7 14.71 9.88s9.61 9.08 15.6 10.71c7 1.9 14.82-.35 21.85 1.11 6.86 1.42 9.44 6.72 13.24 12s8.25 9.47 13.07 13.83c2.16 1.95 4.24 4.08 6.83 5.47 2.77 1.49 5.78 1.39 7.28 4.42 1.87 3.78-1.21 10.42-5.32 11.51-4.81 1.26-13.33-5.18-17-7.85-10.84-7.87-16.81-24.91-31.38-26.28-6.9-.65-12.26-.33-18.68-3.64-6.76-3.5-13.1-8-19.67-11.91-5.55-3.26-11.3-6.38-15.65-11.22-4.87-5.4-7.23-12.46-11.88-18.07-9.09-11-23.11-15.27-32.67-25.67-4.8 5.73-9.54 11.48-14.56 17-4.42 4.92-9.13 12.18-16.36 12.24-6.88.06-9.13 2.32-15.15 5.9-7.28 4.34-12.07 9.5-17.62 15.88-4.65 5.32-10.52 10.51-14.59 16.22-1.77 2.49-1.54 3.37-2 6.19a2.7 2.7 0 01.78 2.57 33 33 0 00-2.48 3.65c-7.13 11.39-17.43 18.73-26.55 28.74 5.33 4.67 11.9 9.09 15.06 15.66s4.22 13 8.64 19.07c3.89 5.36 9.14 9.64 12.89 15.07s6.14 12.67 11.38 17c4.6 3.75 10.48 4.52 15.19 8.61 5.53 4.8 8.14 7.14 15.44 8 6.13.72 9.72 3.36 13.77 7.95 1.73 2 3.29 4.75 5.41 6.31 3.46 2.53 4.77.41 8.24 1.53 4.76 1.52 7.17 9.25 7.24 13.59.06 3.94.73 4.54-2.41 6-2.25 1.07-6.55.25-8.8-.38a39 39 0 01-14.94-8.75c-2.08-2-3.3-5.19-5.54-6.88s-5.25-1.18-7.93-1.58c-6.47-1-11.6-4-16.31-8.43s-10.35-6.47-15.64-10.1c-5.75-4-10.86-7.91-14.29-14.12-3.89-7-6.34-12.93-11.77-19a71.89 71.89 0 01-11.3-16.45c-2.36-4.84-3.06-14.24-7.6-17.41-5.06-3.55-7.86 1.61-12.29 2.93-3.09.93-4.36-.91-7.4-1.52s-6.13.36-9.12-.32c-6.27-1.43-8-2.46-13 2.57-6.28 6.29-12.14 13-18.35 19.41-11.57 11.89-23.56 23.39-35 35.42-3.39 3.58-8.78 12.72-14.74 10.81-5.2-1.66-6.25-8.89-3.89-13 3.39-5.85 11.79-11.23 16.72-15.91a260 260 0 0018.41-18.88c1.95-2.25 5.6-5.09 6.6-7.91.92-2.58 0-5 1-7.61.87-2.32 2.91-3.94 4.64-5.61 3.39-3.29 5.86-6.84 8.89-10.36 3.28-3.81 7.58-5.2 12.48-5.62 8.21-.71 13.49.14 21-3.72 14.33-7.4 23.23-17.14 32.9-29.62 2.09-2.69 8.4-5.53 9.52-8.33.86-2.12-1.09-5.8 0-8.5 1.5-3.74 5.53-6 8.33-8.73a110.17 110.17 0 008.73-9.6c2.52-3.07 4.75-7.19 7.74-9.78 2.35-2.05 5.69-3.4 8.35-5.05 7.21-4.5 10.69-8.7 19.14-9.82 7.06-.94 10.39-4.82 13.4-10.93 3.27-6.64 9-11.06 13.78-16.69-1.62-1.13-3.73-2-5-3.62-1-1.24-1.15-4.83-2.73-4.84-1 0-5 4.66-6 5.48a91.07 91.07 0 01-7.63 5.45c-9.66 6.25-19.92 11.35-29.41 17.86-20.44 14-42.11 28.17-65.09 37.72-11 4.59-22.32 7.3-31.58 15.14s-18 16.67-29.1 21.63c-9.29 4.17-22 5.13-29.1 12.79-6.27 6.73-6.27 17.21-12.66 23.54-3.14 3.12-7.72 3.86-11.52 5.87-5.66 3-10 2.79-16 .44-4.11-1.6-8.88-5.82-13.4-4.46-4.36 1.31-7 6.2-11.71 7.57-5.56 1.63-10.22-1.33-15.32-3.12-6-2.09-12.61-3.93-18.94-4-12.49-.2-23.24 7.93-33.18 14.51-10.4 6.88-21.06 13.31-31.56 20-10.65 6.81-19.09 15.57-27.92 24.57-8.45 8.61-15.37 18.42-27.87 20.09-13.19 1.75-26.77 3.59-40.05 4.08s-26.48-1.47-39.81-2.17c-5.57-.3-11.12.58-16.69.11-6.34-.54-12.18-1-18.48.38-11.66 2.54-21.69 9.18-32.18 14.5a354.92 354.92 0 00-34 20c-4.71 3.1-9.17 6.34-15.08 6.12-5.47-.21-10.07-3-15.74-2.65-12 .8-20.81 9.49-31.78 13.26-7.19 2.47-19.69-2.64-12.56-11.68 2.87-3.65 10.06-6.17 14.15-8.21a88.21 88.21 0 0117.56-6.83c5.45-1.38 11.27-2.39 16.84-1.49s9.34 2.42 14.65-.67c4.51-2.63 7.68-7 12.15-9.79 4.76-2.93 10.11-4.68 15.07-7.23 10.91-5.61 21.23-11.39 32.75-15.83 5.48-2.12 11.25-4.7 17-5.84s12.48-.18 18.45.09c12.76.57 25.46 2 38.21 2.71 13.72.74 27.27-1 40.93-2.13 13.35-1.11 19-7.56 28.17-16.73 8.9-8.92 18-18 28.46-25 10.33-6.91 21-13.39 31.38-20.2 10.22-6.68 20.49-13.7 32.37-17.06 13.07-3.7 23.62-1.15 36.27 2.37 6.55 1.83 8.71 2 13.77-2.44 4.13-3.6 8-6.4 13.71-6.87s8.6 1.67 13 4.73c3.41 2.37 6.89 3.91 10.61.88 3.22-2.62 3.76-7.82 5.6-11.4a37.16 37.16 0 018.52-11c8.34-7.32 18.87-9.1 28.91-13.01a37.93 37.93 0 0012.68-8.24c3.85-3.55 8.4-6 12.38-9.46 7-6 13.28-13.22 23.17-13.87zm11.2-1.62c24.12-11.64 47.42-24.3 69.3-39.78 5.38-3.8 11.08-6.84 16.7-10.27 4.54-2.78 9.75-4.42 13.93-7.59s7.72-7.61 11.8-11.11c5.22-4.47 10.18-5.86 16.17-8.76a26.6 26.6 0 005.9-3.86c3.18-2.78 3.79-3.52 1-6.82-3.27-3.89-4.85-5.8-4.83-11.1 0-9.86-6.69-18.44-14.1-7-2.79 4.31-4.06 9.91-6.88 14.4a157 157 0 01-11.06 14.87c-2.54 3.15-6.56 10-11.14 10.67-5.06.73-7.12-5.2-11.33-6-1.09 8.67-6.11 15-12.52 21-7 6.58-14 8.65-22.93 11.05-8.36 2.24-15.45 11.26-21.15 17.63-6.57 7.33-12.6 15.11-18.86 22.67z"
    />
  </Svg>
)

export default Peak