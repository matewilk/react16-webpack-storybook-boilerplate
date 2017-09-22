export const NEXT_STEP = 'NEXT_STEP';
export const PREV_STEP = 'PREV_STEP';

export function nextStep () {
  return { type: NEXT_STEP }
}

export function prevStep () {
  return { type: PREV_STEP }
}