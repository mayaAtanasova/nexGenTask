import { useState } from 'react';
import { formatDiagnosticsWithColorAndContext } from 'typescript';
import useFormValidate from '../../hooks/useFormValidate';
import IForm from '../../Interfaces/IForm';
import IFormError from '../../Interfaces/IFormError';
import styles from './RegistrationForm.module.css';

const RefistrationForm = () => {

  const emptyForm: IForm = {
    firstName: '',
    lastName: '',
    birth: '',
    gender: '',
    favColor: '',
    bio: '',
    website: '',
    field: '',
    active: 0,
    phone: '',
    email: '',
    password: '',
    repass: '',
    image: '',
    toc: false,
  }

  const [form, setForm] = useState<IForm>(emptyForm);
  const [isChecked, setIsCHecked] = useState(false)
  const [formValid, setFormValid] = useState(true);
  const { error, validateForm } = useFormValidate(form);

  const submitForm = (e: any) => {
    e.preventDefault();
    const { isFormValid } = validateForm(form);

    if (isFormValid) {
      console.log(form);
    }
    console.log(isFormValid);
    
  }

  const updateForm = (event: any) => {
    setForm((formState) => {

      if (event.target.name === 'toc') {
        return {
          ...formState,
          toc: !formState.toc
        }
      }
      return {
        ...formState,
        [event.target.name]: event.target.value,
      }
    });
  }

  return (
    <form
      className={styles.regForm}
      onSubmit={submitForm}>

      <fieldset>
        <legend>PersonalData</legend>
        <div className={styles.fullName}>
          <label>Name:</label>
          <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={updateForm} className={error.firstName.err ? styles.error : ''} />
          <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={updateForm} className={error.lastName.err ? styles.error : ''} />
        </div>

        <div className={styles.nameErrors}>
          {error.firstName.err &&
            <div className={styles.errorMessage}>
              <p>First Name {error.firstName.message}</p>
            </div>}
          {error.lastName.err &&
            <div className={styles.errorMessage}>
              <p>Last Name {error.lastName.message}</p>
            </div>}
        </div>

        <div className={styles.dateGenderColor}>

          <div>
            <label>Birth date:</label>
            <input type="date" name="birth" value={form.birth} onChange={updateForm} className={error.birth.err ? styles.error : ''} />
          </div>

          <div>
            <label>Gender:</label>
            <label className={error.gender.err ? styles.error : ''} onChange={updateForm}>
              <input type="radio" name="gender" value="m" /> M
              <input type="radio" name="gender" value="f" /> F
              <input type="radio" name="gender" value="d" /> D
            </label>
          </div>

          <div>
            <label>Favorite color:</label>
            <input type="color" name="favColor" value={form.favColor} className={error.favColor.err ? styles.error : ''} onChange={updateForm} />
          </div>

        </div>

        <div className={styles.bio}>
          <label htmlFor="bio">A few words to describe yourself: </label>
          <textarea name="bio" cols={30} rows={3} value={form.bio} className={error.bio.err ? styles.error : ''} onChange={updateForm}></textarea>
        </div>

        <div className={styles.website}>
          <label >Link to your website:</label>
          <input type="url" name="website" value={form.website} className={error.website.err ? styles.error : ''} onChange={updateForm} />
        </div>

        <div className={styles.fieldOfWork}>

          <div className={styles.field}>
            <label htmlFor="field">Field of work:</label>
            <select name="field" value={form.field} className={error.field.err ? styles.error : ''} onChange={updateForm}>
              <option value="">Please select one:</option>
              <option value="design">Design</option>
              <option value="development">Software Development</option>
              <option value="architecture">Architecture</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={styles.yearsActive}>
            <label>Years active: </label>
            <input type="number" min={0} max={99} step={1} name="active" value={form.active} className={error.active.err ? styles.error : ''} onChange={updateForm} />
          </div>
        </div>

        <div className="phone">
          <label>Contact phone number:</label>
          <input type="tel" name="phone" value={form.phone} className={error.phone.err ? styles.error : ''} onChange={updateForm} />
        </div>

      </fieldset>

      <fieldset className={styles.loginData}>

        <legend>Login credentials:</legend>

        <div className={styles.credentials}>

          <div>
            <label>Email:</label>
            <input type="email" name="email" value={form.email} className={error.email.err ? styles.error : ''} onChange={updateForm} />
          </div>

          <div>
            <label>Password:</label>
            <input type="password" name="password" value={form.password} className={error.password.err ? styles.error : ''} onChange={updateForm} />
          </div>

          <div>
            <label>Repeat Password:</label>
            <input type="password" name="repass" value={form.repass} className={error.repass.err ? styles.error : ''} onChange={updateForm} />
          </div>

        </div>

        <label htmlFor="profileImage" className={`${styles.imageSelect} ${error.image.err && styles.error}`}>
          <p>Select a profile picture:</p>
          <h5>&#128247;</h5>
        </label>
        <input id="profileImage" type="file" name="image" value={form.image} onChange={updateForm} />


      </fieldset>
      <div className={error.toc.err ? styles.error : ''}>
        <input type="checkbox" name="toc" checked={form.toc}  onChange={updateForm} /> I have read and agree with the terms and conditions
      </div>

      <div className={styles.actionButtons}>
        <input type="submit" value="SUBMIT FORM"/>
        <input type="reset" value="RESET FORM" onClick={() => setForm(emptyForm)} />
      </div>
    </form>

  )
}

export default RefistrationForm;