import { Feed } from '../src/busines-components/feed'
import { FeedLayout } from '../src/components/layout/feed-layout'
import { getLayout } from '../src/components/layout/main-layout'

function Home() {
  return (
    <>
      <FeedLayout>
        <Feed />
      </FeedLayout>
    </>
  )
}

export default Home

Home.getLayout = getLayout
