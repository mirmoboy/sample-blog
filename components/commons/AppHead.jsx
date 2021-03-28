import Head from 'next/head'

const AppHead = ({ title, description, keywords }) => {

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description}></meta>
      <meta name="keywords" content={keywords}></meta>

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default AppHead