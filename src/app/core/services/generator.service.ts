export class GeneratorService {

  constructor(private n: number) { }
  generate(): string {
    let result = '';
    for (let i = 0; i < this.n; i++) {
      result += String.fromCharCode(Math.floor(Math.random() * 56 + 65));
    }
    return result;
  }
}

export function generatorServiceFactory(n: number) {
  return () => {
    return new GeneratorService(n);
  };
}

