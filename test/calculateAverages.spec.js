describe("Calulator", function () {
		
    describe("Given no arguments", function () {
        it("return 0", function() {
            // arrange
            var sut = new Calculator();
            // act           
            var actual = sut.average();
            // assert       
            expect(actual).toBe(0);
            });
    });

    describe("Given one argument", function () {
        it("return the number in the argument", function() {
            // arrange
            var sut = new Calculator();
            // act           
            var actual = sut.average(23);
            // assert      
            expect(actual).toBe(23);
            });
    });

    describe("Given two arguments", function () {
        it("return the average", function() {
            // arrange
            var sut = new Calculator();
            // act           
            var actual = sut.average(1,3);
            // assert      
            expect(actual).toBe(2);
            });
    });

    describe("Given an arbitary number of arguments", function () {
        it("return the average", function() {
            // arrange
            var sut = new Calculator();
            // act           
            var actual = sut.average(1,2,3,4,5);
            // assert  
            expect(actual).toBe(3);
            });
    });

});