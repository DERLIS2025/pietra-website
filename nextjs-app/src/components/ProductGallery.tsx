type ProductGalleryProps = {
  name: string
  images: string[]
}

export default function ProductGallery({ name, images }: ProductGalleryProps) {
  return (
    <section className="product-gallery" aria-label={`Galería de ${name}`}>
      {images.map((image, index) => (
        <figure key={image + index} className="gallery-item">
          <img src={image} alt={`${name} imagen ${index + 1}`} />
        </figure>
      ))}
    </section>
  )
}
