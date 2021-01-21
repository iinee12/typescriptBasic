{
  // javascript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  //typescript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // js
  function jsFetchNum(id) {
    //code ...
    //code ...
    //code ...

    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // ts
  function fetchNum(id: string): Promise<number> {
    //code ...
    //code ...
    //code ...

    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //Js -=> Ts
  //Optional parameter
  // param을 두개 받기도 하고 하나 받기도 하고 싶을 때 쓰는 문법
  // option 으로 받고자 하는 param에 ?를 붙여서 사용

  function printName( firstName:string , lastName?:string ){
      console.log(firstName)
      console.log(lastName)
  }

  printName('jung', 'jinho')
  printName('jung')
  printName('jung', undefined)
  printName('jung', null)


  //Default parameter

  function printMessage( message:string = 'default' ){
      console.log(message)
  }
  printMessage()



  //Rest parameter

  function addNumbers( ...numbers: number[] ) :number {
    return numbers.reduce(( a , b)=>a+b )
  }
  addNumbers( 1,3,4 )





}
