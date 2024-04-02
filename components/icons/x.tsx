import type { ComponentPropsWithoutRef } from 'react';

type XProps = ComponentPropsWithoutRef<'svg'>;

export const X = (props: XProps) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      d="M13.7124 10.6218L20.4133 3H18.8255L13.0071 9.61788L8.35992 3H3L10.0274 13.0074L3 21H4.58799L10.7324 14.0113L15.6401 21H21L13.7121 10.6218H13.7124ZM11.5375 13.0956L10.8255 12.0991L5.16016 4.16971H7.59922L12.1712 10.5689L12.8832 11.5655L18.8262 19.8835H16.3871L11.5375 13.096V13.0956Z"
      fill="currentColor"
    />
  </svg>
);
