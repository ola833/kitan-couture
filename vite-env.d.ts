// Manual module declarations to provide type safety for the assets used in the project.
// This replaces the vite/client reference which can cause issues in some environments.

declare module '*.mp4' {
  // Fix: Renamed constant to avoid duplicate identifier 'src'
  const mp4_asset: string;
  export default mp4_asset;
}

declare module '*.png' {
  // Fix: Renamed constant to avoid duplicate identifier 'src'
  const png_asset: string;
  export default png_asset;
}

declare module '*.PNG' {
  // Fix: Renamed constant to avoid duplicate identifier 'src'
  const png_caps_asset: string;
  export default png_caps_asset;
}

declare module '*.jpg' {
  // Fix: Renamed constant to avoid duplicate identifier 'src'
  const jpg_asset: string;
  export default jpg_asset;
}

declare module '*.jpeg' {
  // Fix: Renamed constant to avoid duplicate identifier 'src'
  const jpeg_asset: string;
  export default jpeg_asset;
}
