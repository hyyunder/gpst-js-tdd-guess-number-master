const main = require('../main/main');

describe('main',()=>{
    describe('guess number',function(){
        it('should return 4A0B',function(){
            let result='4A0B';
            let user_input=1234;
            let system=1234;
            expect(main(user_input,system)).toEqual(result);
        });

        it('should return 1A2B',function(){
            let result='1A2B';
            let user_input=4216;
            let system=1234;
            expect(main(user_input,system)).toEqual(result);
        })

        it('should return 0A4B',function(){
            let result='0A4B';
            let user_input=4321;
            let system=1234;
            expect(main(user_input,system)).toEqual(result);
        })
    })

});