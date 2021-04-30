import IIcon from './index.interface';

export function Icon({ name }: IIcon) {
  return (
    <svg>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
}
