import MenuCabeza from '../../components/MenuCabeza'
import MenuPie from '../../components/MenuPie'
import MiniGameComponent from '../../components/MiniGameComponent'

function MiniGame() {
  return (
    <>
      <MenuCabeza />
        <MiniGameComponent/>
      <MenuPie />
    </>
  )
}

export default MiniGame