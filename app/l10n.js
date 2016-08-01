/**
 * Created by Lebedev on 01.08.2016.
 */

let chars = [ 'а', 'я', 'ё', 'е' ];
let ruCollator = new Intl.Collator("ru");
console.log(chars.sort(ruCollator.compare)); // [ 'а', 'е', 'ё', 'я' ]

let ruNumberFormat = new Intl.NumberFormat('ru-RU');
console.log(ruNumberFormat.format(1234567.89));

let ruCurrencyFormat = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' });
console.log(ruCurrencyFormat.format(100200300.40));

let ruDateTimeFormat = new Intl.DateTimeFormat('en-US');
console.log(ruDateTimeFormat.format(new Date('2016-08-01')));