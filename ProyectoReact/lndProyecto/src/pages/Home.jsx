import MenuCabeza from '../../components/MenuCabeza'
import MenuPie from '../../components/MenuPie'
import CuerpoHome from '../../components/CuerpoHome'
import TextoHome from '../../components/TextoHome'
import DestacadoHome from '../../components/DestacadoHome'
import SeparadorImagen from '../../components/SeparadorImagen'
import ExplorarHome from '../../components/ExplorarHome'

function Home() {
  return (
    <>
      <MenuCabeza />
      <CuerpoHome />
      <DestacadoHome />
      <TextoHome />
      <SeparadorImagen />
      <ExplorarHome />
      <MenuPie />
    </>
  )
}

export default Home