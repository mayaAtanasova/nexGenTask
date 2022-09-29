import styles from './RegistrationForm.module.css'

const RefistrationForm = () => {
  return (
    <form className={styles.regForm}>

      <fieldset>
        <legend>PersonalData</legend>
        <div className={styles.fullName}>
          <label>Name:</label>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <div className={styles.dateGenderColor}>

          <div>
            <label>Birth date:</label>
            <input type="date" />
          </div>

          <div>
            <label>Gender:</label>
            <label>
              <label> <input type="radio" name="gender" value="m" /> M</label>
              <label> <input type="radio" name="gender" value="f" /> F</label>
              <label> <input type="radio" name="gender" value="d" /> D</label>
            </label>
          </div>

          <div>
            <label>Favorite color:</label>
            <input type="color" />
          </div>

        </div>

        <div className={styles.bio}>
          <label htmlFor="bio">A few words to describe yourself: </label>
          <textarea name="bio" cols={30} rows={3}></textarea>
        </div>

        <div className={styles.website}>
          <label >Link to your website:</label>
          <input type="url" />
        </div>

        <div className={styles.fieldOfWork}>

          <div className={styles.field}>
            <label htmlFor="field">Field of work:</label>
            <select name="field">
              <option value="">Please select one:</option>
              <option value="design">Design</option>
              <option value="development">Software Development</option>
              <option value="architecture">Architecture</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={styles.yearsActive}>
            <label>Years active: </label>
            <input type="number" min={0} max={99} step={1} />
          </div>
        </div>

        <div className="phone">
          <label>Contact phone number:</label>
          <input type="tel" />
        </div>

      </fieldset>

      <fieldset className={styles.loginData}>

        <legend>Login credentials:</legend>

        <div className={styles.credentials}>

          <div>
            <label>Email:</label>
            <input type="email" />
          </div>

          <div>
            <label>Password:</label>
            <input type="password" />
          </div>

          <div>
            <label>Repeat Password:</label>
            <input type="password" />
          </div>

        </div>

        <label htmlFor="profileImage" className={styles.imageSelect}>
          <p>Select a profile picture:</p>
          <h5>&#128247;</h5>
        </label>
        <input id="profileImage" type="file" />

      </fieldset>
      <div className="toc">
        <input type="checkbox" /> I have read and agree with the terms and conditions
      </div>

      <div className={styles.actionButtons}>
        <input type="submit" value="SUBMIT FORM" />
        <input type="reset" value="RESET FORM" />
      </div>
    </form>

  )
}

export default RefistrationForm;