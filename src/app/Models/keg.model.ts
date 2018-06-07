export class Keg {
  constructor (
    public name: string,
    public brewery: string,
    public type: string,
    public price: number,
    public alcoholContent: number,
    public pints: number = 124
  ) { }
}
