// If you have any types that are SHARED BY MANY COMPONENTS,put them here

export type Fish = {
  name: string;
  url: string;
};

export interface CurrentResult {
  incorrectCount: number;
  correctCount: number;
}
