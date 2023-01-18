import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes, memo } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  genreId: number;
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
  buttonClickCallback: (id: number) => void
}

function ButtonComponent({ genreId, iconName, title, selected, buttonClickCallback, ...rest }: ButtonProps) {
  return (
    <button type="button" {...(selected && { className: 'selected' })} {...rest} onClick={() => buttonClickCallback(genreId)}>
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
}

export const Button = memo(ButtonComponent)