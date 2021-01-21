{
    // Intersection Type : &

    type Student ={
        name : string
        score : number
    }

    type Worker = {
        employeeId :number
        work:()=>void
    }

    function internWork( person : Student & Worker ){
        console.log( person.employeeId, person.name )
    }
    internWork({
        name : 'jinho',
        score:10,
        employeeId:200,
        work:()=>alert()
    })

}