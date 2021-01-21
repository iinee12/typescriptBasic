{
    type SucessState = {
        result:'sucess'
        response:{
            body:string
        }
    }

    type FailState = {
        result:'fail'
        reason:string
    }

    type LoginState = SucessState | FailState

    function login(  ) : LoginState {
       return 
       response: {
           body:'login'
       }
    }

    function printLoginState ( state:LoginState ){
        if( state.result==='sucess' ){
            console.log( state.response.body )
        }else{
            console.log(state.reason)
        }
    }
}