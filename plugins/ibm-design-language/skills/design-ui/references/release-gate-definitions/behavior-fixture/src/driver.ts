export type Driver = {
  focus(selector: string): Promise<void>;
  tab(): Promise<void>;
  press(key: string): Promise<void>;
  type(text: string): Promise<void>;
  settle(): Promise<void>;
  activeMatches(selector: string): Promise<boolean>;
  attr(selector: string, name: string): Promise<string | null>;
  valueOf(selector: string): Promise<string>;
  visible(selector: string): Promise<boolean>;
  longEndVisible(): Promise<boolean>;
  fieldLabeled(): Promise<boolean>;
  operableOutside(): Promise<string[]>;
  rootLang(): Promise<string>;
  rootDir(): Promise<string>;
  rootWidth(): Promise<number>;
  englishCopy(): Promise<boolean>;
};
