# Sample Image Placeholder

For Exercise 4 to work properly, you need to add a high-resolution image to the `public` folder.

## How to add the sample image:

1. Find or download any high-resolution image (at least 1920x1280 pixels)
2. Save it as `sample-image.jpg` in the `public/` folder
3. The path should be: `Lab06_UIT/public/sample-image.jpg`

## Alternative: Use a placeholder service

If you don't have an image, you can modify the image URLs in `app/page.tsx` to use a placeholder service:

```javascript
// Replace the src in both places:
src="https://picsum.photos/1200/800"
// or
src="https://placehold.co/1200x800/png"
```

## Recommended test images:

- Download from: https://unsplash.com/ (free high-quality images)
- Or use: https://source.unsplash.com/random/1200x800 (random image)
- Or generate one from AI: https://placehold.co/1200x800.jpg

Once you add the image, the optimization comparison in Exercise 4 will work correctly.
