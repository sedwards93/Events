import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function Home({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Upcoming Events</h1>
    </Layout>
  );
}
// getServerSideProps runs every time we go to '/'. If we run getStaticProps, will make the request at build time --> this will not reflect updates.
// Could add revalidate to the props.
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  return {
    props: { events },
    revalidate: 1,
  };
}
