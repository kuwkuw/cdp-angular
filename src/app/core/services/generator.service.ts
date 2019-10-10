export class GeneratorService {

  // Параметр из конструктора переместить в метод generate
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
  return new GeneratorService(n);
  // а тут вергуть функцию в параметрах которой будет GeneratorService
  // и внутри функции вызвать метод generate(n)
}

