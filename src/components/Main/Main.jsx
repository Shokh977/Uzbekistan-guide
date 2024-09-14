import {About} from './About/About';
import {News} from './News/News';
import classes  from './main.module.css'
export const Main =()=>{
    return (
        <div className={classes.main}>
        <About className={classes.about} />
        <News className={classes.news}/>
      </div>
    )
}

