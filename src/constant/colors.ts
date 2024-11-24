const colors = {
  "--unnamed-color-006136": "#006136",
  "--unnamed-color-74b71b": "#74b71b",
  "--unnamed-color-006a4e": "#006a4e",
  "--unnamed-color-bca235": "#bca235",
  "--unnamed-color-262626": "#262626",
  "--unnamed-color-838eab": "#838eab",
  "--unnamed-color-8a8f9c": "#8a8f9c",
  "--unnamed-color-ffffff": "#ffffff",
  "--unnamed-color-f2f2f4": "#f2f2f4",
  "--unnamed-color-525f7f": "#525f7f",
  "--unnamed-color-e6ebf1": "#e6ebf1",
  "--unnamed-color-e7246b": "#e7246b",
  "--unnamed-color-e6e8ee": "#e6e8ee",
  "--unnamed-color-dcb81d": "#dcb81d",
  "--unnamed-color-e1e8ee": "#e1e8ee",
  "--unnamed-color-f1f1f13b": "#f1f1f13b",
  "--unnamed-color-fcfcfc": "#fcfcfc",
  "--unnamed-color-f8bcd2": "#f8bcd2",
  "--unnamed-color-ee6295": "#ee6295",
  "--unnamed-color-3c3c3f": "#3c3c3f",
  "--unnamed-color-59626a": "#59626a",
} as const;

export default colors;

export type ColorType = keyof typeof colors;