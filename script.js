
const parts = {
  head: ['10头.png', '11头.png', '12头.png', '13头.png', '14头.png', '15头.png', '16头.png', '17头.png', '18头.png', '19头.png', '1头.png', '20头.png', '21头.png', '22头.png', '23头.png', '24头.png', '25头.png', '26头.png', '27头.png', '28头.png', '29头.png', '2头.png', '30头.png', '31头.png', '32头.png', '33头.png', '34头.png', '35头.png', '36头.png', '37头.png', '38头.png', '39头.png', '3头.png', '40头.png', '42头.png', '4头.png', '5头.png', '6头.png', '7头.png', '8头.png', '9头.png'],
  eyes: ['10眼.png', '11眼.png', '12眼.png', '13眼.png', '14眼.png', '15眼.png', '16眼.png', '17眼.png', '18眼.png', '19眼.png', '1眼.png', '20眼.png', '21眼.png', '22眼.png', '23眼.png', '24眼.png', '25眼.png', '26眼.png', '27眼.png', '28眼.png', '29眼.png', '2眼.png', '30眼.png', '31眼.png', '32眼.png', '33眼.png', '34眼.png', '35眼.png', '36眼.png', '37眼.png', '38眼.png', '39眼.png', '3眼.png', '40眼.png', '42眼.png', '4眼.png', '5眼.png', '6眼.png', '7眼.png', '8眼.png', '9眼.png'],
  nose: ['10鼻.png', '11鼻.png', '12鼻.png', '13鼻.png', '14鼻.png', '15鼻.png', '16鼻.png', '17鼻.png', '18鼻.png', '19鼻.png', '1鼻.png', '20鼻.png', '21鼻.png', '22鼻.png', '23鼻.png', '24鼻.png', '25鼻.png', '26鼻.png', '27鼻.png', '28鼻.png', '29鼻.png', '2鼻.png', '30鼻.png', '31鼻.png', '32鼻.png', '33鼻.png', '34鼻.png', '35鼻.png', '36鼻.png', '37鼻.png', '38鼻.png', '39鼻.png', '3鼻.png', '40鼻.png', '42鼻.png', '4鼻.png', '5鼻.png', '6鼻.png', '7鼻.png', '8鼻.png', '9鼻.png'],
  mouth: ['10嘴.png', '11嘴.png', '12嘴.png', '13嘴.png', '14嘴.png', '15嘴.png', '16嘴.png', '17嘴.png', '18嘴.png', '19嘴.png', '1嘴.png', '20嘴.png', '21嘴.png', '22嘴.png', '23嘴.png', '24嘴.png', '25嘴.png', '26嘴.png', '27嘴.png', '28嘴.png', '29嘴.png', '2嘴.png', '30嘴.png', '31嘴.png', '32嘴.png', '33嘴.png', '34嘴.png', '35嘴.png', '36嘴.png', '37嘴.png', '38嘴.png', '39嘴.png', '3嘴.png', '40嘴.png', '42嘴.png', '4嘴.png', '5嘴.png', '6嘴.png', '7嘴.png', '8嘴.png', '9嘴.png']
};

let currentIndex = { head: 0, eyes: 0, nose: 0, mouth: 0 };

function changePart(part) {
  currentIndex[part] = (currentIndex[part] + 1) % parts[part].length;
  document.getElementById(part).src = "./assets/" + parts[part][currentIndex[part]];
}
