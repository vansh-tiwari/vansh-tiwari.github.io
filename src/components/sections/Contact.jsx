import React, { useRef, useState } from "react";
import Box from '@mui/material/Box';
import EarthCanvas from "../canvas/Earth";
import { darkTheme as theme} from "../../helper/themes";

const Contact = () => {
  const [clicked, setClicked] = useState(0);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    const values = {};
    for (let [name, value] of formData.entries()) {
      values[name] = value;
    }

    console.log("Form values:", values);
    setClicked(1);
    setTimeout(()=>setClicked(0), 2000);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.wrapper}>
        <EarthCanvas />
        <Box sx={styles.title}>Contact</Box>
        <Box sx={styles.desc}>
          Feel free to reach out to me for any questions or opportunities! <br/>
           But don't use below form as <Box component='span' style={{textDecoration: clicked===1 ? 'underline' : 'none'}}>it's not working</Box>, Let's connect at LinkedIn.
        </Box>
        <form style={styles.form} ref={form} onSubmit={handleSubmit}>
        <Box sx={styles.contactForm}>
          <Box sx={styles.contactTitle}>Email Me 🚀</Box>
          <Box component='input' sx={styles.contactInput} placeholder="My Email: tiwari1998@hotmail.com" name="from_email" />
          <Box component='input' sx={styles.contactInput} placeholder="Name" name="from_name" />
          <Box component='input' sx={styles.contactInput} placeholder="The subject" name="subject" />
          <Box component='textarea' sx={styles.contactInputMessage} placeholder="The message" name="message" rows={4} />
          <Box component='input' sx={styles.contactButton} type="submit" value="Send" />
        </Box>
        </form>
      </Box>
    </Box>
  );
};

export const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    zIndex: 1,
    alignItems: 'center',
  },
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '1350px',
    padding: '0px 0px 80px 0px',
    gap: '12px',
  },
  form: {
    width: '100%',
    textAlign: '-webkit-center',
  },
  title: {
    fontSize: { xs: '32px', md: '52px' },
    textAlign: 'center',
    fontWeight: '600',
    marginTop: { xs: '12px', md: '20px' },
    color: theme.text_primary,
  },
  desc: {
    fontSize: { xs: '16px', md: '18px' },
    textAlign: 'center',
    maxWidth: '600px',
    color: theme.text_secondary,
  },
  contactForm: {
    width: '95%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.card_dark,
    border: `1px solid ${theme.card}`,
    padding: '32px',
    borderRadius: '12px',
    boxShadow: `${theme.card_dark}+99 0px 4px 24px`,
    marginTop: '28px',
    gap: '12px',
  },
  contactTitle: {
    fontSize: '28px',
    marginBottom: '6px',
    fontWeight: '600',
    color: theme.text_primary,
  },
  contactInput: {
    flex: '1',
    backgroundColor: 'transparent',
    border: `1px solid ${theme.text_secondary + 50}`,
    outline: 'none',
    fontSize: '18px',
    color: theme.text_primary,
    borderRadius: '12px',
    padding: '12px 16px',
    '&:focus': {
      border: `1px solid ${theme.primary}`,
    },
  },
  contactInputMessage: {
    flex: '1',
    backgroundColor: 'transparent',
    border: `1px solid ${theme.text_secondary + 50}`,
    outline: 'none',
    fontSize: '18px',
    color: theme.text_primary,
    borderRadius: '12px',
    padding: '12px 16px',
    '&:focus': {
      border: `1px solid ${theme.primary}`,
    },
  },
  contactButton: {
    width: '100%',
    textDecoration: 'none',
    textAlign: 'center',
    background: `linear-gradient(225deg, ${theme.primary+99} 0%, ${theme.secondary} 100%)`,
    padding: '13px 16px',
    marginTop: '2px',
    borderRadius: '12px',
    border: 'none',
    color: theme.text_primary,
    fontSize: '18px',
    fontWeight: '600',
  },
};

export default Contact;
