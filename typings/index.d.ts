declare module 'confusables' {
  interface {
    remove(stringToClean: string): string;
    obfuscate(stringToRandomize: string): string;
  }
}
