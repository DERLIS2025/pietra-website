import Hero from '@/components/Hero'
import Ambientes from '@/components/Ambientes'
import Catalogo from '@/components/Catalogo'
import Destacado from '@/components/Destacado'
import TrabajosPersonalizados from '@/components/TrabajosPersonalizados'
import Trabajos from '@/components/Trabajos'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ambientes />
      <Catalogo />
      <Destacado />
      <TrabajosPersonalizados />
      <Trabajos />
    </>
  )
}
