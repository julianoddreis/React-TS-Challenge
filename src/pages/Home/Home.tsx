import { Card } from '../../components/Card'
import dummyData from '../../dummyData.json' // To be replaced with your api response data
import { HomeContainer } from './Home.styles'

export const Home = () => {
  return (
    <>
      <h1>Space X Ships</h1>
      <HomeContainer>
        <Card image={dummyData.image} name={dummyData.name} homePort={dummyData.home_port} roles={dummyData.roles} />
      </HomeContainer>
    </>
  )
}

export default Home
