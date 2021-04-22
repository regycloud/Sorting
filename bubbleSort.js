console.log('Hello, world!')
let array = [1,4,2,10,7,30,9999, 123];

let done = false;
while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
}

  console.log(array);