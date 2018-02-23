module.exports =
    function getZerosCount(number) {
        // your implementation
        var arr = [];
        var res = 0;
        for (i = 5; i <= number; i = i + 5)
            res = res + getFive(i);

        function getFive(num) {
            for (var i = 1;; i++) {
                num = num / 5;
                if ((num < 5) || (num % 5 != 0)) {

                    return i;
                    break
                }
            }

        }




        return res;
    }