//==============================================================задача 1 js

{console.log("=========задача 1=========")
    let a = 10
    b = 3;

    console.log(a % b);
}
//==============================================================задача 2 js
{console.log("=========задача 2=========")

let a = 9;
let b = 3;
let rest = a % b;
if (rest != 0) {
    console.log('Ділиться з залишком ' + rest);
} else {
    console.log('Ділиться, результат ділення: ' + (a / b));
}
}

//==============================================================задача 3 js
{console.log("=========задача 3=========")

    let st = Math.pow(2, 10);
    console.log(st)
}

//==============================================================задача 4 js
{console.log("=========задача 4=========")

    let koren = Math.sqrt(245)
    console.log(koren);
}

//==============================================================задача 5 js
{console.log("=========задача 5=========")

    let array = [4, 2, 5, 19, 13, 0, 10];
    let summ = 0;
    for (let i = 0; i < array.length; i++) {
        summ += Math.pow(array[i],3);
    }
    console.log(Math.sqrt(summ));

}


//==============================================================задача 6 js
{console.log("=========задача 6=========")

    let koren = Math.sqrt(379)
    console.log(Math.round(koren))
    console.log(koren.toFixed(1))
    console.log(koren.toFixed(2))

}


//==============================================================задача 7 js
{console.log("=========задача 7=========")

    let koren = Math.sqrt(587)
    // console.log(Math.ceil(koren))
    // console.log(Math.floor(koren))
    let object = {'ceil': Math.ceil(koren), 'floor': Math.floor(koren)}
    console.log(object)
}

//==============================================================задача 8 js
{console.log("=========задача 8=========")

    console.log('Max value: ');
    console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
    console.log('Min value: ');
    console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

}

//==============================================================задача 9 js
{console.log("=========задача 9=========")

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(getRandomInt(1, 100));

}

//==============================================================задача 10 js
{console.log("=========задача 10=========")

    let array = [];
    for (i = 0;  i < 10; i++) {
        array[i] = Math.round(Math.random() * (100 - 1 + 1)) + 1;
    }
    console.log(array);

}

//==============================================================задача 11 js
{console.log("=========задача 11=========")

    let a = 10
        b = 4
    console.log(Math.abs(a-b));

}

//==============================================================задача 12 js
{console.log("=========задача 12=========")

    let a = 6
        b = 1
        c = Math.abs(a-b)
    console.log(c)


}

//==============================================================задача 13 js
{console.log("=========задача 13=========")


    let arr = [12, 15, 20, 25, 59, 79]
    function average(arr) {
        return arr.reduce((a, b) => (a + b)) / arr.length;
    }
    console.log(average(arr))
}

//==============================================================задача 14 js
{console.log("=========задача 14=========")

let factorial = 1
    let num = 5;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    console.log(factorial)
}

//==============================================================задача 1. посилання 2 js
{console.log("=========задача 1. посилання 2=========")

    let js = 'js'
    console.log(js.toUpperCase());

}

//==============================================================задача 2. посилання 2 js
{console.log("=========задача 2. посилання 2=========")

    let js = 'JS'
    console.log(js.toLowerCase());

}

//==============================================================задача 3. посилання 2 js
{console.log("=========задача 3. посилання 2=========")

    let str = 'я учу javascript!';
    console.log(str.length);

}

//==============================================================задача 4. посилання 2 js
{console.log("=========задача 4. посилання 2=========")

    let str = 'я учу javascript!'
    console.log('Вивід слова "учу":')
    console.log(str.substr(2, 3));
    console.log(str.substring(2, 5));
    console.log(str.slice(2, 5));

    console.log('Вивід слова "javascript":');
    console.log(str.substr(6, 10));
    console.log(str.substring(6, 16));
    console.log(str.slice(6, 16));

}

//==============================================================задача 5. посилання 2 js
{console.log("=========задача 5. посилання 2=========")

    let string = 'я учу javascript!'
    console.log(string.indexOf('учу'));

}

//==============================================================задача 6. посилання 2 js
{console.log("=========задача 6. посилання 2=========")

    let str = 'я учу javascript 1234567890!'
    let n = 22;
    let result = "";
    if (n < str.length) {
        result = str.substr(0, n) + "...";
    } else {
        result = str;
    } console.log(result);

}

//==============================================================задача 7. посилання 2 js
{console.log("=========задача 7. посилання 2=========")

    let string = 'Я-учу-javascript!';
    console.log(string.replace(/-/g,'!'));

}

//==============================================================задача 8. посилання 2 js
{console.log("=========задача 8. посилання 2=========")

    let string = 'я учу javascript!'
    let arr = string.split(' ', 3);
    console.log(arr);

}

//==============================================================задача 9. посилання 2 js
{console.log("=========задача 9. посилання 2=========")

    let string = 'я учу javascript!'
    let arr = string.split('');
    console.log(arr);

}

//==============================================================задача 10. посилання 2 js
{console.log("=========задача 10. посилання 2=========")

    let date = '2025-12-31';
    let arr = date.split('-');
    let newDate = arr[2] + '.' + arr[1] + '.'+arr[0];
    console.log(newDate);

}

