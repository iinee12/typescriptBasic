{
  /**
   * Type Assertions
   */

  function jsStrFunc(): any {
    return "dd";
  }

  const result = jsStrFunc();
  (result as string).length; //casting이 가능함, 100퍼 돌아오는 값의 타입을 확신할때만 써야함

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2);
}
