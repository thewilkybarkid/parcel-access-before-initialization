import {ClassOne} from './one';

function decorator() {
}

export class ClassTwo {
  // @ts-ignore
  @decorator(ClassOne)
  one?: ClassOne;
}
