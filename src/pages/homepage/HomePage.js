import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <section id={classes['home-page']}>
      <form method='POST' className={classes['home-page__form']}>
        <input type='text' />
        <button type="submit">Create</button>
      </form>
    </section>
  )
}

export default HomePage 