//==============================================================задача 11. посилання 2 js
{console.log("=========задача 11. посилання 2=========")

    let array = ['я', 'учу', 'javascript', '!']
    console.log(array.join('+'))

}

//==============================================================задача 12. посилання 2 js
{console.log("=========задача 12. посилання 2=========")

    let string = 'я учу javascript!'
    console.log(string[0].toUpperCase() + string.substr(1));
}

//==============================================================задача 13. посилання 2 js
{console.log("=========задача 13. посилання 2=========")

    let string = 'я учу javascript!'
    let arr = string.split(" ");
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    } console.log(string = arr.join(" "));

}

//==============================================================задача 14. посилання 2 js
{console.log("=========задача 14. посилання 2=========")

    let string = 'var_test_text'
    let array = string.split("_");
    for (let i = 1; i < array.length; i++) {
        array[i] = array[i].slice(0, 1).toUpperCase() + array[i].slice(1);
    } string = array.join("");
    console.log(string);

}

//==============================================================додаткова-задача 1. посилання 2 js
{console.log("=========додаткова-задача 1. посилання 2=========")

    let string = 'aaa@bbb@ccc';
    console.log(string.replace(/@/g,'!'));

}

//==============================================================додаткова-задача 2. посилання 2 js
{console.log("=========додаткова-задача 2. посилання 2=========")

    let str = 'aaa bbb ccc'
    console.log(str.substr(4, 3));
    console.log(str.substring(4, 7));
    console.log(str.slice(4, 7));

}

//==============================================================додаткова-задача 3. посилання 2 js
{console.log("=========додаткова-задача 3. посилання 2=========")

    let str = '2025-12-31';
    let arr = str.split('-');
    let newStr = arr[2] + '/' + arr[1] + '/'+arr[0];
    console.log(newStr);

}


//==============================================================задача 1. посилання 3 js
{console.log("============задача 1. посилання 3============")

    let array1 = [1, 2, 3]
        array2 = [4, 5, 6]
    console.log(array1.concat(array2))
}

//==============================================================задача 2. посилання 3 js
{console.log("============задача 2. посилання 3============")

    let array = [1, 2, 3]
    console.log(array.reverse())
}

//==============================================================задача 3. посилання 3 js
{console.log("============задача 3. посилання 3============")

    let array = [1, 2, 3];
    array.push(4, 5, 6);
    console.log(array)
}

//==============================================================задача 4. посилання 3 js
{console.log("============задача 4. посилання 3============")

    let array = [1, 2, 3];
    array.unshift(4, 5, 6);
    console.log(array)
}

//==============================================================задача 5. посилання 3 js
{console.log("============задача 5. посилання 3============")

    let array = ['js', 'css', 'jq']
    let elem = array.shift()
    console.log(elem)
}

//==============================================================задача 6. посилання 3 js
{console.log("============задача 6. посилання 3============")

    let array = ['js', 'css', 'jq']
    let elem = array.pop()
    console.log(elem)
}

//==============================================================задача 7. посилання 3 js
{console.log("============задача 7. посилання 3============")

    let array = [1, 2, 3, 4, 5]
    console.log(array.slice(0, 3));

}

//==============================================================задача 8. посилання 3 js
{console.log("============задача 8. посилання 3============")

    let array = [1, 2, 3, 4, 5]
    console.log(array.slice(3, 5));
}

//==============================================================задача 9. посилання 3 js
{console.log("============задача 9. посилання 3============")

    let array = [1, 2, 3, 4, 5]
    array.splice(1, 2)
    console.log(array)
}

//==============================================================задача 10. посилання 3 js
{console.log("============задача 10. посилання 3============")

    let array = [1, 2, 3, 4, 5]
    let del = array.splice(1, 3)
    console.log(del)
}

//==============================================================задача 11. посилання 3 js
{console.log("============задача 11. посилання 3============")

    let array = [1, 2, 3, 4, 5]
    array.splice(3, 0, 'a', 'b', 'c');
    console.log(array);
}

//==============================================================задача 12. посилання 3 js
{console.log("============задача 12. посилання 3============")

    let array = [1, 2, 3, 4, 5]
    array.splice(1, 0, 'a', 'b') + array.splice(6, 0, 'c') + array.splice(8,0, 'e')
    console.log(array);
}

//==============================================================задача 13. посилання 3 js
{console.log("============задача 13. посилання 3============")

    let array = [3, 4, 1, 2, 7]
    console.log(array.sort());
}

//==============================================================задача 14. посилання 3 js
{console.log("============задача 14. посилання 3============")

    let obj = {js:'test', jq: 'hello', css: 'world'}
    console.log(Object.keys(obj));
}


console.log('-------------------------------------------');
console.log('задача от рубі зроблена на джсі');
let array = [44, 24, 3, 56, 6, 15, 16, 210, 11, 9];
let even = [];
let odd = [];

array.forEach(function(item, index){
    if (index % 2 === 0) {
        even.push(array[index]);
    } else {
        odd.push(array[index]);
    }
})

let fullArray = even.concat(odd);

console.log(fullArray);