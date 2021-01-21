{
    /**
     * Union Types : OR
     */

     type Direction = 'left' | 'right' | 'up' | 'down'
     function move( direction : Direction ){
         console.log(direction)
     }
     move('down')

     type TileSize = 8 | 16 | 32
     const tile :TileSize=16

     //function : login -> success, fail

     type SucessState = {
         response:{
             body:string
         }
     }

     type FailState = {
         reason:string
     }

     type LoginState = SucessState | FailState

     function loginunion(  ) : LoginState {
        return 
        response: {
            body:'login'
        }
     }

     function printLoginStateunion ( state:LoginState ){
         if( 'response' in state )
         console.log(  )
     }
}