export const cacheImages = (imagePaths: string[]) => {
   imagePaths.forEach((src: string)=>{
      const img = new Image();
      img.src = src;
    })
}