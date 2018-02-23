module.exports =
    function getZerosCount(number) {
        // your implementation
        var arr = [];
        var res = 0;
        for (i = 1; i <= number; i++)
            if (i % 5 == 0)
                arr.push(i);

        function getFive(num) {
            var inFive = 0;
            for (var i = 1; 1 == 1; i++) {
                num = num / 5;
                if ((num < 5) || (num % 5 != 0)) {

                    return i;
                    break
                }
            }

        }

        for (i = 0; i < arr.length; i++)
            res = res + getFive(arr[i]);

        console.log(res);

        return res;
    }