import IProject from './IProject'

export default class Project implements IProject {
  constructor(
    public id: number,
    public name: string,
  ) { }
}
