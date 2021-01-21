{
    /**
     * Enum
     */

    //Javascript Enum 지원 안함
    const MAX_NUM = 6
    const MAX_STUDENT = 10
    const MONDAY =0
    const TUSEDAY = 1
    const WEDNESDAY = 2

    const DAYS_ENUM = Object.freeze( { "MONDAY":0, "TUSEDAY":1, "WEDNESDAY":2} )
    const dayofToday = DAYS_ENUM.MONDAY

    enum Days{
        Monday,
        TuseDay,
        WednesDay,
        ThursDay,
        Friday
    }
    // 0부터 자동으로 세팅됨


    
    enum Daysss{
        Monday = 1,
        TuseDay,
        WednesDay,
        ThursDay,
        Friday
    }
    // 1부터 자동으로 세팅됨


    /**
     * TypeScript에서는 Enum을 안쓰게 좋음
     * 타입이 정확하게 보장되지 않음
     * 
     */
    let day = Days.Friday
    day = 10

    //위와 같이 다른 숫자도 할당이 가능함
    //union Type으로 대체하여 사용 가능

   
}