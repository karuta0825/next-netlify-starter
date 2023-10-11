import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  /* const handleSubmit = (event) => {
  *   event.preventDefault();
  
  *   const myForm = event.target;
  *   const formData = new FormData(myForm);
  
  *   fetch('/', {
  *     method: 'POST',
  *     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  *     body: new URLSearchParams(formData).toString(),
  *   })
  *     .then(() => console.log('Form successfully submitted'))
  *     .catch((error) => alert(error));
  * }; */

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Your Role:{' '}
              <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </main>

      <Footer />
    </div>
  );
}
