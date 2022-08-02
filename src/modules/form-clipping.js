import IMask from 'imask';
const formClipping = () => {
  const telInputs = document.querySelectorAll('input[type="tel"]');
  const heightInputs = document.querySelectorAll('.input-height');
  const widthInputs = document.querySelectorAll('.input-width');
  const costInputs = document.querySelectorAll('.input-cost');
  const numbInputs = document.querySelectorAll('input[type="number"]');

  const telMaskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  const numberMaskOptions = {
    mask: Number
  };
  const heightMaskOptions = {
    mask: Number,
    min: 10,
    max: 100
  };
  const widthMaskOptions = {
    mask: Number,
    min: 50,
    max: 600
  };
  const costMaskOptions = {
    mask: Number,
    min: 2000,
  };

  let telsMaskArray = []
  let numbersMaskArray = []

  telInputs.forEach((elem) => {
    telsMaskArray.push(IMask(elem, telMaskOptions));
  })
  heightInputs.forEach((elem) => {
    numbersMaskArray.push(IMask(elem, heightMaskOptions));
  })
  widthInputs.forEach((elem) => {
    numbersMaskArray.push(IMask(elem, widthMaskOptions));
  })
  costInputs.forEach((elem) => {
    numbersMaskArray.push(IMask(elem, costMaskOptions));
  })

  //default options   doesnt override an existing one
  numbInputs.forEach((elem) => {
    numbersMaskArray.push(IMask(elem, numberMaskOptions));
  })
}

export default formClipping