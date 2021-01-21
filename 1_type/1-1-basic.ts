{
  /**
   * JavaScript
   * Primitive : number, string, boolean, bigint, symbol, null, undefined
   * Object : function, array....
   */

  //number
  const num: number = 0;

  //string
  const str: string = "hello";

  //boolean
  const boal: boolean = true;

  //undefined
  let age: number | undefined;
  age = 10;
  age = undefined;

  function find():number|undefined{
      return undefined
  }

  //null
  let person: string | null;
  age = 10;
  age = null;

  //unknown    절대 쓰지말자, Javascript를 같이 쓰기 위해 javascript lib에서 받는 값이 먼지 모를때 쓰임
  let notSure : unknown
  notSure = 'dd'
  notSure = 0



  //any    이것도 안쓰는 것이 좋음, 정말 타입을 모르는 것을 담을 때 어쩔 수 없이 써야한다.
  let anything : any
  anything = 'hello'
  anything = 0


  //void     return이 없으면 자동으로 void가 선언됨 그래서 함수에 명시해 주면 좋음

  function print():void {
      console.log('hello World')
  }


  //never     exception 처리를 할때 쓰임 (함수에서 절대 리턴되지 않을때 가독성을 위해 쓴다.)
  function thoewError( message:string ):never{
    throw new Error(message)
  }

  //object      모든 객체 형태를 다 받을 수 있음, object의 any 같은 녀석임 안쓰는 것이 좋음
  let obj :object

  function acceptSomeObject( obj:object ){

  }
  acceptSomeObject({name:'jingo'})
  acceptSomeObject({my:'soohyun'})




}
