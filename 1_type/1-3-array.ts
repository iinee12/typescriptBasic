{

    //Array

    const fruits : string [] = ['dd', 'sss']
    const scores: Array<number> = [1,2,4,5]
    function printArray ( fruits:readonly string[] ) :void {

    }

    // Tuple -> interface, type alias, object
    let student : [string, number];
    student = [  'name', 0]
    const [ name, age ] = student
    //거의 안쓰는 타입, React의 useState에서만 쓰임

}