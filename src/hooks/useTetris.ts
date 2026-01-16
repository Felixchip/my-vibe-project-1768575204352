

[SYSTEM INIT: Show code, don't just describe it.
Create a .cursorrules file with the following rules]
1. Use Tailwind CSS
2. Mobile First Design
3. Use TypeScript
4. No inline styles
5. Use meaningful variable names
6. Comment complex logic
7. Keep functions under 20 lines
8. Use async/await over promises
9. Animation Library: Incorporate Framer Motion for all transitions and animations.
10. Spacing: Use a consistent spacing scale (multiples of 4px) for all margins and padding.import { useState, useCallback, useEffect, useRef } from 'react';
import { type Difficulty, getBaseSpeedForDifficulty } from '@/components/DifficultySelector';

export type TetrominoType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';

export interface Position {
  x: number;
  y: number;
}

export interface Tetromino {
  type: TetrominoType;
  shape: number[][];
  position: Position;
}

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const TETROMINOES: Record<TetrominoType, number[][]> = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
};

const TETROMINO_COLORS: Record<TetrominoType, string> = {