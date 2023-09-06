/*
Тролли атакуют ваш раздел комментариев!

Обычный способ справиться с этой ситуацией — удалить все гласные из комментариев троллей, нейтрализуя угрозу.

Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, в которой удалены все гласные.

Например, строка «Этот сайт для неудачников, LOL!» станет «Ths wbst s fr lsrs LL!».

Примечание: для этой ката y не считается гласной.
*/


export class Kata {

  list: string[];

  constructor() {
    this.list = ['a', 'e', 'i', 'o', 'u', 'y'];    
  }

  disemvowel(str: string): string {
    const s = '*';

    return str
            .split('')
            .map((item: string) => {
              let res = item;
              const idx = this.list.indexOf(item.toLocaleLowerCase());

              if(idx > 0) {
                 res = '*';
              }

              return res;
            })
            .filter((item: string) => item !== s)
            .join('');
  }
}



const res = new Kata().disemvowel('This website is for losers LOL!');
console.log('res:', res); /// Ths wbst s fr lsrs LL!
