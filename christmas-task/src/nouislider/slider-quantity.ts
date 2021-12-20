import noUiSlider, { target } from 'nouislider';

export function quantitySlider(){
  const sliderQuantity = <target>document.getElementById('slider-quantity');

  const slider = noUiSlider.create(sliderQuantity, {
    start: [1, 12],
    connect: true,
    step: 1,
    range: {
      min: [1],
      max: [12],
    },
  });

  const inputQuantityMin = document.querySelector('.min-quantity') as HTMLInputElement;
  const inputQuantityMax = document.querySelector('.max-quantity') as HTMLInputElement;
  const inputsQuantity = [inputQuantityMin, inputQuantityMax];

  slider.on('update', (values: (string | number)[], handle: number) => {
      inputsQuantity[handle].value = String(Math.round(Number(values[handle])));
      const change = new Event('change');
      inputsQuantity[handle].dispatchEvent(change);
    },
  );
}
