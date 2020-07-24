import React, { useState } from 'react';

import ComponentStore from '../store/componentStore';

const { CluiStore } = ComponentStore;

const { updateConfiguration } = CluiStore;

type SliderProps = {
  parents: Array<string>
  title: string
  min: number
  max: number
}

const Slider = ({
  parents, title, min, max,
}: SliderProps) => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(e.target.value, 10));
    updateConfiguration({ value: sliderValue }, [...parents]);
  };

  return (
    <div>
      <div className="configure-slider">
        <input type="range" min={min} max={max} value={sliderValue} onChange={handleChange} className="slider" />
      </div>
      <div>
        <p>
          {title}
          {' '}
          :
          {sliderValue}
          %
        </p>
      </div>
      {/* @ts-ignore */}
      <style jsx>
        {`
        .configure-slider {
          background: #30363b;
          border-radius: 5px;
        }
        .slider {
          -webkit-appearance: none;
          background: #272c31;
          border-radius: 100px;
          padding: 0em !important;
          border: 1px solid #2723c1 !important;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 10px;
          width: 10px;
          border-radius: 50%;
          background: #3fbd71;
          cursor: pointer;
        }
        `}

      </style>
    </div>
  );
};

export default Slider;
