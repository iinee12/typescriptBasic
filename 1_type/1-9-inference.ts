{
    /**
     * Type Inference 타입 추론
     */

     let text = 'hello'  // 선언하면서 바로 타입이 정해짐
     //text = 0        그래서 숫자는 할당이 불가함

     function print ( message = 'dd' ){     //함수 안에 디폴트 param을 지정해도 타입이 추론됨         
         console.log( message )
     }
     print('Hello')
     //print(0)

     // 타입 추론을 이용해도 되지만
     // 가독성과 유지보수성을 고려해서 타입을 명시하는게 좋다


    
}