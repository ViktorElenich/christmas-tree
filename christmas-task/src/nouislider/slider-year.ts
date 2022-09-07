import noUiSlider from 'nouislider';

export function yearSlider() {
  const sliderYear = document.getElementById('slider-year') as HTMLElement;

  const slider = noUiSlider.create(sliderYear, {
    start: [1940, 2020],
    connect: true,
    step: 1,
    range: {
      min: [1940],
      max: [2020],
    },
  });

  const inputYearMin = document.querySelector('.min-year') as HTMLInputElement;
  const inputYearMax = document.querySelector('.max-year') as HTMLInputElement;
  const inputsYear = [inputYearMin, inputYearMax];

  slider.on('update', (values: (string | number)[], handle: number) => {
    inputsYear[handle].value = String(Math.round(Number(values[handle])));
    const change = new Event('change');
    inputsYear[handle].dispatchEvent(change);
  });
}
