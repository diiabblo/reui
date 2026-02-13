export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    primary: '#8B5CF6',
    secondary: '#EC4899',
    background: '#FFFFFF',
    text: '#1F2937',
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: '#8B5CF6',
    secondary: '#EC4899',
    background: '#1F2937',
    text: '#FFFFFF',
  },
};
