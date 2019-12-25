import React from 'react'
import Svg, { Path } from 'react-native-svg'
import COLORS from '../../constants/colors'

type Props = {
  color?: string
  size?: number
}

const Foxy = ({ color = COLORS.blue3, size = 100 }: Props) => (
  <Svg viewBox="0 0 73.25 70" height={size} width={size * 1.0464}>
    <Path
      fill={color}
      d="M57.48 46.65l2.74-1.21c.82-.36 1.37-.42 1.08-1.32-.15-.46-.89-.73-.65-1.36.29-.79 1.35-.34 1.88-.19-.37-1.65-2.34-6.58 1.34-5.7 2.07.49 3.26 3.82 3.94 5.55-.25.48-.1.67.45.59a1.23 1.23 0 01.85.55c.53.67.35.74-.15 1.19-1 .9-2.74 1.43-3.94 2.07s-1.29 1.26-.79 2.54c.22.55 0 .49.53.77s1.7-.12 2.3-.29c1.08-.31 2.1-.12 3.18-.44s2.37-.67 2.88.7-.41.93-1.3 1.43a12.77 12.77 0 01-3.74 1c-1.26.31-2.39-.1-3.64.11-.49.08-1.78.09-2.09.56s.4 1.46.4 1.8c.37 1.84-1.43.81-1.73 2.19s1.82.94.67 2.33c.89.36 2.75.9 2.31 2.25s-2.25.76-3 1.33-.52 1.37-1.71 1.56c-1.47.24-3.14-.52-4.42-1.15.62 1.92-1.67 2-3.07 1.65-1.8-.52-2.9-1-3.16-3l-1.59.3c1.07 1.92-1.64 4.3-3.43 4.65A12.23 12.23 0 0135.81 66c-1-.52-1.25-1.29-.12-1.67s2.73.26 3.9.61a3.92 3.92 0 003.44-.07c.73-.38 2.93-1.33 3.25-2-.91-.15-.77.28-1.46.58a9.37 9.37 0 01-3.09.29c-2.07.08-4.17.24-6.22.31-2.31.07-3.08-.57-4.12 1.86-.28.67-.5 2.25-1.52 2-.68-.17-.82-1.12-1.08-1.64a6.55 6.55 0 01-2.24.84c-.69 0-1.13-.54-1.76-.5-1.32.09-2.52 1.92-3.36 2.73a2.21 2.21 0 01-2.84.36 2 2 0 01-1-1.53c0-.47.74-1.2.34-1.54-1.32 1-2.9 1.74-4.16.13s1.13-2.67 2.32-3.6a13.2 13.2 0 012-1.75c.94-.44 1.78.13 2.75-.38a34.74 34.74 0 015.47-2.79 10.14 10.14 0 00-4.56-.69c-1.15 0-3.22 1-4.29.66-1.25-.43-.5-1.39.34-1.87a8 8 0 012.15-.84c.59-.14 1.31 0 1.8-.47a22.86 22.86 0 00-6.76-.47 28.77 28.77 0 00-3.07.46c-1 .18-2.75.17-3.62.76a2.31 2.31 0 012.16 2.48c1.56-.11 3.38 0 3.35 2.05a8 8 0 01-2.4 4.89c-.86.66-2.78.61-3.24-.51-.36-.88 1.89-4.44 1.4-4.66-.53 1-.95 2.43-2.2 2.78a2.41 2.41 0 01-2.62-.94c-.55-1.15.67-2.68 1.19-3.63s.85-2.06 2-2.35c-.16-.46-2.72-.2-3.34-.22-1.18 0-2.05.09-3-.64 1.83-1 4.47-1.21 6.53-1.66A50.31 50.31 0 0115.36 52a25.72 25.72 0 016.68.32c2.05.45 4.76 1.9 6.85 1.26-3.33-1.41-7-2.8-10.6-2.94-1 0-3.41.82-4-.55s2.13-1.91 3.1-2c3.89-.24 7.08 1.18 10.56 2.66.66.28 1.28.76 1.84.48.72-.37.6-1.38.72-2 .3-1.55 1-3 1.08-4.64s-1.13-1.14-2-2.05c-.22-.23-.28-.52-.56-.7-.62-.41.19-.18-.86-.1a10.37 10.37 0 01-2.62.29 5.56 5.56 0 01-3.52-2.14c-.39-.55-.38-1.32-.71-1.82s-1-.49-1.67-.77c-1.62-.73-.93-1.89.46-2.31a12.83 12.83 0 015.64-.08 13.92 13.92 0 014.31 1.17c1.36.75 1.57 2.27 2.47 3.38.52.64 1.27.93 1.55 1.75.09.27 0 .59.11.86.23.72.15.39.74.94 1.05 1 .65 2.23.65 3.47a14.34 14.34 0 01-.4 2.36c0 .25.16.39.09.67s-.55.72-.67 1.2a8.42 8.42 0 00-.26 2.43c.18.66 1 1.26 1.48 1.74 1-1.64 1.38-3.12 3.46-3.73 1.41-.42 4.52.08 5.4 1.42.4.62.66 1.73 1 2.44a3.41 3.41 0 01.07 2.99 4.18 4.18 0 01-1.45 2.1c-.78.58-1.66.51-2.49.9 1.39.53 4.39-.09 5.83-.54 1-.3.84-.5 1-1.42a3.68 3.68 0 011.22-2.15 5.19 5.19 0 00-2.82 0 4.45 4.45 0 00.71-2.31c0-.7-.31-1.41-.32-2.12 0-1.1.81-2.34 0-3.41-.35-.45-1-.55-1.46-.93a3.15 3.15 0 01-.87-1.45 5 5 0 01.34-4.12c.2-.45.57-1 .29-1.47s-1-.27-1.26-.78c-.47-1 .8-2.81 1.45-3.47 1.74-1.76 4-3.91 6.54-4.31a13.59 13.59 0 014.17.28 5.48 5.48 0 011.1.13 7.43 7.43 0 011.24.57c.48.3.84.46 1 1.06.33 1.54-.82 1.49-1.77 1.14s-.65-.31-1.49-.07c-.13 0-.9.27-.9.28s0 .62-.16.8a7.59 7.59 0 01-2.2 1.86 3.67 3.67 0 01-1.72.41c-.82 0-1.79-.52-2.52-.45-1 .09.24 1.87.6 2.46.73 1.2.24 2.23.57 3.58a5.79 5.79 0 01.37 2.43c-.09.7-.67 1.69-.51 2.36a13.06 13.06 0 00.68 1.21c.52.7.68.5 1.46 0 1.38-.94 1.15-2 2.1-3.27.58-.75 2.79-2.72 3-.65zm1.7 8.21c-.24-1.56-1.33-.94-2.63-.73s-3 .19-3.13 1.92c-.09 1.36 2.23 1.34 3.39 1.34s1.77-1.46 2.37-2.53zm-29.3 7.47c-.53-.43-1.75-1.75-2.44-1.83-1-.12-2.86 1.15-3.75 1.52.43.86 1.17.36 1.91.42s1 .41 1.45 1 .31 1.14 1.22.88c.73-.17 1.23-1.4 1.61-1.99zm21.45-1.43l3.08 2.1a2 2 0 011.34-2.47c1.18-.35 2.24.37 3.22.93-.34-1.67-2-1.39-3.29-1.36-1.12.02-3.78-.46-4.35.8zm9.76-12.46c-.62.24-4.59 2.4-4.37 3 .12.33 5.1-.79 5.69-.89zm-21.4 12.68c.75-.82-.09-.77-.84-.9s-1.82-.85-2.4-.62-.6.71 0 1.1c.7.54 2.37.35 3.24.42zm-4.38-4.94c-.77-.47-.16.8 0 1 .25-.25.06-.69 0-1z"
    />
    <Path
      fill={color}
      d="M62.63 21.74c-2 .6-3.84 1-5.51-.47-.34-.31-.26-.61-.73-.75s-1 .17-1.41.06a1.26 1.26 0 01-1-1.79c.37-1 1.57-1.52 2-2.52a7.5 7.5 0 011.44-2.36 12.14 12.14 0 011.72-2c.78-.54 1.65-.33 2.5-.59a2.3 2.3 0 01.82-3.18c.89-.51 1.85-.09 2.74-.43s.9-1.07 1.34-1.77 1.57-1.33.57-2c-.59-.42-1.81.2-2.44.5a10.55 10.55 0 00-3 2.42c-1.57 1.59-3.31 2.63-4.66 4.47-1.58 2.16-3.92 3.76-5.4 6-.37.56-1.11 2.71-2.1 1.4-.54-.72.34-1.9.75-2.53a54.94 54.94 0 015.4-6.2c1.76-2 4.61-3.6 5.85-6-2.93.49-5.54 1.95-8.28 3s-5.14 2.88-7.92 3.91a15 15 0 01-3.56 1.36c-1.93.18-1.16-1.31-.17-2.06a4 4 0 001.17-1.13c.4-.64.5-1.46.92-2.1 1.11-1.67 1.61-.37 2.08.87a61.5 61.5 0 018.51-4.46C57.15 2 60.52 1.58 63.53.58c1.5-.5 2.54-.95 4-.13a5.53 5.53 0 012.32 3c.77 2.54-.51 6-1.66 8.22-.57 1.12-1.1 2.74-2 3.64-.37.35-.84.41-1.1.87a5.52 5.52 0 00-.2 2.43 9.16 9.16 0 01-2.35 6.85c-1.43 1.6 1.94 5.08 1.5 7.41a5.64 5.64 0 01-1.8 2.79c-.36.32-.63.7-1.18.63s-.93-.57-.57-1.07c.24-.32 1-.25 1.28-.56a3.5 3.5 0 00.48-1.66 4 4 0 00-.28-2.54c-.3-.61-.8-.82-1.18-1.33a5.58 5.58 0 01-.44-3.94c.4-1.42 1.87-1.96 2.28-3.45zM10.98 5.8a6 6 0 011.54 1.64c.12.24 0 .5.15.77a5.33 5.33 0 001.16 1L18.08 13c1.34 1.17 2.63 2.15 3 4 .24 1.43-.82 2.91-2.09 1.42-1-1.17-1.44-2.48-2.72-3.49s-2.88-2.17-4.28-3.36a46.65 46.65 0 01-4.26-3.82 11.88 11.88 0 00-4.36-2.8c-.41.85-.86 2.73-.06 3.5s2 0 2.79.1c1.15.11 1.75.89 2.59 1.58s2.17 1.32 2.73 2.34c.46.85.46 1.33 1.33 1.92a3.83 3.83 0 011.83 2.23c.43 1.26-.18 1.5-1.07 2.26s-1.34 1.47-2.54 1.52-2.22-.86-3.22-1.6-2-1.93-1.41-.09a7.11 7.11 0 001.2 2.67c.53.62 2.13 1.22 2.24 2.09.14 1.09-1.26 1.13-1.94.91a5.24 5.24 0 01-2.73-2.33 14.36 14.36 0 01-1.22-3 4.23 4.23 0 01-.11-1.7 17.08 17.08 0 00.55-1.68c-.22-.6-1.42-1.3-1.84-1.92a17.41 17.41 0 01-1.34-2.48 8.46 8.46 0 01-.61-5.8c.39-2 1-4.05 3.26-4.48a7.75 7.75 0 015.76 1.62c.59.49 1.15 1.16 2 1.21s1.35-.9 2.35-.75 1.12.93 1.84 1.23 1.46-.07 2.1.71c.3.38.27.87.55 1.25a3.41 3.41 0 001.21.8c.67.37 2 1.4 2.69 1.45s1.11-.92 2 0c.73.75 1.08 2.05 1.74 2.91a8.92 8.92 0 01-1.94.77c-.75.33-1 .58-1.86.12s-1.37-1.1-2.06-1.57-1.66-.93-2.4-1.49c-1-.73-1.82-2.32-3-2.56-.31-.06-.61.22-1 .14s-.41-.31-.63-.45a2.65 2.65 0 00-2.17-.58zM9.14 4.71c-.57-1.32-1.56-1.77-2.28-1.16zM5.75 41.92c1.47-.24 3.22 0 2.7 2-.18.7-1 1.55-.73 2.21.36.84 1.95 1 2.26 2 .44 1.42-1.59 3.86-3 4-2.49.22-1.48-2-1.08-3.25-1.1.38-3.11 1.51-4-.05-.72-1.32 1.34-2.38 1.21-3.74-.94.29-2.89-.34-3.11-1.49s2-2.25 2.78-2.41c-.09-.34-1.39-.57-1.73-1a1.83 1.83 0 01.21-2.24c1-1.53 2.53-2.78 3.56-4.35a7.89 7.89 0 011.23-1.9 6.23 6.23 0 013-1.49c2.24.14-.16 2.31.42 3.29 1.09-.73 3.45-1.63 3 .73-.11.59-1 1.22-.9 1.82.13 1 .77.74 1.38.5s1.34-.88 2-.84a1.13 1.13 0 011 1.68c-.3.54-1 .63-1.57.82a4 4 0 00-1.32.52c-.51.53-.45-.3-.13.8s2.24 2.23 1.94 3.49a2.2 2.2 0 01-3.16 1.3A7.47 7.47 0 019.62 43c-.37-.52-.16-1.21-.36-1.79s-.87-1.35-.45-1.89 2-.33 2.63-.7c-.48-.21-1-.1-1.46-.34-.67-.34-1-1.27-1.81-1.44s-3.06 2.33-3.31 3.22c2.69 1.19-.64 2.32-.75 4.18a16 16 0 001.64-2.32zM48.45 26.19c-.49 1-.84 1.34-.61 2.41a11 11 0 01.15 3.4c-.2 2.06-2.64 3.3-3.3.8-.28-1.08 0-2.32-.29-3.44a3.3 3.3 0 01.12-2.75c.71-1.19 3.7-2.55 3.93-.42zM30.48 34.36c-1.66.08-4.18-4.37-3.48-5.77.37-.74.72-.43.68-1.13a.45.45 0 01-.45-.44l.29-.33a1.41 1.41 0 01.64-.88c1.82-.93 2.55 2.76 3 3.62s0 1.55.25 2.6c.17.88.68 2.41-.93 2.33zM9.09 26c-.39 1.28-.27 2.38-1.47 3.18-.58.39-1 .7-1.7.31a1 1 0 01-.27-1.61c.31-.3.75-.2 1.06-.56.17-.2.23-.8.44-1.09.6-.79 1.69-1.5 1.94-.23zM29.22 12c0 2.05-2.48 1.83-2.91.09-.7-2.83 3.14-2.45 2.91-.09zM32.95 12.28c.55-.85 2.41-2 2.55-.23.12 1.53-1.17 1.79-2.16 1.16-.7-.43-.43-.31-1.24-.29-.64 0-1.11-.13-1.09-.91 0-.41.4-1.14.93-1.1s.81 1.09 1.01 1.37z"
    />
    <Path
      fill={color}
      d="M38.89 13.54c-1.85 0-.4-2.72.86-2.06 1 .52.13 2.09-.86 2.06zM31.82 13.61c2.13 1.05-.72.88 0 0z"
    />
  </Svg>
)

export default Foxy
