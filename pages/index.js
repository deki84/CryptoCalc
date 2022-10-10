import Form from '../components/Form';

export default function Home({ coins }) {
  return (
    <>
      <div>
        <Form coins={coins} />
      </div>
    </>
  );
}
