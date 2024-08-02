// pages/protected.js

import { getSession } from 'next-auth/react';

export default function Protected() {
  return <h1>Protected Page</h1>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
