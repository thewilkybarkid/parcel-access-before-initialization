import {ClassTwo} from './two';

function decorator() {
}

export class ClassOne {
  // @ts-ignore
  @decorator(ClassTwo)
  two?: ClassTwo;
}
