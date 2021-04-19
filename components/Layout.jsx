import Head from 'next/head';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title}</title>

        {/* Tailwind CSS */}
        <link href='https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.4/tailwind.min.css' rel='stylesheet' />
        {/* Font Awesome  */}
        <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' rel='stylesheet' />
      </Head>
      {children}
    </>
  );
}
