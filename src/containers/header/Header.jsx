import './header.css';
import people from './../../assets/people.png';

const Header = () => {
  return (
    <section className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
          <p className='gpt3__header-title gradient__text'>Let’s Build Something amazing with <h1>GPT-3 OpenAI</h1></p>
          <p className='gpt3__header-content__description'>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <div className='gpt3__header-content__form-block'>
            <form className='gpt3__header-content__form' action="#" method="post">
              <input type='email' placeholder='Your Email Address' />
              <button type='submit'>Get Started</button>
            </form>
          </div>
          <div className='gpt3__header-content__people'>
            <img src={people} alt='people' />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
      </section>
  )
};

export default Header;