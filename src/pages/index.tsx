const serviceId = process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY;
const baseUrl = `https://${serviceId}.microcms.io/api/v1`
const apiKey: string = process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY as string;

const Home = () => {
  console.log(serviceId);
  return (
    <div>
      <main>
        <h1 className="text-red-400">こんにちは</h1>
      </main>
    </div>
  )
}

export default Home
