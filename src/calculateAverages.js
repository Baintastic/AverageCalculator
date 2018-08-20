function Calculator() {
    function average() {
        let sum = 0;
        let numbers = arguments;
        if (NoArguments()) {
            return 0;
        }
        let average = calculateAverage();
        return average;

        function calculateAverage() {
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            let average = sum / numbers.length;
            return average;
        }

        function NoArguments() {
            return numbers.length == 0;
        }
    }

    return {
        average
    }
}


