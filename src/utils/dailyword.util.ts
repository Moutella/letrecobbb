import { DailyWord, DailyWordDatabase } from "../models";

const MILISSECONDS_IN_A_MINUTE = 60 * 1000;

export function getToday(): string {
  const todayDate = new Date();
  const correctedDate = new Date(
    todayDate.valueOf() - (todayDate.getTimezoneOffset() * MILISSECONDS_IN_A_MINUTE)
  );

  return correctedDate.toISOString().split('T')[0];
}

export function getDailyWord(): DailyWord {
  return dailyWords['0'];
}

export const dailyWords: DailyWordDatabase = {
  '0': { edition: '001', date: '0', word: 'JADE' },
}