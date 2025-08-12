import {RiArrowRightUpLongLine } from '@remixicon/react';
import React from 'react';

interface buttonProps {
    label: string;
}

const Button = ({ label }: buttonProps) => {
  return <button>
    <h2 className="">{label}</h2>
    <span className="">
        <RiArrowRightUpLongLine />
    </span>
    </button>
};

export default Button;
