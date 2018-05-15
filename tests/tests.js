var expect = require("chai").expect;

var multiply = function (x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error("x or y is not a number.");
    }
    else return x * y;
};

describe("Multiply", function () {
    it("should multiply properly when passed numbers", function () {
        expect(multiply(2, 4)).to.equal(8);
    });

    it("should throw when not passed numbers", function () {
        expect(function () {
            multiply(2, "4");
        }).to.throw(Error);
    });
});

// all of these should fail
describe("averageYesterday", function () {
    it("should throw error when result is false", function () {
        expect(averageYesterday(response, value)).to.equal(NaN);
    })

    it("N should inscrease during for loop", function () {
        expect( function () {
            var N = 0;
            for (let index = 0; index < 1001; index++) {
                N ++
            }
            console.log(N)
        }).to.equal(1000);
    })

    it("should create todays date", function () {
        expect((new Date()).to.equal(new Date()))
    })
})









//Function that will get the averages for the 7 tracked values from yesterday
function averageYesterday(response, value) {
    
    // today's date
    let yesterday = new Date('2018-05-11');

    let N = 0; // how many days to average over
    let avgYesterdayValue = 0;
    console.log(response);
    for (let i = 0; i < response.length; i++) {
        // create date object for this reponse
        var date = new Date(response[i].Date);

        // if this response has data from yesterday, then sum
        if (date.getTime() === yesterday.getTime()) {
            avgYesterdayValue += response[i][value];
            N += 1;
        }
    }
    badGlobalArrayYesterday.push(avgYesterdayValue / N);
    return avgYesterdayValue / N;
}
