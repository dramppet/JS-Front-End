function solve(count_group, type_group, day_of_week) {

    let price = 0
    let amount = 0

    if (day_of_week == "Friday") {

        switch (type_group) {
            case 'Students':
                price = 8.45;
                break;
            case 'Business':
                price = 10.90;
                break;
            case 'Regular':
                price = 15;
                break;
        }

    } else if (day_of_week == "Saturday") {
        switch (type_group) {
            case 'Students':
                price = 9.80;
                break;
            case 'Business':
                price = 15.60;
                break;
            case 'Regular':
                price = 20;
                break;
        }
    } else if (day_of_week == "Sunday") {
        switch (type_group) {
            case 'Students':
                price = 10.46;
                break;
            case 'Business':
                price = 16;
                break;
            case 'Regular':
                price = 22.50;
                break;
        }

    }

    if (type_group == 'Students' && count_group >= 30) {
        discount = (count_group * price);
        amount = discount - (discount * 0.15);
    } else if (type_group == 'Business' && count_group >= 100) {
        amount = (count_group - 10) * price;

    } else if (type_group == 'Regular' && (count_group >= 10 && count_group <= 20)) {
        discount = (count_group * price);
        amount = discount - (discount * 0.05);
    } else {
        amount = count_group * price
    }


    return console.log(`Total price: ${(amount).toFixed(2)}`)
}

solve(30, "Students", "Sunday");
solve(40,'Regular', 'Saturday')

