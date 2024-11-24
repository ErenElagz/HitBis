import {Dimensions} from 'react-native';

// Get device screen width
const {width: SCREEN_WIDTH} = Dimensions.get('window');

// Define a base screen width for scaling (e.g., iPhone X: 375px width)
const BASE_WIDTH = 360;
const BASE_REM = 16;

// Calculate REM based on the screen width
export const rem = (size: number): number => {
  return (SCREEN_WIDTH / BASE_WIDTH) * size;
};

// Commonly used rem sizes
const RemSizes = {
  r0_25: rem(BASE_REM / 4),
  r0_5: rem(BASE_REM / 2),
  r1: rem(BASE_REM),
  r1_25: rem(BASE_REM * 1.25),
  r1_5: rem(BASE_REM * 1.5),
  r1_75: rem(BASE_REM * 1.75),
  r2: rem(BASE_REM * 2),
  r2_5: rem(BASE_REM * 2.5),
  r3: rem(BASE_REM * 3),
  r4: rem(BASE_REM * 4),
};

export default RemSizes;
