

// Fibonacci serisini hesaplayan bir fonksiyon yazın. Kullanıcıdan alınan bir sayıya kadar olan Fibonacci sayılarını listeleyebilirsiniz.
function fibonacci(max) {
    let result = [0, 1];
    while (max > result[result.length-1]) {
        debugger
        let sum =  result[result.length-1] + result[result.length-2];
        if (sum < max) {
            result.push(sum);
        }  else {
            break;
        }
    }
    return result;
}

// Bir cümle içindeki en uzun kelimeyi bulan bir fonksiyon yazın.
function enUzunKelime(cumle) {
    let kelimeler = cumle.split(" ");
    let uzunluklar = kelimeler.map((kelime) => {return {kelime: kelime, uzunluk: kelime.length} });
    uzunluklar.sort((a,b) => b.uzunluk - a.uzunluk);
    return uzunluklar[0].kelime;
}

// Bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.
function sayiToplami(sayiDizisi) {
    return sayiDizisi.reduce((total, num) => total + num, 0);
}

// Belirli bir aralıktaki asal sayıları bulan bir fonksiyon yazın.
function asalSayilar(x, y) {
    
    let sayilar = [x];
    while (y > sayilar[sayilar.length -1]) {
        x++;
        sayilar.push(x);
    }
    let asallar = sayilar.filter(asalMi);
    function asalMi(sayi) {
        if (sayi <= 1) {
            return false
        }
        for (let i = 2; i < sayi; i++) {
            if (sayi % i === 0) {
                return false;
            } 
        }
        return true;
    }
    return asallar;
}

// Bir diziyi tersine çeviren bir fonksiyon yazın. (Örneğin: [1, 2, 3] → [3, 2, 1])
function tersine(array) {
    return array.reverse();
}

// Belirli bir aralıktaki mükemmel sayıları bulan bir fonksiyon yazın. (Mükemmel sayı, kendisi hariç bölenlerinin toplamı kendisine eşit olan sayıdır.)
function mükemmelSayi(x,y) {
    let sayilar = [x];
    while (y > sayilar[sayilar.length -1]) {
        x++;
        sayilar.push(x);
    }
    let mükemmel = sayilar.filter(mükemmelMi);
    function mükemmelMi(sayi) {
        let bölünenler = [];
        for (let i = 1; i < sayi; i++) {
            if (sayi % i === 0) {
                bölünenler.push(i);
            }
        }
        if (bölünenler.reduce((toplam, num) => toplam = toplam + num, 0) === sayi) {
            return true;
        } else return false;
    }
    return mükemmel;
}

// İki nesnenin özelliklerini birleştiren bir fonksiyon yazın. İki nesnenin aynı özelliği varsa, ikinci nesnenin değeri kullanılmalıdır. key'lerini ve valueları birleştir
function objeBirlestir(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    let newObj = {};
    for (let i = 0; i < keys1.length; i++) {
        if (!keys2.includes(keys1[i])) {
            newObj[keys1[i]] = obj1[keys1[i]]; 
        }
    }
    for (let i = 0; i < keys2.length; i++) {
        newObj[keys2[i]] = obj2[keys2[i]]; 
    }
    return newObj;
}

// Bir dizideki tekrarlanan elemanları bulan bir fonksiyon yazın.
function tekrarlanan(dizi) {
    let result = [];
    for (let i in dizi) {
        let removed = dizi.splice(0,1);
        if (dizi.includes(removed[0])) {
            if (!result.includes(removed[0])) {
                result.push(removed[0]);
            }
        }
    }
    return result;
}

// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
function compareTriplest(a, b) {
    let scoreA = 0, scoreB = 0;
    a.forEach((element, i) => {
        if (element > b[i]) {
            scoreA++;
        } else if (b[i] > element) {
            scoreB++;
        }
    });
    return [scoreA, scoreB];
}

// https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true
function aVeryBigSum(ar) {
    let sum = ar.reduce((total, num) => total = total + num, 0);
    return sum;
}

// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

function plusMinus(arr) {
    let categories = {positive: 0, negative: 0, zero: 0}
    arr.forEach(function(item) { 
        if(item > 0) {
          categories.positive += 1;  
        } else if (item < 0) {
            categories.negative += 1;
        } else categories.zero += 1;
    });
    let ratios = [];
    let numberOfItems = arr.length;
    Object.keys(categories).forEach(item => ratios.push(categories[item]/numberOfItems.toFixed(6)));
    ratios.forEach(item => console.log(item));
}

// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
function miniMaxSum(arr) {
    let min = arr.sort((a,b) => a-b)[0];
    let max = arr.sort((a,b) => b-a)[0];
    let sum = arr.reduce((total,num) => total = total + num, 0);
    console.log(`${sum - max} ${sum - min}`);
}