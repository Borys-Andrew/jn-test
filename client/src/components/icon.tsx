import * as React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title?: string;
}

export const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  title,
  ...props
}) => {
  return <IconComponent aria-label={title} {...props} />;
};
